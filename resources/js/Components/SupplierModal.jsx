import React, { useEffect } from "react";
import { useForm } from "@inertiajs/react";

const SupplierModal = ({ isOpen, onClose, supplier, mode }) => {
    const { data, setData, put, post, errors } = useForm({
        nom: "",
        adresse: "",
        contact: "",
        email: "",
        categorie: "",
    });
    useEffect(() => {
        if (supplier) {
            setData({
                nom: supplier.nom,
                adresse: supplier.adresse,
                contact: supplier.contact,
                email: supplier.email,
                categorie: supplier.categorie,
            });
        }
    }, [supplier]);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mode === "edit" && supplier) {
            put(route("supplier.update", supplier.id), {
                onSuccess: () => onClose(),
            });
        } else if (mode === "create") {
            post(route("supplier.store"), {
                onSuccess: () => onClose(),
            });
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-900 bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-lg mx-auto">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {mode === "edit"
                        ? "Modifier le fournisseur"
                        : "Détails du fournisseur"}
                </h2>
                {mode === "view" ? (
                    <div>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                            Nom: {supplier.nom}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                            Adresse: {supplier.adresse}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                            Contact: {supplier.contact}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                            Email: {supplier.email}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                            Categorie: {supplier.categorie}
                        </p>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 rounded-lg px-4 py-2"
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="nom"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                            >
                                Nom
                            </label>
                            <input
                                type="text"
                                id="nom"
                                className="mt-1 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-300"
                                value={data.nom}
                                onChange={(e) => setData("nom", e.target.value)}
                            />
                            {errors.nom && (
                                <div className="text-red-600 mt-1">
                                    {errors.nom}
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="adresse"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                            >
                                Adresse
                            </label>
                            <input
                                type="text"
                                id="adresse"
                                className="mt-1 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-300"
                                value={data.adresse}
                                onChange={(e) =>
                                    setData("adresse", e.target.value)
                                }
                            />
                            {errors.adresse && (
                                <div className="text-red-600 mt-1">
                                    {errors.adresse}
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="contact"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                            >
                                Contact
                            </label>
                            <input
                                type="text"
                                id="contact"
                                className="mt-1 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-300"
                                value={data.contact}
                                onChange={(e) =>
                                    setData("contact", e.target.value)
                                }
                            />
                            {errors.contact && (
                                <div className="text-red-600 mt-1">
                                    {errors.contact}
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-300"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            {errors.email && (
                                <div className="text-red-600 mt-1">
                                    {errors.email}
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="categorie"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                            >
                                Categorie
                            </label>
                            <input
                                type="text"
                                id="categorie"
                                className="mt-1 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-300"
                                value={data.categorie}
                                onChange={(e) =>
                                    setData("categorie", e.target.value)
                                }
                            />

                            {errors.categorie && (
                                <div className="text-red-600 mt-1">
                                    {errors.categorie}
                                </div>
                            )}
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 rounded-lg px-4 py-2 mr-2"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg px-4 py-2"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default SupplierModal;
