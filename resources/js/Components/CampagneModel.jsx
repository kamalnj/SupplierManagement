import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";

const CampagneModel = ({ isOpen, onClose, campagne, mode, suppliers }) => {
    const { setData } = useForm({
        nom: "",
        description: "",
        date_debut: "",
        date_fin: "",
        status: "",
    });

    useEffect(() => {
        if (campagne) {
            setData({
                nom: campagne.nom,
                description: campagne.description,
                date_debut: campagne.date_debut,
                date_fin: campagne.date_fin,
                status: campagne.status,
            });
        }
    }, [campagne]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-900 bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-lg mx-auto">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4"></h2>
                {mode === "view" && (
                    <>
                        <div>
                            <p className="text-gray-600 dark:text-gray-400 mb-2">
                                Nom: {campagne.nom}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 mb-2">
                                Description: {campagne.description}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 mb-2">
                                Date début de la campagne: {campagne.date_debut}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 mb-2">
                                Date fin de la campagne: {campagne.date_fin}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 mb-2">
                                Statut: {campagne.statut}
                            </p>

                            <h2 className="text-xl font-bold mt-6">
                                Fournisseurs Participants
                            </h2>
                            <ul className=" mb-4">
                                {suppliers.map((fournisseur) => (
                                    <li key={fournisseur.id}>
                                        {fournisseur.nom}
                                    </li>
                                ))}
                            </ul>
                            <div>
                                {campagne.statut === "Planifiée" ||
                                campagne.statut === "Terminée" ? (
                                    <button
                                        type="button"
                                        className="bg-gray-600 cursor-not-allowed text-white hover:bg-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 rounded-lg px-4 py-2"
                                    >
                                        Évaluer les Fournisseurs
                                        </button>
                                ) : (
                                    <Link
                                        href={`/campagnes/${campagne.id}/evaluate`}
                                        className="btn  btn-primary  bg-gray-600 text-white hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 rounded-lg px-4 py-2"
                                    >
                                        Évaluer les Fournisseurs
                                    </Link>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 rounded-lg px-4 py-2"
                                onClick={onClose}
                            >
                                Fermer
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CampagneModel;
