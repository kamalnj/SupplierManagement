import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { EyeIcon } from '@heroicons/react/24/solid';
import DocumentModal from '@/Components/DocumentModal'; // Import the Modal component

export default function Index({ suppliers,documentNames, auth }) {
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
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Documents des fournisseurs
                    </h2>
                </div>
            }
        >
            <Head title="Documents des fournisseurs" />
            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-xl sm:rounded-lg">
                        <div className="p-6">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom du fournisseur</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut des documents</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {suppliers.map((supplier) => (
                                        <tr key={supplier.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{supplier.nom}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {supplier.documents.length >= 5 ? 'Téléversé' : 'Non téléversé'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button
                                                    onClick={() => handleView(supplier)}
                                                    className="text-indigo-600 hover:text-indigo-900"
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
        documents={selectedDocument.documents} // Assuming documents is an array
        documentNames={documentNames} // Make sure this is passed correctly
    />
)}

        </AuthenticatedLayout>
    );
}
