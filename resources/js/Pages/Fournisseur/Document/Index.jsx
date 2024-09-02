import React from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import SupplierLayout from '@/Layouts/SupplierLayout';

export default function Index({ auth }) {
    const { documents } = usePage().props;
    const { data, setData, post, processing } = useForm({
        document: null,
        id_nom_document: '', 
        fournisseur_id: auth.user.id,
    });

    const handleFileChange = (e, documentId) => {
        setData({
            ...data,
            document: e.target.files[0],
            id_nom_document: documentId, 
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('supplier.documents.upload'), {
            data,
            onSuccess: () => {
                // Handle success
            },
        });
    };

    return (
        <SupplierLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between p-6 bg-white shadow dark:bg-gray-800">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        Mes Documents
                    </h2>
                </div>
            }
        >
            <Head title="Mes Documents" />
            <div className="container mx-auto p-6">
                <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                            Documents à Téléverser
                        </h2>
                    </div>

                    <table className="min-w-full bg-white dark:bg-gray-900 rounded-lg">
                        <thead>
                            <tr className="w-full bg-gray-100 dark:bg-gray-700 text-left">
                                <th className="py-3 px-4 font-medium text-gray-700 dark:text-gray-200">Nom du Document</th>
                                <th className="py-3 px-4 font-medium text-gray-700 dark:text-gray-200">Statut</th>
                                <th className="py-3 px-4 font-medium text-gray-700 dark:text-gray-200">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {documents.map((document, index) => (
                                <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                                        {document.name}
                                    </td>
                                    <td className={`py-4 px-4 text-sm font-semibold ${document.path ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                                        {document.path ? 'Téléversé' : 'En attente'}
                                    </td>
                                    <td className="py-4 px-4">
                                        {document.path ? (
                                            <span className="inline-block text-green-600 dark:text-green-400">Téléversé</span>
                                        ) : (
                                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                                <input
                                                    type="file"
                                                    name="document"
                                                    onChange={(e) => handleFileChange(e, document.id)}
                                                    className="block w-full text-sm text-gray-900 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200 dark:file:bg-indigo-600 dark:file:text-indigo-200 dark:hover:file:bg-indigo-500"
                                                    required
                                                />
                                                <button
                                                    type="submit"
                                                    disabled={processing}
                                                    className="mt-2 inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-sm hover:bg-indigo-700 transition duration-300"
                                                >
                                                    {processing ? 'Uploading...' : 'Téléverser'}
                                                </button>
                                            </form>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </SupplierLayout>
    );
}
