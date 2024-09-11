import React, { useState, useEffect } from 'react';

const InfoFinanceLegaleForm = ({ data, onChange, supplierName }) => {
    const [formData, setFormData] = useState({
        chiffre_affaire_annee1: data.chiffre_affaire_annee1 || "",
        chiffre_affaire_annee2: data.chiffre_affaire_annee2 || "",
        chiffre_affaire_annee3: data.chiffre_affaire_annee3 || "",
        conditions_paiement: data.conditions_paiement || "",
        modalites_facturation: data.modalites_facturation || "",
        principaux_actionnaires: data.principaux_actionnaires || "",
        representant_legal: data.representant_legal || "",
        qualite_representant_legal: data.qualite_representant_legal || "",
        maison_mere_filiales: data.maison_mere_filiales || "",
        certifications_qualite: data.certifications_qualite || "",
        licences_autorisations: data.licences_autorisations || "",
        polices_assurance: data.polices_assurance || "",
        plan_continuite_crise: data.plan_continuite_crise || false,
        politique_rse: data.politique_rse || false,
        pratiques_ethiques: data.pratiques_ethiques || false,
    });

    useEffect(() => {
        setFormData({
            chiffre_affaire_annee1: data.chiffre_affaire_annee1 || "",
            chiffre_affaire_annee2: data.chiffre_affaire_annee2 || "",
            chiffre_affaire_annee3: data.chiffre_affaire_annee3 || "",
            conditions_paiement: data.conditions_paiement || "",
            modalites_facturation: data.modalites_facturation || "",
            principaux_actionnaires: data.principaux_actionnaires || "",
            representant_legal: data.representant_legal || "",
            qualite_representant_legal: data.qualite_representant_legal || "",
            maison_mere_filiales: data.maison_mere_filiales || "",
            certifications_qualite: data.certifications_qualite || "",
            licences_autorisations: data.licences_autorisations || "",
            polices_assurance: data.polices_assurance || "",
            plan_continuite_crise: data.plan_continuite_crise || false,
            politique_rse: data.politique_rse || false,
            pratiques_ethiques: data.pratiques_ethiques || false,
        });
    }, [data]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
        onChange(name, type === 'checkbox' ? checked : value);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Informations Financières et Légales</h2>
            <h2 className="  font-semibold mb-4">NB : Chiffre d'affaire (3 dernières années)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Chiffre d'affaire (année 1):
                        <input
                            type="number"
                            name="chiffre_affaire_annee1"
                            value={formData.chiffre_affaire_annee1}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Chiffre d'affaire (année 2):
                        <input
                            type="number"
                            name="chiffre_affaire_annee2"
                            value={formData.chiffre_affaire_annee2}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Chiffre d'affaire (année 3):
                        <input
                            type="number"
                            name="chiffre_affaire_annee3"
                            value={formData.chiffre_affaire_annee3}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Conditions de paiement:
                        <textarea
                            name="conditions_paiement"
                            value={formData.conditions_paiement}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Modalités de facturation<span className=' text-xs text-gray-400'>(Facultatif)</span>:
                        <textarea
                            name="modalites_facturation"
                            value={formData.modalites_facturation}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Principaux actionnaires:
                        <textarea
                            name="principaux_actionnaires"
                            value={formData.principaux_actionnaires}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Représentant légal:
                        <textarea
                            name="representant_legal"
                            value={formData.representant_legal}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Qualité du représentant légal:
                        <input
                            type="text"
                            name="qualite_representant_legal"
                            value={formData.qualite_representant_legal}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Maison-mère / Filiales<span className=' text-xs text-gray-400'>(Facultatif)</span>:
                        <textarea
                            name="maison_mere_filiales"
                            value={formData.maison_mere_filiales}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Certifications qualité<span className=' text-xs text-gray-400'>(Facultatif)</span>:
                        <textarea
                            name="certifications_qualite"
                            value={formData.certifications_qualite}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Licences ou autorisations nécessaires à l’activité<span className=' text-xs text-gray-400'>(Facultatif)</span>:
                        <textarea
                            name="licences_autorisations"
                            value={formData.licences_autorisations}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Polices d'assurance (RC / RC Pro / Cyber...)<span className=' text-xs text-gray-400'>(Facultatif)</span>:
                        <textarea
                            name="polices_assurance"
                            value={formData.polices_assurance}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </label>
                </div>
                <div className="flex items-center">
            <input
                type="checkbox"
                id="plan_continuite_crise"
                name="plan_continuite_crise"
                checked={formData.plan_continuite_crise}
                onChange={handleChange}
                className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="plan_continuite_crise" className="ml-3 text-sm font-medium text-gray-700">
                Plan de continuité des activités en cas de crise<span className=' text-xs text-gray-400'>(Facultatif)</span>
            </label>
        </div>
        <div className="flex items-center">
            <input
                type="checkbox"
                id="politique_rse"
                name="politique_rse"
                checked={formData.politique_rse}
                onChange={handleChange}
                className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="politique_rse" className="ml-3 text-sm font-medium text-gray-700">
                Politique RSE<span className=' text-xs text-gray-400'>(Facultatif)</span>
            </label>
        </div>
        <div className="flex items-center">
            <input
                type="checkbox"
                id="pratiques_ethiques"
                name="pratiques_ethiques"
                checked={formData.pratiques_ethiques}
                onChange={handleChange}
                className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="pratiques_ethiques" className="ml-3 text-sm font-medium text-gray-700">
                Pratiques éthiques (code de conduite, lutte contre la corruption, etc.)<span className=' text-xs text-gray-400'>(Facultatif)</span>
            </label>
        </div>
            </div>
        </div>
    );
};

export default InfoFinanceLegaleForm;
