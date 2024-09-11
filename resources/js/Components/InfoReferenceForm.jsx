import React, { useState, useEffect } from "react";

const InfoReferenceForm = ({ data, onChange, supplierName }) => {
    const [formData, setFormData] = useState({
        principaux_clients: data.principaux_clients || "",
        projets_realises: data.projets_realises || "",
    });

    useEffect(() => {
        setFormData({
            principaux_clients: data.principaux_clients || "",
            projets_realises: data.projets_realises || "",
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
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Principaux clients ou références
                    </label>
                    <input
                        type="text"
                        name="principaux_clients"
                        value={formData.principaux_clients}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Exemples de projets réalisés
                    </label>
                    <input
                        type="text"
                        name="projets_realises"
                        value={formData.projets_realises}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
        </div>
    );
};

export default InfoReferenceForm;
