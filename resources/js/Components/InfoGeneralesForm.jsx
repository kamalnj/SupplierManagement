import React, { useEffect } from 'react';

const InfoGeneralesForm = ({ data, onChange, supplierName }) => {
    useEffect(() => {
        console.log("Data received:", data); // Check the data structure
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
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
                            value={data.date_creation}
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
                            value={data.effectif}
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
                            value={data.forme_juridique}
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
                            value={data.capital_social}
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
                            value={data.adresse_siege_social}
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
                            value={data.numero_rc}
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
                            value={data.lieu_immatriculation}
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
                            value={data.numero_if}
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
                            value={data.numero_patente}
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
                            value={data.numero_ice}
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
                            value={data.nom_representant}
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
                            value={data.fonction_representant}
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
                            value={data.telephone}
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
                            value={data.site_web}
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
