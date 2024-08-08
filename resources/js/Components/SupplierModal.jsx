import React, { useEffect, useState } from "react";
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
                        <div className="flex justify-start mb-4">
    {supplier.contrat === 'non' ? (
        <button
            type="button"
            className="bg-green-600 text-black hover:bg-green-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 rounded-lg px-4 py-2"
            onClick={() => {
                const fournisseurId = supplier.id; // Replace with actual fournisseur_id
                const nom = supplier.nom; // Replace with actual nom
                const adresse = supplier.adresse; // Replace with actual adresse

                const url = new URL(
                    route("contract.create"),
                    window.location.origin
                );
                url.searchParams.append("fournisseur_id", fournisseurId);
                url.searchParams.append("nom", encodeURIComponent(nom));
                url.searchParams.append("adresse", encodeURIComponent(adresse));

                window.location.href = url.toString();
            }}
        >
            Créer un contrat
            </button>
    ) : (
        <button
            type="button"
            className="bg-gray-600 cursor-not-allowed text-white hover:bg-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 rounded-lg px-4 py-2"
        >
            Contrat déjà crée 
        </button>
    )}
</div>

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
                        {[
                            "nom",
                            "adresse",
                            "contact",
                            "email",
                            "categorie",
                        ].map((field) => (
                            <div className="mb-4" key={field}>
                                <label
                                    htmlFor={field}
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                                >
                                    {field.charAt(0).toUpperCase() +
                                        field.slice(1)}
                                </label>
                                <input
                                    type={field === "email" ? "email" : "text"}
                                    id={field}
                                    className="mt-1 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-300"
                                    value={data[field]}
                                    onChange={(e) =>
                                        setData(field, e.target.value)
                                    }
                                />
                                {errors[field] && (
                                    <div className="text-red-600 mt-1">
                                        {errors[field]}
                                    </div>
                                )}
                            </div>
                        ))}
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
