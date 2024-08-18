import React, { useState } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SuccesMsg from '@/Components/SuccesMsg';

const Create = ({ auth }) => {
    const { suppliers, critere } = usePage().props;

    const { data, setData, post, errors, reset } = useForm({
        supplier_id: '',
        evaluations: critere.map(c => ({
            critere_id: c.id,
            score: '',
        })),
    });

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const newEvaluations = [...data.evaluations];
        newEvaluations[index][name] = value;
        setData('evaluations', newEvaluations);
    };

    const [isModalOpen, setModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.supplier_id) {
            setData('errors.supplier_id', 'Veuillez sélectionner un fournisseur.');
            return;
        }
        post(route('supplierEvaluation.store'), {
            data,
            onSuccess: () => {
                setData({
                    supplier_id: '',
                    evaluations: critere.map(c => ({
                        critere_id: c.id,
                        score: '',
                    })),
                });
                setModalOpen(true);
            },
        });
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleConfirm = () => {
        closeModal();
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Evaluer un fournisseur
                    </h2>
                </div>
            }
        >
            <Head title="Evaluer un fournisseur" />
            <div className="flex justify-center items-center min-h-screen p-4">
                <div className="w-full max-w-lg">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="mb-4">
                                <select
                                    id="supplier_id"
                                    name="supplier_id"
                                    value={data.supplier_id}
                                    onChange={(e) => setData('supplier_id', e.target.value)}
                                    className="block w-full rounded-md border-gray-300 shadow-sm"
                                    aria-describedby="supplier_id-error"
                                >
                                    <option value="">Sélectionner un fournisseur</option>
                                    {suppliers.map((supplier) => (
                                        <option key={supplier.id} value={supplier.id}>
                                            {supplier.nom}
                                        </option>
                                    ))}
                                </select>
                                {errors.supplier_id && <div id="supplier_id-error" className="text-red-600 mt-1">{errors.supplier_id}</div>}
                            </div>

                            {data.evaluations.map((evaluation, index) => {
                                const criterion = critere.find(c => c.id === evaluation.critere_id);
                                return (
                                    <div key={evaluation.critere_id} className="grid grid-cols-2 gap-4 items-center">
                                        <label htmlFor={`evaluation-${index}-score`} className="text-gray-700">{criterion?.name || 'Unknown'}</label>
                                        <input
                                            id={`evaluation-${index}-score`}
                                            type="number"
                                            name="score"
                                            value={evaluation.score}
                                            onChange={(e) => handleChange(e, index)}
                                            className="block w-full rounded-md border-gray-300 shadow-sm"
                                            min="0"
                                            max="5"
                                            aria-describedby={`evaluation-${index}-score-error`}
                                        />
                                        {errors[`evaluations.${index}.score`] && (
                                            <div id={`evaluation-${index}-score-error`} className="text-red-600 col-span-2">{errors[`evaluations.${index}.score`]}</div>
                                        )}
                                    </div>
                                );
                            })}

                            <button
                                type="submit"
                                className="mt-4  inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Enregistrer
                            </button>
                        </form>
                    </div>

                    {isModalOpen && (
                        <SuccesMsg
                            isOpen={isModalOpen}
                            onClose={closeModal}
                            title="Continue"
                            message="Evaluer avec succés"
                            onConfirm={handleConfirm}
                        />
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
