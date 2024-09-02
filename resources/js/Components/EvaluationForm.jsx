import { usePage } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';

export default function EvaluationForm({ fournisseurs, criteres, data, setData, handleSubmit, errors }) {
    const { campagne } = usePage().props;
    const [collapsedSuppliers, setCollapsedSuppliers] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        const initialCollapsedState = fournisseurs.reduce((acc, fournisseur) => {
            acc[fournisseur.id] = true; // Start with all suppliers collapsed
            return acc;
        }, {});
        setCollapsedSuppliers(initialCollapsedState);
    }, [fournisseurs]);

    const handleChange = (supplierIndex, critereIndex, field, value) => {
        const updatedEvaluations = [...data.evaluations];
        updatedEvaluations[supplierIndex].notes[critereIndex][field] = value;
        setData('evaluations', updatedEvaluations);
    };

    const toggleCollapse = (supplierId) => {
        setCollapsedSuppliers((prev) => ({
            ...prev,
            [supplierId]: !prev[supplierId],
        }));
    };

    // Pagination logic
    const totalPages = Math.ceil(criteres.length / itemsPerPage);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, criteres.length);
    const paginatedCriteres = criteres.slice(startIndex, endIndex);

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 max-w-5xl mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-8 border-b border-gray-200 pb-4">Évaluation des Fournisseurs</h1>

            {fournisseurs.length === 0 ? (
                <div className="text-center text-gray-600 py-8">
                    <p className="text-lg font-medium">Aucun fournisseur à évaluer pour le moment.</p>
                </div>
            ) : (
                fournisseurs.map((fournisseur, supplierIndex) => (
                    <div
                        key={fournisseur.id}
                        className="bg-gray-50 rounded-lg shadow-md border border-gray-300 mb-6 transition-transform transform hover:scale-105"
                    >
                        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
                            <h2 className="text-xl font-semibold text-gray-700">{fournisseur.nom}</h2>
                            <button
                                type="button"
                                onClick={() => toggleCollapse(fournisseur.id)}
                                className="text-blue-600 hover:text-blue-800 focus:outline-none"
                            >
                                {collapsedSuppliers[fournisseur.id] ? 'Afficher les critères' : 'Masquer les critères'}
                            </button>
                        </div>

                        {!collapsedSuppliers[fournisseur.id] && (
                            <div className="p-6">
                                {paginatedCriteres.map((critere, critereIndex) => (
                                    <div key={critere.id} className="mb-6">
                                        <label className="block text-sm font-medium text-gray-600 mb-2">{critere.name}</label>
                                        <input
                                            type="number"
                                            min="0"
                                            max="10"
                                            value={data.evaluations[supplierIndex]?.notes[criteres.indexOf(critere)]?.note || ''}
                                            onChange={(e) => handleChange(supplierIndex, criteres.indexOf(critere), 'note', e.target.value)}
                                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        {errors[`evaluations.${supplierIndex}.notes.${criteres.indexOf(critere)}.note`] && (
                                            <p className="mt-1 text-sm text-red-500">
                                                {errors[`evaluations.${supplierIndex}.notes.${criteres.indexOf(critere)}.note`]}
                                            </p>
                                        )}

                                        <textarea
                                            value={data.evaluations[supplierIndex]?.notes[criteres.indexOf(critere)]?.commentaire || ''}
                                            onChange={(e) => handleChange(supplierIndex, criteres.indexOf(critere), 'commentaire', e.target.value)}
                                            placeholder="Commentaire"
                                            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                ))}

                                <div className="flex justify-between items-center mt-6">
                                    <button
                                        type="button"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        className="py-2 px-4 bg-gray-200 text-gray-600 rounded-lg shadow-md hover:bg-gray-300 focus:outline-none"
                                        disabled={currentPage === 1}
                                    >
                                        Précédent
                                    </button>
                                    <span className="text-gray-700">Page {currentPage} sur {totalPages}</span>
                                    <button
                                        type="button"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        className="py-2 px-4 bg-gray-200 text-gray-600 rounded-lg shadow-md hover:bg-gray-300 focus:outline-none"
                                        disabled={currentPage === totalPages}
                                    >
                                        Suivant
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))
            )}
                        <div>
                                {campagne.statut === "Planifiée" ||
                                campagne.statut === "Terminée" ? (
                                    <button
                                    className="w-full py-3 px-4 cursor-not-allowed text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                                        >
                Soumettre les Évaluations
                </button>
                                ) : (
                                    <button
                                    type="submit"
                                    className="w-full py-3 px-4 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                                        >
                Soumettre les Évaluations
                </button>
                                )}
                            </div>

          
        </form>
    );
}
