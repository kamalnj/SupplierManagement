import React from "react";
import { Head, useForm } from "@inertiajs/react";
import SupplierLayout from "@/Layouts/SupplierLayout";

const Index = ({ contracts, auth }) => {
    const { data, setData, post, errors, processing, reset } = useForm({
        contract_id: "",
        signed_contract: null,
    });

    const handleDownload = (contractId) => {
        window.open(`/fournisseur/contracts/${contractId}/download`, "_blank");
    };

    return (
        <SupplierLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 shadow-md rounded-md">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Mes Contrats
                    </h2>
                </div>
            }
        >
            <Head title="Mes Contrats" />
            <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
    {/* Contracts List */}
    {contracts.length > 0 ? (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">
                <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Nom du fournisseur
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800">
                    {contracts.map((contract) => (
                        <tr key={contract.id} className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                                {contract.nom_fournisseur}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button
                                    onClick={() => handleDownload(contract.id)}
                                    className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-150"
                                >
                                    Télécharger Contrat
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ) : (
        <div className="text-center text-gray-600 dark:text-gray-400 mt-8">
            Aucun contrat disponible
        </div>
    )}
</div>

        </SupplierLayout>
    );
};

export default Index;
