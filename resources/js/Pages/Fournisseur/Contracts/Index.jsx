import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import SupplierLayout from '@/Layouts/SupplierLayout';

const Index = ({ contracts, auth }) => {
    const { data, setData, post, errors, processing, reset } = useForm({
        contract_id: '',
        signed_contract: null,
    });

    const handleDownload = (contractId) => {
        window.open(`/fournisseur/contracts/${contractId}/download`, '_blank');
    };

        // const handleFileChange = (event) => {
        //     setData('signed_contract', event.target.files[0]);
        // };

        // const handleContractChange = (event) => {
        //     setData('contract_id', event.target.value);
        // };

        // const handleUpload = (event) => {
        //     event.preventDefault();

        //     post('/fournisseur/contracts/upload', {
        //         onSuccess: () => {
        //             reset(); // Reset form data on success
        //         },
        //     });
        // };

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
                {/* Upload Section */}
                {/* <div className="mb-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Upload Signed Contract</h3>
                    <form onSubmit={handleUpload}>
                        <div className="mb-4">
                            <label htmlFor="contract" className="block text-gray-700 dark:text-gray-300 font-medium">Select Contract</label>
                            <select
                                id="contract"
                                name="contract_id"
                                value={data.contract_id}
                                onChange={handleContractChange}
                                className="mt-1 block w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="">Select a contract</option>
                                {contracts.map(contract => (
                                    <option key={contract.id} value={contract.id}>
                                        {contract.nom_fournisseur}
                                    </option>
                                ))}
                            </select>
                            {errors.contract_id && <div className="text-red-600 dark:text-red-400 mt-2 text-sm">{errors.contract_id}</div>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="file" className="block text-gray-700 dark:text-gray-300 font-medium">Upload Signed Contract</label>
                            <input
                                type="file"
                                id="file"
                                name="signed_contract"
                                onChange={handleFileChange}
                                className="mt-1 block w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            {errors.signed_contract && <div className="text-red-600 dark:text-red-400 mt-2 text-sm">{errors.signed_contract}</div>}
                        </div>
                        <button
                            type="submit"
                            disabled={processing}
                            className={`w-full py-2 px-4 rounded-md font-medium text-white ${processing ? 'bg-blue-300' : 'bg-blue-500'} hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150`}
                        >
                            {processing ? 'Uploading...' : 'Upload'}
                        </button>
                    </form>
                </div> */}

                {/* Contracts List */}
                {contracts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {contracts.map(contract => (
                            <div key={contract.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                        {contract.nom_fournisseur}
                                    </h3>
                                </div>
                                <div className="flex justify-between items-center">
                                    <button
                                        onClick={() => handleDownload(contract.id)}
                                        className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-150"
                                    >
                                        Download Contract
                                    </button>
                                </div>
                            </div>
                        ))}
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
