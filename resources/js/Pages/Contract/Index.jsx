import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import ConfirmationDialog from "@/Components/ConfirmationDialog";
import ContractModal from "@/Components/ContractModal"; 
import { useState } from "react";

const Index = ({ auth, contracts }) => {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState("view");
    const [selectedContract, setSelectedContract] = useState(null);
    const [contractIdToDelete, setContractIdToDelete] = useState(null);
    const { delete: deleteContract } = useForm();

    const openDialog = (contractId) => {
        setContractIdToDelete(contractId);
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
        setContractIdToDelete(null);
    };

    const handleConfirmDelete = () => {
        if (contractIdToDelete) {
            deleteContract(route('contract.destroy', contractIdToDelete), {
                onSuccess: () => closeDialog(),
                onError: () => closeDialog()
            });
        }
    };

    const openModal = (contract, mode) => {
        setSelectedContract(contract);
        setModalMode(mode);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedContract(null);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Liste des contrats
                    </h2>
                    <Link
                        href={route("contract.create")}
                        className="flex items-center justify-center bg-blue-600 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                    >
                        <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                        </svg>
                        Ajouter un contrat
                    </Link>
                </div>
            }
        >
            <Head title="Liste des contrats" />
            
            <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
                <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">Nom de l'entreprise</th>
                                        <th scope="col" className="px-4 py-3">Nom du fournisseur</th>
                                        <th scope="col" className="px-4 py-3">Date de début</th>
                                        <th scope="col" className="px-4 py-3">Date de fin</th>
                                        <th scope="col" className="px-4 py-3">Statut</th>
                                        <th scope="col" className="px-4 py-3">
                                            <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contracts.data.map(contract => (
                                        <tr
                                            key={contract.id}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                        >
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {contract.nom_entreprise}
                                            </th>
                                            <td className="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis">
                                                {contract.nom_fournisseur}
                                            </td>
                                            <td className="px-6 py-4">{contract.date_debut}</td>
                                            <td className="px-6 py-4">{contract.date_fin}</td>
                                            <td className="px-6 py-4">{contract.statut}</td>
                                            <td className="px-6 py-4 my-2 flex items-center justify-end space-x-3">
                                                <button
                                                    type="button"
                                                    className="font-medium text-green-600 dark:text-blue-500 hover:underline"
                                                    onClick={() => window.location.href = `/contracts/${contract.id}/download`}
                                                    >
                                                    Voir
                                                </button>
                                                <button
                                                    type="button"
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                    onClick={() => openModal(contract, 'edit')}
                                                >
                                                    Modifier
                                                </button>
                                                <button
                                                    type="button"
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                                    onClick={() => openDialog(contract.id)}
                                                >
                                                    Supprimer
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <ConfirmationDialog
                isOpen={isDialogOpen}
                onClose={closeDialog}
                onConfirm={handleConfirmDelete}
            />
            <ContractModal
                isOpen={isModalOpen}
                onClose={closeModal}
                contract={selectedContract}
                mode={modalMode}
            />
        </AuthenticatedLayout>
    );
};

export default Index;
