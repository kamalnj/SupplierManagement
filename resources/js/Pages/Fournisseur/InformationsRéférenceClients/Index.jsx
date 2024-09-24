import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import SupplierLayout from '@/Layouts/SupplierLayout.jsx';
import InfoReferenceForm from '@/Components/InfoReferenceForm';

const Index = ({ initialData = {}, supplierName, auth, referencesClients }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        referencesClients: initialData?.referencesClients || {},
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
        post(route('supplier.inforeferenceclient.upload'), {
            onSuccess: () => {
                setSuccessMessage('Données téléchargées avec succès');
                setErrorMessage('');
                reset(); // Reset the form after successful submission
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

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Références et Clients</h2>

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

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <InfoReferenceForm
                            data={data.referencesClients}
                            onChange={(name, value) => handleFormChange('referencesClients', name, value)}
                        />
                        <div className="flex justify-center">
                        <Link
                        className="bg-blue-600 w-28 mr-6 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        href={route("supplier.infocantact.index")}
                    >
                        Précédent
                    </Link>
                            <button
                                type="submit"
                                className="  bg-blue-600 w-28 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Suivant
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </SupplierLayout>
    );
};

export default Index;
