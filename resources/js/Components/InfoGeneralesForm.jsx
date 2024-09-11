import React, { useState, useEffect } from 'react';

const InfoGeneralesForm = ({ data, onChange, supplierName }) => {
    const [formData, setFormData] = useState({
        date_creation: data.date_creation || "",
        effectif: data.effectif || "",
        forme_juridique: data.forme_juridique || "",
        capital_social: data.capital_social || "",
        adresse_siege_social: data.adresse_siege_social || "",
        numero_rc: data.numero_rc || "",
        lieu_immatriculation: data.lieu_immatriculation || "",
        numero_if: data.numero_if || "",
        numero_patente: data.numero_patente || "",
        numero_ice: data.numero_ice || "",
        telephone: data.telephone || "",
        site_web: data.site_web || "",
        nom_representant: data.nom_representant || "",
        fonction_representant: data.fonction_representant || "",
    });

    useEffect(() => {
        setFormData({
            date_creation: data.date_creation || "",
            effectif: data.effectif || "",
            forme_juridique: data.forme_juridique || "",
            capital_social: data.capital_social || "",
            adresse_siege_social: data.adresse_siege_social || "",
            numero_rc: data.numero_rc || "",
            lieu_immatriculation: data.lieu_immatriculation || "",
            numero_if: data.numero_if || "",
            numero_patente: data.numero_patente || "",
            numero_ice: data.numero_ice || "",
            telephone: data.telephone || "",
            site_web: data.site_web || "",
            nom_representant: data.nom_representant || "",
            fonction_representant: data.fonction_representant || "",
        });
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        onChange(name, value);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Informations Générales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                    Nom de l'entreprise:
                        <input
                            type="text"
                            name="nom"
                            value={supplierName.nom || ''}
                            readOnly
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Date de création:
                        <input
                            type="date"
                            name="date_creation"
                            value={formData.date_creation}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Effectif:
                        <input
                            type="number"
                            name="effectif"
                            value={formData.effectif}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Forme juridique:
                        <input
                            type="text"
                            name="forme_juridique"
                            value={formData.forme_juridique}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Capital Social:
                        <input
                            type="text"
                            name="capital_social"
                            value={formData.capital_social}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Adresse du siège Social:
                        <input
                            type="text"
                            name="adresse_siege_social"
                            value={formData.adresse_siege_social}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        N° RC:
                        <input
                            type="number"
                            name="numero_rc"
                            value={formData.numero_rc}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Lieu d'immatriculation:
                        <input
                            type="text"
                            name="lieu_immatriculation"
                            value={formData.lieu_immatriculation}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        N° IF:
                        <input
                            type="number"
                            name="numero_if"
                            value={formData.numero_if}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        N° Patente:
                        <input
                            type="number"
                            name="numero_patente"
                            value={formData.numero_patente}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        N° ICE:
                        <input
                            type="number"
                            name="numero_ice"
                            value={formData.numero_ice}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Nom du représentant:
                        <input
                            type="text"
                            name="nom_representant"
                            value={formData.nom_representant}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Fonction du représentant:
                        <input
                            type="text"
                            name="fonction_representant"
                            value={formData.fonction_representant}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Téléphone:
                        <input
                            type="tel"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Site web<span className=' text-xs text-gray-400'>(Facultatif)</span>:
                        <input
                            type="url"
                            name="site_web"
                            value={formData.site_web}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </label>
                </div>
                
            </div>

        </div>
    );
};

export default InfoGeneralesForm;
