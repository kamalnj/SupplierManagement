import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInfoCircle,
    faCoins,
    faAddressBook,
    faUsers,
    faCommentDots,
    faFilePdf,
    faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const IndexInfo = ({
    auth,
    supplier = {},
    infoGenerales = {},
    informationsFinancieres = {},
    referencesClients = [],
    supplierContacts = [],
    commentairesRemarques = [],
    documentNames,
    documents,
    suppliers,
    existingContract,
    existingInformations,
}) => {
    const { delete: deleteDocument } = useForm();
    // Ensure data is an object for `infoGenerales` and `informationsFinancieres`
    const safeInfoGenerales =
        infoGenerales && typeof infoGenerales === "object" ? infoGenerales : {};
    const safeInformationsFinancieres =
        informationsFinancieres && typeof informationsFinancieres === "object"
            ? informationsFinancieres
            : {};

    // Form handling setup
    const { data, setData, post, processing, errors } = useForm({
        fournisseur_id: supplier.id || "",
        nom_fournisseur: supplier.nom || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("contrats.store"), {
            onSuccess: () => {
                // Handle success, e.g., redirect or show a message
            },
            onError: () => {
                // Handle errors
            },
        });
    };

    const formatLabel = (key) => {
        const labels = {
            date_creation: "Date de création",
            forme_juridique: "Forme Juridique",
            capital_social: "Capital Social",
            adresse_siege_social: "Adresse Siege Social",
            numero_rc: "N° RC",
            lieu_immatriculation: "Lieu d'immatriculation",
            numero_if: "N° IF",
            numero_patente: "N° PATENTE",
            numero_ice: "N° ICE",
            telephone: "Téléphone",
            effectif: "Effectif",
            site_web: "Site web",
            chiffre_affaire_annee1: "Chiffre d'affaire (Année 1)",
            chiffre_affaire_annee2: "Chiffre d'affaire (Année 2)",
            chiffre_affaire_annee3: "Chiffre d'affaire (Année 3)",
            conditions_paiement: "Conditions de paiement",
            modalites_facturation: "Modalités de facturation",
            principaux_actionnaires: "Principaux actionnaires",
            representant_legal: "Représentant légal",
            qualite_representant_legal: "Qualité du représentant légal",
            maison_mere_filiales: "Maison mère / Filiales",
            certifications_qualite: "Certifications de qualité",
            licences_autorisations: "Licences et autorisations",
            polices_assurance: "Polices d'assurance",
            plan_continuite_crise: "Plan de continuité de crise",
            politique_rse: "Politique RSE",
            pratiques_ethiques: "Pratiques éthiques",
            principaux_clients: "Principaux clients ou références",
            projets_realises: "Exemples de projets réalisés",
        };
        return labels[key] || key.replace(/_/g, " ").toUpperCase();
    };
    const handleDelete = (documentId) => {
        console.log(documentId);
        if (documentId) {
            deleteDocument(route("document.destroy", documentId), {
                onSuccess: () => console.log("Document deleted successfully"),
                onError: () => console.log("Error deleting document"),
            });
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head
                title={`Information du fournisseur: ${supplier.nom || "N/A"}`}
            />
            <div className="p-6 bg-gray-100 shadow-lg sm:rounded-lg max-w-7xl mx-auto">
                {/* Supplier Header */}
                <header className="bg-white shadow rounded-md p-6 mb-6 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-800">
                        {supplier.nom || "N/A"}
                    </h1>
                    <Link
                        href={route("supplier.index")}
                        className="text-sm text-blue-600 hover:underline"
                    >
                        Retour à la liste des fournisseurs
                    </Link>
                </header>

                {/* <section>
                    <div>
                    <h1 className="text-2xl font-semibold">{totalFilled}/{totalObligatory}</h1>
                    </div>
                </section> */}

                {/* Informations Générales */}
                <section className="bg-white p-6 shadow-md rounded-md mb-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                        <FontAwesomeIcon
                            icon={faInfoCircle}
                            className="mr-2 text-blue-500"
                        />{" "}
                        Informations Générales
                    </h2>
                    {Object.keys(safeInfoGenerales).length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Object.entries(safeInfoGenerales)
                                .filter(
                                    ([key]) =>
                                        !["id", "supplier_id"].includes(key)
                                )
                                .map(([key, value]) => (
                                    <div
                                        key={key}
                                        className="bg-gray-50 p-4 rounded-md shadow-sm"
                                    >
                                        <p className="font-medium capitalize">
                                            {formatLabel(key)}:
                                        </p>
                                        <p className="text-gray-700">
                                            {value || "N/A"}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">
                            Aucune information générale disponible.
                        </p>
                    )}
                </section>

                {/* Informations Financières et Légales */}
                <section className="bg-white p-6 shadow-md rounded-md mb-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                        <FontAwesomeIcon
                            icon={faCoins}
                            className="mr-2 text-green-500"
                        />{" "}
                        Informations Financières et Légales
                    </h2>
                    {Object.keys(safeInformationsFinancieres).length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Object.entries(safeInformationsFinancieres)
                                .filter(
                                    ([key]) =>
                                        !["id", "supplier_id"].includes(key)
                                )
                                .map(([key, value]) => (
                                    <div
                                        key={key}
                                        className="bg-gray-50 p-4 rounded-md shadow-sm"
                                    >
                                        <p className="font-medium capitalize">
                                            {formatLabel(key)}:
                                        </p>
                                        <p className="text-gray-700">
                                            {value || "N/A"}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">
                            Aucune information financière disponible.
                        </p>
                    )}
                </section>

                {/* Contacts */}
                <section className="bg-white p-6 shadow-md rounded-md mb-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                        <FontAwesomeIcon
                            icon={faAddressBook}
                            className="mr-2 text-purple-500"
                        />{" "}
                        Contacts
                    </h2>
                    {supplierContacts.length > 0 ? (
                        supplierContacts.map((contact, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-4 rounded-md shadow-sm mb-4"
                            >
                                <p className="font-medium">
                                    {contact.nom_prenom}{" "}
                                    <span className="text-sm text-gray-500">
                                        ({contact.fonction})
                                    </span>
                                </p>
                                <p className="text-sm">
                                    Téléphone: {contact.telephone}, Email:{" "}
                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="text-blue-600 hover:underline"
                                    >
                                        {contact.email}
                                    </a>
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">
                            Aucun contact disponible.
                        </p>
                    )}
                </section>

                {/* Références Clients */}
                <section className="bg-white p-6 shadow-md rounded-md mb-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                        <FontAwesomeIcon
                            icon={faUsers}
                            className="mr-2 text-orange-500"
                        />{" "}
                        Références Clients
                    </h2>
                    {referencesClients.length > 0 ? (
                        referencesClients.map((reference, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-4 rounded-md shadow-sm mb-4"
                            >
                                <p className="font-medium">
                                    Client: {reference.principaux_clients}
                                </p>
                                <p className="text-sm">
                                    Projet: {reference.projets_realises}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">
                            Aucune référence client disponible.
                        </p>
                    )}
                </section>

                {/* Commentaires et Remarques */}
                <section className="bg-white p-6 shadow-md rounded-md mb-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                        <FontAwesomeIcon
                            icon={faCommentDots}
                            className="mr-2 text-red-500"
                        />{" "}
                        Commentaires et Remarques
                    </h2>
                    {commentairesRemarques.length > 0 ? (
                        commentairesRemarques.map((commentaire, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-4 rounded-md shadow-sm mb-4"
                            >
                                <p className="font-medium">
                                    Commentaire: {commentaire.commentaire}
                                </p>
                                <p className="text-sm">
                                    Remarque: {commentaire.remarques || "N/A"}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">
                            Aucun commentaire ou remarque disponible.
                        </p>
                    )}
                </section>
                {/* Documents */}
                <section className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
                        <FontAwesomeIcon
                            icon={faFilePdf}
                            className="mr-3 text-red-600 text-2xl"
                        />
                        Documents
                    </h2>

                    {/* Total Documents Display */}
                    <div className="mb-4 p-4 bg-gray-200 rounded-md shadow">
                        <p className="text-gray-600">
                            Documents Télécharger: {documents.length} / 6{" "}
                        </p>
                    </div>

                    {documents.length > 0 ? (
                        <div className="space-y-4">
                            {documents.map((doc) => {
                                const documentName =
                                    documentNames[doc.id_nom_document]?.nom ||
                                    "Nom non disponible";

                                return (
                                    <div
                                        key={doc.id}
                                        className="bg-gray-100 p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <p className="text-lg font-semibold text-gray-800">
                                                {documentName}
                                            </p>
                                            <button
                                                type="button"
                                                className="text-red-600 hover:text-red-800 transition-colors duration-200"
                                                onClick={() =>
                                                    handleDelete(doc.id)
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon={faTrashAlt}
                                                />
                                            </button>
                                        </div>
                                        <a
                                            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-150"
                                            href={`/documents/${doc.fichier}`} // Manually build the URL
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Voir
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <p className="text-gray-600 text-lg italic">
                            Aucun document disponible pour ce fournisseur.
                        </p>
                    )}
                </section>

                <section className="bg-white p-6 shadow-md rounded-md mb-6">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <input
                                    type="hidden"
                                    id="fournisseur_id"
                                    name="fournisseur_id"
                                    value={data.fournisseur_id}
                                    className="block w-full border-gray-300 rounded-md shadow-sm"
                                    readOnly
                                />
                            </div>
                            <div>
                                <input
                                    type="hidden"
                                    id="nom_fournisseur"
                                    name="nom_fournisseur"
                                    value={data.nom_fournisseur}
                                    className="block w-full border-gray-300 rounded-md shadow-sm"
                                    readOnly
                                />
                            </div>
                        </div>

                        <div className="flex justify-center mt-4">
                            {existingContract || !existingInformations ? (
                                <p className="text-red-600">
                                    {existingContract
                                        ? "CGA existe déjà pour ce fournisseur."
                                        : "Aucune information disponible pour créer CGA."}
                                </p>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className={`px-4 py-2 rounded-md ${
                                        processing
                                            ? "bg-gray-400"
                                            : "bg-blue-600"
                                    } text-white hover:${
                                        processing
                                            ? "bg-gray-500"
                                            : "bg-blue-700"
                                    } transition`}
                                >
                                    {processing
                                        ? "Création en cours..."
                                        : "Créer CGA"}
                                </button>
                            )}
                        </div>
                    </form>
                </section>
            </div>
        </AuthenticatedLayout>
    );
};

export default IndexInfo;
