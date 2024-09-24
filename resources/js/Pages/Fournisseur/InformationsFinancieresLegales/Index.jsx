import React, { useState } from "react";
import InfoFinanceLegaleForm from "@/Components/InfoFinanceLegaleForm.jsx";
import { Head, Link, useForm } from "@inertiajs/react";
import SupplierLayout from "@/Layouts/SupplierLayout.jsx";

const Index = ({ initialData = {}, supplierName, auth }) => {
    console.log("Initial Data:", initialData);

    

    const { data, setData, post, processing, errors, reset } = useForm({
        informationsFinancieresLegales: {
            chiffre_affaire_annee1: initialData.informationsFinancieresLegales?.chiffre_affaire_annee1 || '',
            chiffre_affaire_annee2: initialData.informationsFinancieresLegales?.chiffre_affaire_annee2 || '',
            chiffre_affaire_annee3: initialData.informationsFinancieresLegales?.chiffre_affaire_annee3 || '',
            conditions_paiement: initialData.informationsFinancieresLegales?.conditions_paiement || '',
            modalites_facturation: initialData.informationsFinancieresLegales?.modalites_facturation || '',
            principaux_actionnaires: initialData.informationsFinancieresLegales?.principaux_actionnaires || '',
            representant_legal: initialData.informationsFinancieresLegales?.representant_legal || '',
            qualite_representant_legal: initialData.informationsFinancieresLegales?.qualite_representant_legal || '',
            maison_mere_filiales: initialData.informationsFinancieresLegales?.maison_mere_filiales || '',
            certifications_qualite: initialData.informationsFinancieresLegales?.certifications_qualite || '',
            licences_autorisations: initialData.informationsFinancieresLegales?.licences_autorisations || '',
            polices_assurance: initialData.informationsFinancieresLegales?.polices_assurance || '',
            plan_continuite_crise: initialData.informationsFinancieresLegales?.plan_continuite_crise || false,
            politique_rse: initialData.informationsFinancieresLegales?.politique_rse || false,
            pratiques_ethiques: initialData.informationsFinancieresLegales?.pratiques_ethiques || false,
        },
        supplier_id: supplierName.id || "",
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleFormChange = (section, name, value) => {
        setData(section, {
            ...data[section],
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const routeName = 'supplier.infofinancelegale.upload';

        post(route(routeName), {
            onSuccess: () => {
                setSuccessMessage("Données téléchargées avec succès");
                setErrorMessage("");
                reset(); // Reset form after success
            },
            onError: (errors) => {
                setErrorMessage("Une erreur est survenue lors du téléchargement des données");
                setSuccessMessage("");
                console.error(errors);
            },
        });
    };

    return (
        <SupplierLayout user={auth.user}>
            <Head title="Mes Informations" />
            <form onSubmit={handleSubmit}>
                <InfoFinanceLegaleForm
                    data={data.informationsFinancieresLegales}
                    onChange={(name, value) => handleFormChange('informationsFinancieresLegales', name, value)}
                />

                {successMessage && (
                    <div className="my-4 text-green-600 text-center">
                        {successMessage}
                    </div>
                )}

                {errorMessage && (
                    <div className="my-4 text-red-600 text-center">
                        {errorMessage}
                    </div>
                )}

                <div className="my-6 flex justify-center">
                    <Link
                        className="bg-blue-600 mr-6 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        href={route("supplier.infogénérales.index")}
                    >
                        Précédent
                    </Link>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Suivant
                    </button>
                </div>
            </form>
        </SupplierLayout>
    );
};

export default Index;
