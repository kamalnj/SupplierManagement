import React from 'react';
import { useForm, usePage } from '@inertiajs/react';
import EvaluationForm from '../../Components/EvaluationForm';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Evaluate({ auth }) {
    const { campagne, suppliers, criteres, hasEvaluations } = usePage().props;
    const { data, setData, post, errors } = useForm({
        evaluations: suppliers.map(fournisseur => ({
            supplier_id: fournisseur.id,
            notes: criteres.map(critere => ({ critere_id: critere.id, note: 0, commentaire: '' })),
        })),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const flattenedEvaluations = data.evaluations.flatMap(evaluation => 
            evaluation.notes.map(note => ({
                supplier_id: evaluation.supplier_id,
                critere_id: note.critere_id,
                note: note.note,
                commentaire: note.commentaire
            }))
        );

        post(`/campagnes/${campagne.id}/evaluate`, {
            evaluations: flattenedEvaluations,
            onError: (errors) => {
                console.error('Validation errors:', errors);
            },
            onSuccess: () => {
                console.log('Evaluation submitted successfully');
            }
        });
    };

    const isEvaluationDisabled = campagne.statut === 'Planifiée' || campagne.statut === 'Terminée' || hasEvaluations;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Évaluation des Fournisseurs pour la Campagne : {campagne.nom}
                    </h2>
                </div>
            }
        >
            <Head title="Évaluation des fournisseurs" />
            <div className="container my-6 mx-auto px-4">
                {isEvaluationDisabled ? (
                    <div className="text-red-500 text-center">
                        {campagne.statut === 'Planifiée' ? 
                            "L'évaluation n'est pas encore commencée." : 
                            campagne.statut === 'Terminée' ? 
                            "Cette campagne est terminée, vous ne pouvez plus évaluer." :
                            "Cette campagne a déjà été évaluée."
                        }
                    </div>
                ) : (
                    <EvaluationForm
                        fournisseurs={suppliers}
                        criteres={criteres}
                        data={data}
                        setData={setData}
                        handleSubmit={handleSubmit}
                        errors={errors}
                    />
                )}
            </div>
        </AuthenticatedLayout>
    );
}
