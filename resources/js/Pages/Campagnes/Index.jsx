import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ConfirmationDialog from "@/Components/ConfirmationDialog";
import CampagneModel from "@/Components/CampagneModel";

export default function Index({ auth, campagnes }) {
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [selectedCampagne, setSelectedCampagne] = useState(null);
    const [campagneIdToDelete, setCampagneIdToDelete] = useState(null);
    const { delete: deleteCampagne } = useForm();

    const openDeleteDialog = (campagneId) => {
        setCampagneIdToDelete(campagneId);
        setIsDeleteDialogOpen(true);
    };

    const closeDeleteDialog = () => {
        setIsDeleteDialogOpen(false);
        setCampagneIdToDelete(null);
    };



    const openViewModal = (campagne) => {
        setSelectedCampagne(campagne);
        setIsViewModalOpen(true);
    };

    const closeViewModal = () => {
        setIsViewModalOpen(false);
        setSelectedCampagne(null);
    };

    const handleDeleteConfirm = () => {
        if (campagneIdToDelete) {
            deleteCampagne(route("campagnes.destroy", campagneIdToDelete), {
                onSuccess: () => closeDeleteDialog(),
            });
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Liste des Campagnes
                    </h2>
                </div>
            }
        >
            <Head title="Gestion des campagnes" />

            <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
                <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                <Link
                                    href="/campagnes/create"
                                    className="flex items-center justify-center bg-blue-600 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                >
                                    <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                    </svg>
                                    Créer une nouvelle campagne
                                </Link>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">Nom</th>
                                        <th scope="col" className="px-4 py-3">Date de Début</th>
                                        <th scope="col" className="px-4 py-3">Date de Fin</th>
                                        <th scope="col" className="px-4 py-3">Statut</th>
                                        <th scope="col" className="px-10 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {campagnes.data.map((campagne) => (
                                        <tr
                                            key={campagne.id}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                        >
                                            <td className="px-4 py-4 font-medium text-gray-900 dark:text-white">
                                                {campagne.nom}
                                            </td>
                                            <td className="px-4 py-4">{campagne.date_debut}</td>
                                            <td className="px-4 py-4">{campagne.date_fin}</td>
                                            <td className="px-4 py-4">{campagne.statut}</td>
                                            <td className="px-14 py-4  flex items-center justify-end space-x-3">
                                                <button
                                                    type="button"
                                                    className="text-blue-600 dark:text-blue-500 hover:underline"
                                                    onClick={() => openViewModal(campagne)}
                                                >
                                                    Voir
                                                </button>
                                                <button
                                                    type="button"
                                                    className="text-red-600 dark:text-red-500 hover:underline"
                                                    onClick={() => openDeleteDialog(campagne.id)}
                                                >
                                                    Supprimer
                                                </button>
                                                <Link
                                                     href={`/campagnes/${campagne.id}/stats`}
                                                    type="button"
                                                    className="text-green-600 dark:text-red-500 hover:underline"
                                                >
                                                    Statistique
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <Pagination links={campagnes.links} />

            <ConfirmationDialog
                isOpen={isDeleteDialogOpen}
                onClose={closeDeleteDialog}
                title="Supprimer Campagne"
                description="Êtes-vous sûr de vouloir supprimer cette campagne ? Cette action est irréversible."
                confirmText="Supprimer"
                cancelText="Annuler"
                onConfirm={handleDeleteConfirm}
            />

            {/* CampagneModel component for viewing */}
            <CampagneModel
                isOpen={isViewModalOpen}
                onClose={closeViewModal}
                campagne={selectedCampagne}
                mode="view"
                suppliers={selectedCampagne ? selectedCampagne.suppliers : []}
            />

            {/* CampagneModel component for editing */}
       
        </AuthenticatedLayout>
    );
}
