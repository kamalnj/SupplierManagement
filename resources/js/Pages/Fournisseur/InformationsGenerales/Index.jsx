import React, { useState, useEffect } from 'react';
import InfoGeneralesForm from '../../../Components/InfoGeneralesForm.jsx';
import { Head, useForm } from '@inertiajs/react';
import SupplierLayout from '@/Layouts/SupplierLayout.jsx';

const Index = ({ initialData = {}, supplierName, auth }) => {
    console.log("Initial Data:", initialData);
    const { data, setData, post, processing, errors, reset } = useForm({
        infoGenerales: {
            date_creation: initialData.infoGenerales?.date_creation || '',
            effectif: initialData.infoGenerales?.effectif || '',
            forme_juridique: initialData.infoGenerales?.forme_juridique || '',
            capital_social: initialData.infoGenerales?.capital_social || '',
            adresse_siege_social: initialData.infoGenerales?.adresse_siege_social || '',
            numero_rc: initialData.infoGenerales?.numero_rc || '',
            lieu_immatriculation: initialData.infoGenerales?.lieu_immatriculation || '',
            numero_if: initialData.infoGenerales?.numero_if || '',
            numero_patente: initialData.infoGenerales?.numero_patente || '',
            numero_ice: initialData.infoGenerales?.numero_ice || '',
            telephone: initialData.infoGenerales?.telephone || '',
            site_web: initialData.infoGenerales?.site_web || '',
            nom_representant: initialData.infoGenerales?.nom_representant || '',
            fonction_representant: initialData.infoGenerales?.fonction_representant || '',
        },
        supplier_id: supplierName.id || '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFormChange = (section, name, value) => {
        setData(section, {
            ...data[section],
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const routeName = initialData.infoGenerales ? 'supplier.infogénérales.upload' : 'supplier.infogénérales.upload';
        
        post(route(routeName), {
            onSuccess: () => {
                setSuccessMessage('Données téléchargées avec succès');
                setErrorMessage('');
                reset();  // Optionally reset form if needed
            },
            onError: (errors) => {
                setErrorMessage('Une erreur est survenue lors du téléchargement des données');
                setSuccessMessage('');
                console.error(errors);
            },
        });
    };

    return (
        <SupplierLayout user={auth.user}>
            <Head title="Mes Informations" />
            <form onSubmit={handleSubmit}>
                <InfoGeneralesForm
                    data={data.infoGenerales}
                    onChange={(name, value) => handleFormChange('infoGenerales', name, value)}
                    supplierName={supplierName}
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
