import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import ConfirmationDialog from "@/Components/ConfirmationDialog";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Index = ({ auth, suppliers, categories }) => {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [supplierIdToDelete, setSupplierIdToDelete] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("");
    const { delete: deleteSupplier, post: createContract } = useForm();

    const openDialog = (supplierId) => {
        setSupplierIdToDelete(supplierId);
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
        setSupplierIdToDelete(null);
    };

    const handleConfirmDelete = () => {
        if (supplierIdToDelete) {
            deleteSupplier(route("supplier.destroy", supplierIdToDelete), {
                onSuccess: () => closeDialog(),
                onError: () => closeDialog(),
            });
        }
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Liste des fournisseurs
                    </h2>
                </div>
            }
        >
            <Head title="Liste des fournisseurs" />

            <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
                <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                            <div className="w-full md:w-1/2">
                                <form className="flex items-center space-x-4">
                                    <div>
                                        <label
                                            htmlFor="category-filter"
                                            className="sr-only"
                                        >
                                            Category
                                        </label>
                                        <select
                                            id="category-filter"
                                            className="bg-gray-50 border w-56 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            value={selectedCategory}
                                            onChange={handleCategoryChange}
                                        >
                                            <option value="">
                                                Tous les Categories
                                            </option>
                                            {categories.map(
                                                (category, index) => (
                                                    <option
                                                        key={index}
                                                        value={category}
                                                    >
                                                        {category}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                <Link
                                    href={route("supplier.create")}
                                    className="flex items-center justify-center bg-blue-600 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                >
                                    <svg
                                        className="h-3.5 w-3.5 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path
                                            clipRule="evenodd"
                                            fillRule="evenodd"
                                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        />
                                    </svg>
                                    Ajouter un fournisseur
                                </Link>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">
                                            Nom du fournisseur
                                        </th>
                                        <th scope="col" className="px-4 py-3">
                                            Email
                                        </th>
                                        <th scope="col" className="px-16 py-3">
                                            Contrat
                                        </th>
                                        <th scope="col" className=" px-32 py-3">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {suppliers.data
                                        .filter(
                                            (supplier) =>
                                                !selectedCategory ||
                                                supplier.categorie ===
                                                    selectedCategory
                                        )
                                        .map((supplier) => (
                                            <tr
                                                key={supplier.id}
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-3 py-4 font-medium text-gray-900 dark:text-white"
                                                >
                                                    {supplier.nom}
                                                </th>

                                                <td className="px-1 py-4">
                                                    {supplier.email}
                                                </td>
                                                <td className="px-20 py-4">
                                                    {supplier.contrat}
                                                </td>
                                                <td className=" px-20 py-4 my-2 flex items-center justify-end space-x-3">
                                                    <Link
                                                        href={route(
                                                            "supplier.indexinfo",
                                                            { id: supplier.id }
                                                        )}
                                                        className="font-medium text-green-600 dark:text-blue-500 hover:underline"
                                                    >
                                                        Voir
                                                    </Link>

                                                    <button
                                                        type="button"
                                                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                                        onClick={() =>
                                                            openDialog(
                                                                supplier.id
                                                            )
                                                        }
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

            <Pagination links={suppliers.meta.links} />
            <ConfirmationDialog
                isOpen={isDialogOpen}
                onClose={() => setDialogOpen(false)}
                title="Supprimer Fournisseur"
                description="Êtes-vous sûr de vouloir supprimer ce fournisseur ? Cette action est irréversible."
                confirmText="Supprimer"
                cancelText="Annuler"
                onConfirm={handleConfirmDelete}
            />
        </AuthenticatedLayout>
    );
};

export default Index;
