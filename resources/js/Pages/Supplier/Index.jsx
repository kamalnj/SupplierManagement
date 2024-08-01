import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import ConfirmationDialog from "@/Components/ConfirmationDialog";

const Index = ({ auth, suppliers }) => {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [supplierIdToDelete, setSupplierIdToDelete] = useState(null);
    const { delete: deleteSupplier } = useForm();

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
            deleteSupplier(route('supplier.destroy', supplierIdToDelete), {
                onSuccess: () => closeDialog(), // Close dialog on success
                onError: () => closeDialog()   // Optionally handle errors
            });
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Liste des fournisseurs
                    </h2>
                    <div>
                        <Link
                            href={route("supplier.create")}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Ajouter un fournisseur
                        </Link>
                    </div>
                </div>
            }
        >
            <Head title="Liste des fournisseurs" />

            <div className="mx-6 my-6 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">ID</th>
                            <th scope="col" className="px-6 py-3">Nom du fournisseur</th>
                            <th scope="col" className="px-6 py-3">Adresse</th>
                            <th scope="col" className="px-6 py-3">Contact</th>
                            <th scope="col" className="px-6 py-3">Email</th>
                            <th scope="col" className="text-center px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {suppliers.data.map((supplier) => (
                            <tr
                                key={supplier.id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <td className="px-6 py-4">{supplier.id}</td>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {supplier.nom}
                                </th>
                                <td className="px-6 py-4">{supplier.adresse}</td>
                                <td className="px-6 py-4">{supplier.contact}</td>
                                <td className="px-6 py-4">{supplier.email}</td>
                                <td className="flex mt-2 px-6 py-4 text-right">
                                <Link
                                        href={route("supplier.show", supplier.id)}
                                        className="font-medium text-gree-600 dark:text-blue-500 hover:underline"
                                    >
                                        Voir
                                    </Link>
                                    <Link
                                        href={route("supplier.edit", supplier.id)}
                                        className="font-medium ml-3 text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Modifier
                                    </Link>
                                    <button
                                        type="button"
                                        className="ml-3 font-medium text-red-600 dark:text-red-500 hover:underline"
                                        onClick={() => openDialog(supplier.id)}
                                    >
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination links={suppliers.meta.links} />
            <ConfirmationDialog
                isOpen={isDialogOpen}
                onClose={closeDialog}
                onConfirm={handleConfirmDelete}
            />
        </AuthenticatedLayout>
    );
};

export default Index;
