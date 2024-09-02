import React, { useState, useMemo } from "react";
import { Head, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Stats({ auth }) {
    const {
        campagne,
        resultats = [],
        globalScore,
        qualification,
    } = usePage().props;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const resultsPerPage = 10;

    const filteredResults = useMemo(() => {
        return resultats.filter((resultat) =>
            resultat.supplier.nom
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
    }, [resultats, searchTerm]);

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  

    const totalPages = Math.ceil(filteredResults.length / resultsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-200 leading-tight">
                        Liste des Campagnes
                    </h2>
                </div>
            }
        >
            <Head title="Gestion des campagnes" />
            <div className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Statistiques de la Campagne : {campagne.nom}
                    </h1>
                </header>

                <section className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <div className="mb-6 flex items-center">
                 
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Résumé de la Campagne
                    </h2>
                    {resultats.length > 0 ? (
                        resultats.map((resultat) => (
                            <div key={resultat.supplier_id} className="mb-6">
                                <div className="flex flex-col md:flex-row md:justify-between">
                                    <div className="text-center md:text-left mb-4 md:mb-0">
                                        <p className="text-xl font-medium text-gray-800">
                                            Fournisseur: {resultat.supplier.nom}
                                        </p>
                                        <p className="text-xl font-semibold text-blue-600">
                                            Score Global:{" "}
                                            {globalScore}
                                        </p>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <p className="text-xl font-medium text-gray-800">
                                            Qualification
                                        </p>
                                        <p
                                            className={`text-xl font-semibold ${
                                                qualification ===
                                                "Excellent"
                                                    ? "text-green-600"
                                                    : qualification ===
                                                      "Moyen"
                                                    ? "text-yellow-600"
                                                    : "text-red-600"
                                            }`}
                                        >
                                            {qualification}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">
                            Aucun résultat trouvé pour cette campagne.
                        </p>
                    )}
                </section>
            </div>
        </AuthenticatedLayout>
    );
}
