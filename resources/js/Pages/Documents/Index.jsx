import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { EyeIcon } from '@heroicons/react/24/solid';
import DocumentModal from '@/Components/DocumentModal';
import ConfirmationDialog from '@/Components/ConfirmationDialog';

export default function Index({ suppliers, documentNames, auth }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDocument, setSelectedDocument] = useState(null);



    const handleView = (supplier) => {
        setSelectedDocument(supplier);
        setModalOpen(true);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Documents des Fournisseurs
                    </h2>
                </div>
            }
        >
            <Head title="Documents des Fournisseurs" />
            <div className="py-6 bg-gray-100 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <div className="p-6">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300 uppercase">
                                            Nom du Fournisseur
                                        </th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300 uppercase">
                                            Statut des Documents
                                        </th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-gray-600 dark:text-gray-300 uppercase">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                    {suppliers.map((supplier) => (
                                        <tr key={supplier.id}>
                                            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                                {supplier.nom}
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                {supplier.documents.length >= 5 ? (
                                                    <span className="text-green-600 dark:text-green-400">
                                                        Complet
                                                    </span>
                                                ) : (
                                                    <span className="text-red-600 dark:text-red-400">
                                                        Incomplet
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-right text-sm">
                                                <button
                                                    onClick={() => handleView(supplier)}
                                                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                                                >
                                                    <EyeIcon className="h-5 w-5 inline-block" />
                                                    Voir
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
       
            {selectedDocument && (
                <DocumentModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    documents={selectedDocument.documents}
                    documentNames={documentNames}
                />
            )}
        </AuthenticatedLayout>
    );
}
