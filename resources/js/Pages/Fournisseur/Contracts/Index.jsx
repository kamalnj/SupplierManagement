import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import SupplierLayout from '@/Layouts/SupplierLayout';

const Index = ({ contracts, auth }) => {
    const { post } = useForm(); // Use useForm to get the post method

    const handleAccept = (contractId) => {
        if (window.confirm('Êtes-vous sûr de vouloir accepter ce contrat ?')) {
            post(route('supplier.contracts.accept', contractId), {}, {
                onSuccess: () => {
                    // Handle success logic here
                }
            });
        }
    };
    return (
        <SupplierLayout 
            user={auth.user}
            header={
                <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        Mes Contrats
                    </h2>
                </div>
            }
        >
            <Head title="Mes Contrats" />
            <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">
                        <thead className="bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th className="py-2 px-4 text-left text-gray-600 dark:text-gray-300 font-medium text-sm">Nom du Contrat</th>
                                <th className="py-2 px-4 text-left text-gray-600 dark:text-gray-300 font-medium text-sm">Statut</th>
                                <th className="py-2 px-4 text-left text-gray-600 dark:text-gray-300 font-medium text-sm">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contracts.map(contract => (
                                <tr key={contract.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                                    <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 text-sm">
                                        {contract.nom_fournisseur}
                                    </td>
                                    <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 text-sm">
                                        {contract.statut}
                                    </td>
                                    <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-sm">
                                        {contract.statut === 'Inactive' && (
                                            <button
                                                onClick={() => handleAccept(contract.id)}
                                                className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 text-sm"
                                                aria-label={`Accepter le contrat ${contract.id}`}
                                            >
                                                Accepter
                                            </button>
                                        )}
                                        <button
                                            type="button"
                                            className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 text-sm ml-2"
                                            onClick={() => window.location.href = `/contracts/${contract.id}/download`}
                                            aria-label={`Voir le contrat ${contract.id}`}
                                        >
                                            Voir le contrat
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </SupplierLayout>
    );
};

export default Index;
