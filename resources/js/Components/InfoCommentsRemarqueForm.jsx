import React, { useState, useEffect } from "react";

const InfoCommentsRemarqueForm = ({ data, onChange, supplierName }) => {
    const [formData, setFormData] = useState({
        commentaire: data.commentaire || "",
        remarques: data.remarques || "",
    });

    useEffect(() => {
        setFormData({
            principaux_clients: data.principaux_clients || "",
            remarques: data.remarques || "",
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
                       Commentaire
                    </label>
                    <input
                        type="text"
                        name="commentaire"
                        value={formData.commentaire}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Remarque
                    </label>
                    <input
                        type="text"
                        name="remarques"
                        value={formData.remarques}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
        </div>
    );
};

export default InfoCommentsRemarqueForm;
