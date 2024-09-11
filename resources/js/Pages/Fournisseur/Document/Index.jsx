import React, { useState, useEffect } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import SupplierLayout from '@/Layouts/SupplierLayout';

export default function Index({ auth }) {
    const { documents, flash } = usePage().props;
    const { data, setData, post } = useForm({
        document: null,
        id_nom_document: '',
        fournisseur_id: auth.user.id,
    });

    const [processingStates, setProcessingStates] = useState({});
    const [message, setMessage] = useState({ type: '', text: '' });

    useEffect(() => {
        if (flash) {
            if (flash.success) {
                setMessage({ type: 'success', text: flash.success });
            } else if (flash.error) {
                setMessage({ type: 'error', text: flash.error });
            }
        }
    }, [flash]);

    const handleFileChange = (e, documentId) => {
        setData({
            ...data,
            document: e.target.files[0],
            id_nom_document: documentId,
        });
    };

    const handleSubmit = (e, documentId) => {
        e.preventDefault();

        setProcessingStates((prevStates) => ({
            ...prevStates,
            [documentId]: true,
        }));

        post(route('supplier.documents.upload'), {
            data,
            onSuccess: () => {
                setProcessingStates((prevStates) => ({
                    ...prevStates,
                    [documentId]: false,
                }));
                window.location.href = route('documents.index');
                // Clear the form after successful upload
                setData({
                    document: null,
                    id_nom_document: '',
                    fournisseur_id: auth.user.id,
                });
            },
       
        });
    };

    return (
        <SupplierLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between p-6 bg-white shadow-md">
                    <h2 className="text-2xl font-bold text-black">
                        Mes Documents
                    </h2>
                </div>
            }
        >
            <Head title="Mes Documents" />
            <div className="container mx-auto p-6">
                <div className="bg-gray-50 dark:bg-gray-900 shadow-lg rounded-lg p-8">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        Documents à Téléverser
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Téléversez les documents requis ci-dessous. Assurez-vous que chaque fichier est conforme aux exigences.
                    </p>

                    {message.text && (
                        <div className={`p-4 mb-4 rounded ${message.type === 'error' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
                            {message.text}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {documents.map((document) => (
                            <div key={document.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-md">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                    {document.name}
                                </h3>

                                {document.path ? (
                                    <span className="inline-block px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-700 rounded-full">
                                        Téléversé
                                    </span>
                                ) : (
                                    <form onSubmit={(e) => handleSubmit(e, document.id)} encType="multipart/form-data">
                                        <label className="block mb-4">
                                            <input
                                                type="file"
                                                name="document"
                                                onChange={(e) => handleFileChange(e, document.id)}
                                                className="block w-full text-sm text-gray-900 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300 dark:file:bg-gray-600 dark:file:text-gray-200 dark:hover:file:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
                                                required
                                            />
                                        </label>
                                        <button
                                            type="submit"
                                            disabled={processingStates[document.id]}
                                            className={`w-full py-2 text-white rounded-lg shadow-sm transition duration-300 ${
                                                processingStates[document.id]
                                                    ? 'bg-blue-400 cursor-not-allowed'
                                                    : 'bg-blue-600 hover:bg-blue-700'
                                            }`}
                                        >
                                            {processingStates[document.id] ? 'Uploading...' : 'Téléverser'}
                                        </button>
                                    </form>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SupplierLayout>
    );
}
