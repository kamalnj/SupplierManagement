import React, { useState, useEffect } from 'react';

const InfoContactForm = ({ data, onChange, supplierName }) => {
    const [formData, setFormData] = useState({
        nom_prenom: data.nom_prenom || "",
        fonction: data.fonction || "",
        telephone: data.telephone || "",
        email: data.email || "",
    });

    useEffect(() => {
        setFormData({
            nom_prenom: data.nom_prenom || "",
            fonction: data.fonction || "",
            telephone: data.telephone || "",
            email: data.email || "",
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
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information </h3>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Nom et Prénom
                    </label>
                    <input
                        type="text"
                        name="nom_prenom"
                        value={formData.nom_prenom}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Nom et prénom du contact"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Fonction
                    </label>
                    <input
                        type="text"
                        name="fonction"
                        value={formData.fonction}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Fonction du contact"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Téléphone
                    </label>
                    <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Numéro de téléphone"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Adresse email"
                    />
                </div>
            </div>
        </div>
    );
}

export default InfoContactForm;
