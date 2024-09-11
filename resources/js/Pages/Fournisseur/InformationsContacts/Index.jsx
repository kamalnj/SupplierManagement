import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';  // Corrected import

import SupplierLayout from '@/Layouts/SupplierLayout.jsx';
import InfoContactForm from '@/Components/infoContactForm';
import { InertiaApp } from '@inertiajs/inertia-react';

const Index = ({ initialData = {}, supplierName, auth, supplierContacts = [] }) => {
    const { data, setData, post, processing, errors } = useForm({
        supplierContacts: initialData?.supplierContacts || {},
        supplier_id: supplierName.id || '',
    });

    const handleFormChange = (section, name, value) => {
        setData(section, {
            ...data[section],
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('supplier.infocontact.upload'), {
            onSuccess: () => {
                console.log("Data uploaded successfully");
            },
            onError: (errors) => {
                console.error(errors);
            },
        });
    };

    const handleDelete = (id) => {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce contact?')) {
            Inertia.delete(route('supplier.infocontact.destroy', id), {
                onSuccess: () => {
                    console.log("Contact supprimé avec succès");
                },
                onError: (errors) => {
                    console.error(errors);
                },
            });
        }
    };
    
    return (
        <SupplierLayout user={auth.user}>
            <Head title="Mes Contacts" />

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Ajouter Contact</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <InfoContactForm
                            data={data.supplierContacts}
                            onChange={(name, value) => handleFormChange('supplierContacts', name, value)}
                        />
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="w-full max-w-xs bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                                disabled={processing}
                            >
                                {processing ? 'Enregistrement...' : 'Enregistrer'}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Contacts Existants</h2>

                    {supplierContacts.length > 0 ? (
                        <ul className="space-y-4">
                            {supplierContacts.map((contact) => (
                                <li key={contact.id} className="border border-gray-200 p-4 rounded-md shadow-sm flex justify-between items-center">
                                    <div>
                                        <p className="text-gray-700"><strong>Nom:</strong> {contact.nom_prenom}</p>
                                        <p className="text-gray-700"><strong>Fonction:</strong> {contact.fonction}</p>
                                        <p className="text-gray-700"><strong>Téléphone:</strong> {contact.telephone}</p>
                                        <p className="text-gray-700"><strong>Email:</strong> {contact.email}</p>
                                    </div>
                                    <button
                                        onClick={() => handleDelete(contact.id)}
                                        className="bg-red-600 text-white py-1 px-3 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                                    >
                                        Supprimer
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">Aucun contact trouvé.</p>
                    )}
                </div>
            </div>
        </SupplierLayout>
    );
};

export default Index;
