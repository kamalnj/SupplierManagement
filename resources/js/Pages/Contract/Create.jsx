import React from "react";
import { useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";


const Create = ({ auth }) => {
    const { suppliers, fournisseur } = usePage().props;
    const fournisseurId = fournisseur?.id || "";
    const nom = fournisseur?.nom || "";
    const adresse = fournisseur?.adresse || "";
    

    const { data, setData, post, processing, errors } = useForm({
        fournisseur_id: fournisseurId,
        date_debut: "",
        date_fin: "",
        conditions: "",
        // statut: "",
        nom_entreprise: "",
        adresse_entreprise: "",
        nom_representant: "",
        fonction_representant: "",
        nom_fournisseur: nom,
  adresse_fournisseur: adresse,
        nom_representant_fournisseur: "",
        fonction_representant_fournisseur: "",
        description_produit_service: "",
        duree_contrat: "",
        prix_annexe: "",
        conditions_paiement: "",
        penalite_retard: "",
        date_signature: "",
        lieu_signature: "",
        signature_entreprise: "",
        signature_fournisseur: "",
    });
    


    const submit = (e) => {
        e.preventDefault();
        post(route("contract.store"), {
            onSuccess: () => {
                console.log("succes")
            },
            onError: () => {
                console.log("failed")
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Créer un nouveau contrat fournisseur
                    </h2>
                </div>
            }
        >
            <Head title="Créer un contrat fournisseur" />
            <div className="my-12 py-4 ">
                <form onSubmit={submit} className="max-w-md mx-auto">
                    {/* Supplier ID Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="fournisseur_id"
                            value={data.fournisseur_id}
                            onChange={(e) =>
                            setData("fournisseur_id", e.target.value)
                            }
                            readOnly
                            id="floating_fournisseur_id"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            
                        />

                        <label
                            htmlFor="floating_fournisseur_id"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            ID du fournisseur
                        </label>
                        {errors.fournisseur_id && (
                            <div className="text-red-600 text-sm">
                                {errors.fournisseur_id}
                            </div>
                        )}
                    </div>

                    {/* Start Date Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="date"
                            name="date_debut"
                            value={data.date_debut}
                            onChange={(e) =>
                                setData("date_debut", e.target.value)
                            }
                            id="floating_date_debut"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_date_debut"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Date de début
                        </label>
                        {errors.date_debut && (
                            <div className="text-red-600 text-sm">
                                {errors.date_debut}
                            </div>
                        )}
                    </div>

                    {/* End Date Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="date"
                            name="date_fin"
                            value={data.date_fin}
                            onChange={(e) =>
                                setData("date_fin", e.target.value)
                            }
                            id="floating_date_fin"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_date_fin"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Date de fin
                        </label>
                        {errors.date_fin && (
                            <div className="text-red-600 text-sm">
                                {errors.date_fin}
                            </div>
                        )}
                    </div>

                    {/* Conditions Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <textarea
                            name="conditions"
                            value={data.conditions}
                            onChange={(e) =>
                                setData("conditions", e.target.value)
                            }
                            id="floating_conditions"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_conditions"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Conditions
                        </label>
                        {errors.conditions && (
                            <div className="text-red-600 text-sm">
                                {errors.conditions}
                            </div>
                        )}
                    </div>

                    {/* Status Field */}
                    {/* <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="statut"
                            value={data.statut}
                            onChange={(e) => setData("statut", e.target.value)}
                            id="floating_statut"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_statut"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Statut
                        </label>
                        {errors.statut && (
                            <div className="text-red-600 text-sm">
                                {errors.statut}
                            </div>
                        )}
                    </div> */}

                    {/* Company Name Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="nom_entreprise"
                            value={data.nom_entreprise}
                            onChange={(e) =>
                                setData("nom_entreprise", e.target.value)
                            }
                            id="floating_nom_entreprise"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_nom_entreprise"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Nom de l'entreprise
                        </label>
                        {errors.nom_entreprise && (
                            <div className="text-red-600 text-sm">
                                {errors.nom_entreprise}
                            </div>
                        )}
                    </div>

                    {/* Company Address Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="adresse_entreprise"
                            value={data.adresse_entreprise}
                            onChange={(e) =>
                                setData("adresse_entreprise", e.target.value)
                            }
                            id="floating_adresse_entreprise"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_adresse_entreprise"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Adresse de l'entreprise
                        </label>
                        {errors.adresse_entreprise && (
                            <div className="text-red-600 text-sm">
                                {errors.adresse_entreprise}
                            </div>
                        )}
                    </div>

                    {/* Representative Name Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="nom_representant"
                            value={data.nom_representant}
                            onChange={(e) =>
                                setData("nom_representant", e.target.value)
                            }
                            id="floating_nom_representant"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_nom_representant"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Nom du représentant
                        </label>
                        {errors.nom_representant && (
                            <div className="text-red-600 text-sm">
                                {errors.nom_representant}
                            </div>
                        )}
                    </div>

                    {/* Representative Function Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="fonction_representant"
                            value={data.fonction_representant}
                            onChange={(e) =>
                                setData("fonction_representant", e.target.value)
                            }
                            id="floating_fonction_representant"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_fonction_representant"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Fonction du représentant
                        </label>
                        {errors.fonction_representant && (
                            <div className="text-red-600 text-sm">
                                {errors.fonction_representant}
                            </div>
                        )}
                    </div>

                    {/* Supplier Name Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="nom_fournisseur"
                            value={nom}
                            onChange={(e) =>
                                setData(
                                    "nom_fournisseur",
                                    e.target.value
                                )
                            }
                            readOnly
                            id="floating_nom_fournisseur"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            
                        />
                        <label
                            htmlFor="floating_nom_fournisseur"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Nom du fournisseur
                        </label>
                        {errors.nom_fournisseur && (
                            <div className="text-red-600 text-sm">
                                {errors.nom_fournisseur}
                            </div>
                        )}
                    </div>

                    {/* Supplier Address Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="adresse_fournisseur"
                            value={adresse}
                            onChange={(e) =>
                                setData(
                                    "adresse_fournisseur",
                                    e.target.value
                                )
                            }
                            readOnly
                            id="floating_adresse_fournisseur"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            
                        />
                        <label
                            htmlFor="floating_adresse_fournisseur"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Adresse du fournisseur
                        </label>
                        {errors.adresse_fournisseur && (
                            <div className="text-red-600 text-sm">
                                {errors.adresse_fournisseur}
                            </div>
                        )}
                    </div>

                    {/* Supplier Representative Name Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="nom_representant_fournisseur"
                            value={data.nom_representant_fournisseur}
                            onChange={(e) =>
                                setData(
                                    "nom_representant_fournisseur",
                                    e.target.value
                                )
                            }
                            id="floating_nom_representant_fournisseur"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_nom_representant_fournisseur"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Nom du représentant du fournisseur
                        </label>
                        {errors.nom_representant_fournisseur && (
                            <div className="text-red-600 text-sm">
                                {errors.nom_representant_fournisseur}
                            </div>
                        )}
                    </div>

                    {/* Supplier Representative Function Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="fonction_representant_fournisseur"
                            value={data.fonction_representant_fournisseur}
                            onChange={(e) =>
                                setData(
                                    "fonction_representant_fournisseur",
                                    e.target.value
                                )
                            }
                            id="floating_fonction_representant_fournisseur"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_fonction_representant_fournisseur"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Fonction du représentant du fournisseur
                        </label>
                        {errors.fonction_representant_fournisseur && (
                            <div className="text-red-600 text-sm">
                                {errors.fonction_representant_fournisseur}
                            </div>
                        )}
                    </div>

                    {/* Product/Service Description Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="description_produit_service"
                            value={data.description_produit_service}
                            onChange={(e) =>
                                setData(
                                    "description_produit_service",
                                    e.target.value
                                )
                            }
                            id="floating_description_produit_service"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_description_produit_service"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Description du produit/service
                        </label>
                        {errors.description_produit_service && (
                            <div className="text-red-600 text-sm">
                                {errors.description_produit_service}
                            </div>
                        )}
                    </div>

                    {/* Contract Duration Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="duree_contrat"
                            value={data.duree_contrat}
                            onChange={(e) =>
                                setData("duree_contrat", e.target.value)
                            }
                            id="floating_duree_contrat"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_duree_contrat"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Durée du contrat
                        </label>
                        {errors.duree_contrat && (
                            <div className="text-red-600 text-sm">
                                {errors.duree_contrat}
                            </div>
                        )}
                    </div>

                    {/* Additional Price Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="prix_annexe"
                            value={data.prix_annexe}
                            onChange={(e) =>
                                setData("prix_annexe", e.target.value)
                            }
                            id="floating_prix_annexe"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_prix_annexe"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Prix Annexe
                        </label>
                        {errors.prix_annexe && (
                            <div className="text-red-600 text-sm">
                                {errors.prix_annexe}
                            </div>
                        )}
                    </div>

                    {/* Payment Conditions Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="conditions_paiement"
                            value={data.conditions_paiement}
                            onChange={(e) =>
                                setData("conditions_paiement", e.target.value)
                            }
                            id="floating_conditions_paiement"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_conditions_paiement"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Conditions de paiement
                        </label>
                        {errors.conditions_paiement && (
                            <div className="text-red-600 text-sm">
                                {errors.conditions_paiement}
                            </div>
                        )}
                    </div>

                    {/* Late Penalty Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="penalite_retard"
                            value={data.penalite_retard}
                            onChange={(e) =>
                                setData("penalite_retard", e.target.value)
                            }
                            id="floating_penalite_retard"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_penalite_retard"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Pénalité de retard
                        </label>
                        {errors.penalite_retard && (
                            <div className="text-red-600 text-sm">
                                {errors.penalite_retard}
                            </div>
                        )}
                    </div>

                    {/* Signature Date Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="date"
                            name="date_signature"
                            value={data.date_signature}
                            onChange={(e) =>
                                setData("date_signature", e.target.value)
                            }
                            id="floating_date_signature"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_date_signature"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Date de signature
                        </label>
                        {errors.date_signature && (
                            <div className="text-red-600 text-sm">
                                {errors.date_signature}
                            </div>
                        )}
                    </div>

                    {/* Signature Place Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="lieu_signature"
                            value={data.lieu_signature}
                            onChange={(e) =>
                                setData("lieu_signature", e.target.value)
                            }
                            id="floating_lieu_signature"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_lieu_signature"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Lieu de signature
                        </label>
                        {errors.lieu_signature && (
                            <div className="text-red-600 text-sm">
                                {errors.lieu_signature}
                            </div>
                        )}
                    </div>

                    {/* Company Signature Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="signature_entreprise"
                            value={data.signature_entreprise}
                            onChange={(e) =>
                                setData("signature_entreprise", e.target.value)
                            }
                            id="floating_signature_entreprise"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_signature_entreprise"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Signature de l'entreprise
                        </label>
                        {errors.signature_entreprise && (
                            <div className="text-red-600 text-sm">
                                {errors.signature_entreprise}
                            </div>
                        )}
                    </div>

                    {/* Supplier Signature Field */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="signature_fournisseur"
                            value={data.signature_fournisseur}
                            onChange={(e) =>
                                setData("signature_fournisseur", e.target.value)
                            }
                            id="floating_signature_fournisseur"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_signature_fournisseur"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Signature du fournisseur
                        </label>
                        {errors.signature_fournisseur && (
                            <div className="text-red-600 text-sm">
                                {errors.signature_fournisseur}
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Enregistrer
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};
export default Create;
