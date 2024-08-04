import { Dialog } from "@headlessui/react";
import { useEffect } from "react";
import { useForm } from "@inertiajs/react";

const ContractModal = ({ isOpen, onClose, contract, mode }) => {
    const { data, setData, post, put, errors } = useForm({
        fournisseur_id: '',
        date_debut: '',
        date_fin: '',
        conditions: '',
        statut: '',
        nom_entreprise: '',
        adresse_entreprise: '',
        nom_representant: '',
        fonction_representant: '',
        nom_fournisseur: '',
        adresse_fournisseur: '',
        nom_representant_fournisseur: '',
        fonction_representant_fournisseur: '',
        description_produit_service: '',
        duree_contrat: '',
        prix_annexe: '',
        conditions_paiement: '',
        penalite_retard: '',
        date_signature: '',
        lieu_signature: '',
        signature_entreprise: '',
        signature_fournisseur: '',
    });

    useEffect(() => {
        if (contract) {
            setData({
                fournisseur_id: contract.fournisseur_id,
                date_debut: contract.date_debut,
                date_fin: contract.date_fin,
                conditions: contract.conditions,
                statut: contract.statut,
                nom_entreprise: contract.nom_entreprise,
                adresse_entreprise: contract.adresse_entreprise,
                nom_representant: contract.nom_representant,
                fonction_representant: contract.fonction_representant,
                nom_fournisseur: contract.nom_fournisseur,
                adresse_fournisseur: contract.adresse_fournisseur,
                nom_representant_fournisseur: contract.nom_representant_fournisseur,
                fonction_representant_fournisseur: contract.fonction_representant_fournisseur,
                description_produit_service: contract.description_produit_service,
                duree_contrat: contract.duree_contrat,
                prix_annexe: contract.prix_annexe,
                conditions_paiement: contract.conditions_paiement,
                penalite_retard: contract.penalite_retard,
                date_signature: contract.date_signature,
                lieu_signature: contract.lieu_signature,
                signature_entreprise: contract.signature_entreprise,
                signature_fournisseur: contract.signature_fournisseur,
            });
        }
    }, [contract]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mode === 'edit' && contract) {
            put(route('contract.update', contract.id), {
                onSuccess: () => onClose(),
            });
        } else if (mode === "create") {
            post(route('contract.store'), {
                onSuccess: () => onClose(),
            });
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-900 bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full mt-auto max-w-lg mx-auto">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {mode === 'edit' ? 'Modifier le contrat' : 'Détails d\'un contrat'}
                </h2>
                {mode === "view" ? (
                    <div>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Date de début: {contract.date_debut}</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Date de fin: {contract.date_fin}</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Conditions: {contract.conditions}</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Statut: {contract.statut}</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Nom de l'entreprise: {contract.nom_entreprise}</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Adresse de l'entreprise: {contract.adresse_entreprise}</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Nom du représentant: {contract.nom_representant}</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Fonction du représentant: {contract.fonction_representant}</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Nom du fournisseur: {contract.nom_fournisseur}</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Adresse du fournisseur: {contract.adresse_fournisseur}</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Nom du représentant du fournisseur: {contract.nom_representant_fournisseur}</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Fonction du représentant du fournisseur: {contract.fonction_representant_fournisseur}</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Description du produit/service: {contract.description_produit_service}</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Durée du contrat: {contract.duree_contrat}</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Prix annexe: {contract.prix_annexe}</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Conditions de paiement: {contract.conditions_paiement}</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Pénalité de retard: {contract.penalite_retard}</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Date de signature: {contract.date_signature}</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">Lieu de signature: {contract.lieu_signature}</p>
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
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                            <div>
                                <label htmlFor="fournisseur_id" className="block text-sm font-medium text-gray-700">ID Fournisseur</label>
                                <input
                                    type="text"
                                    id="fournisseur_id"
                                    name="fournisseur_id"
                                    value={data.fournisseur_id}
                                    onChange={(e) => setData('fournisseur_id', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                                {errors.fournisseur_id && <p className="mt-2 text-sm text-red-600">{errors.fournisseur_id}</p>}
                            </div>
                            <div>
                                <label htmlFor="date_debut" className="block text-sm font-medium text-gray-700">Date de Début</label>
                                <input
                                    type="date"
                                    id="date_debut"
                                    name="date_debut"
                                    value={data.date_debut}
                                    onChange={(e) => setData('date_debut', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                                {errors.date_debut && <p className="mt-2 text-sm text-red-600">{errors.date_debut}</p>}
                            </div>
                            <div>
                                <label htmlFor="date_fin" className="block text-sm font-medium text-gray-700">Date de Fin</label>
                                <input
                                    type="date"
                                    id="date_fin"
                                    name="date_fin"
                                    value={data.date_fin}
                                    onChange={(e) => setData('date_fin', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                                {errors.date_fin && <p className="mt-2 text-sm text-red-600">{errors.date_fin}</p>}
                            </div>
                            <div>
                                <label htmlFor="conditions" className="block text-sm font-medium text-gray-700">Conditions</label>
                                <textarea
                                    id="conditions"
                                    name="conditions"
                                    value={data.conditions}
                                    onChange={(e) => setData('conditions', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                                {errors.conditions && <p className="mt-2 text-sm text-red-600">{errors.conditions}</p>}
                            </div>
                            <div>
                                <label htmlFor="statut" className="block text-sm font-medium text-gray-700">Statut</label>
                                <input
                                    type="text"
                                    id="statut"
                                    name="statut"
                                    value={data.statut}
                                    onChange={(e) => setData('statut', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                                {errors.statut && <p className="mt-2 text-sm text-red-600">{errors.statut}</p>}
                            </div>
                            <div>
                                <label htmlFor="nom_entreprise" className="block text-sm font-medium text-gray-700">Nom de l'Entreprise</label>
                                <input
                                    type="text"
                                    id="nom_entreprise"
                                    name="nom_entreprise"
                                    value={data.nom_entreprise}
                                    onChange={(e) => setData('nom_entreprise', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                                {errors.nom_entreprise && <p className="mt-2 text-sm text-red-600">{errors.nom_entreprise}</p>}
                            </div>
                            <div>
                                <label htmlFor="adresse_entreprise" className="block text-sm font-medium text-gray-700">Adresse de l'Entreprise</label>
                                <input
                                    type="text"
                                    id="adresse_entreprise"
                                    name="adresse_entreprise"
                                    value={data.adresse_entreprise}
                                    onChange={(e) => setData('adresse_entreprise', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                                {errors.adresse_entreprise && <p className="mt-2 text-sm text-red-600">{errors.adresse_entreprise}</p>}
                            </div>
                            <div>
                                <label htmlFor="nom_representant" className="block text-sm font-medium text-gray-700">Nom du Représentant</label>
                                <input
                                    type="text"
                                    id="nom_representant"
                                    name="nom_representant"
                                    value={data.nom_representant}
                                    onChange={(e) => setData('nom_representant', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                                {errors.nom_representant && <p className="mt-2 text-sm text-red-600">{errors.nom_representant}</p>}
                            </div>
                            <div>
                                <label htmlFor="fonction_representant" className="block text-sm font-medium text-gray-700">Fonction du Représentant</label>
                                <input
                                    type="text"
                                    id="fonction_representant"
                                    name="fonction_representant"
                                    value={data.fonction_representant}
                                    onChange={(e) => setData('fonction_representant', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                                {errors.fonction_representant && <p className="mt-2 text-sm text-red-600">{errors.fonction_representant}</p>}
                            </div>
                            <div>
                                <label htmlFor="nom_fournisseur" className="block text-sm font-medium text-gray-700">Nom du Fournisseur</label>
                                <input
                                    type="text"
                                    id="nom_fournisseur"
                                    name="nom_fournisseur"
                                    value={data.nom_fournisseur}
                                    onChange={(e) => setData('nom_fournisseur', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                                {errors.nom_fournisseur && <p className="mt-2 text-sm text-red-600">{errors.nom_fournisseur}</p>}
                            </div>
                            <div>
                                <label htmlFor="adresse_fournisseur" className="block text-sm font-medium text-gray-700">Adresse du Fournisseur</label>
                                <input
                                    type="text"
                                    id="adresse_fournisseur"
                                    name="adresse_fournisseur"
                                    value={data.adresse_fournisseur}
                                    onChange={(e) => setData('adresse_fournisseur', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                                {errors.adresse_fournisseur && <p className="mt-2 text-sm text-red-600">{errors.adresse_fournisseur}</p>}
                            </div>
                            <div>
                                <label htmlFor="nom_representant_fournisseur" className="block text-sm font-medium text-gray-700">Nom du Représentant du Fournisseur</label>
                                <input
                                    type="text"
                                    id="nom_representant_fournisseur"
                                    name="nom_representant_fournisseur"
                                    value={data.nom_representant_fournisseur}
                                    onChange={(e) => setData('nom_representant_fournisseur', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                                {errors.nom_representant_fournisseur && <p className="mt-2 text-sm text-red-600">{errors.nom_representant_fournisseur}</p>}
                            </div>
                            <div>
                                <label htmlFor="fonction_representant_fournisseur" className="block text-sm font-medium text-gray-700">Fonction du Représentant du Fournisseur</label>
                                <input
                                    type="text"
                                    id="fonction_representant_fournisseur"
                                    name="fonction_representant_fournisseur"
                                    value={data.fonction_representant_fournisseur}
                                    onChange={(e) => setData('fonction_representant_fournisseur', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                                {errors.fonction_representant_fournisseur && <p className="mt-2 text-sm text-red-600">{errors.fonction_representant_fournisseur}</p>}
                            </div>
                            <div>
                                <label htmlFor="description_produit_service" className="block text-sm font-medium text-gray-700">Description du Produit/Service</label>
                                <textarea
                                    id="description_produit_service"
                                    name="description_produit_service"
                                    value={data.description_produit_service}
                                    onChange={(e) => setData('description_produit_service', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                                {errors.description_produit_service && <p className="mt-2 text-sm text-red-600">{errors.description_produit_service}</p>}
                            </div>
                            <div>
                                <label htmlFor="duree_contrat" className="block text-sm font-medium text-gray-700">Durée du Contrat</label>
                                <input
                                    type="text"
                                    id="duree_contrat"
                                    name="duree_contrat"
                                    value={data.duree_contrat}
                                    onChange={(e) => setData('duree_contrat', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                                {errors.duree_contrat && <p className="mt-2 text-sm text-red-600">{errors.duree_contrat}</p>}
                            </div>
                            <div>
                                <label htmlFor="prix_annexe" className="block text-sm font-medium text-gray-700">Prix Annexe</label>
                                <input
                                    type="text"
                                    id="prix_annexe"
                                    name="prix_annexe"
                                    value={data.prix_annexe}
                                    onChange={(e) => setData('prix_annexe', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                                {errors.prix_annexe && <p className="mt-2 text-sm text-red-600">{errors.prix_annexe}</p>}
                            </div>
                            <div>
                                <label htmlFor="conditions_paiement" className="block text-sm font-medium text-gray-700">Conditions de Paiement</label>
                                <textarea
                                    id="conditions_paiement"
                                    name="conditions_paiement"
                                    value={data.conditions_paiement}
                                    onChange={(e) => setData('conditions_paiement', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                                {errors.conditions_paiement && <p className="mt-2 text-sm text-red-600">{errors.conditions_paiement}</p>}
                            </div>
                            <div>
                                <label htmlFor="penalite_retard" className="block text-sm font-medium text-gray-700">Pénalité de Retard</label>
                                <input
                                    type="text"
                                    id="penalite_retard"
                                    name="penalite_retard"
                                    value={data.penalite_retard}
                                    onChange={(e) => setData('penalite_retard', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                                {errors.penalite_retard && <p className="mt-2 text-sm text-red-600">{errors.penalite_retard}</p>}
                            </div>
                            <div>
                                <label htmlFor="clause_resiliation" className="block text-sm font-medium text-gray-700">Clause de Résiliation</label>
                                <textarea
                                    id="clause_resiliation"
                                    name="clause_resiliation"
                                    value={data.clause_resiliation}
                                    onChange={(e) => setData('clause_resiliation', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                                {errors.clause_resiliation && <p className="mt-2 text-sm text-red-600">{errors.clause_resiliation}</p>}
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
                            </div>

                        </form>
                )}
            </div>
        </div>
    );
};

export default ContractModal;

