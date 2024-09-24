import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia'; 
import SupplierLayout from '@/Layouts/SupplierLayout.jsx';
import InfoContactForm from '@/Components/infoContactForm';
import ConfirmationDialog from '@/Components/ConfirmationDialog';

const Index = ({ initialData = {}, supplierName, auth, supplierContacts = [] }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        supplierContacts: initialData?.supplierContacts || {},
        supplier_id: supplierName.id || '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false); // State for dialog visibility
    const [contactToDelete, setContactToDelete] = useState(null); // State to track contact to be deleted

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
                setSuccessMessage('Données téléchargées avec succès');
                setErrorMessage(''); 
                reset(); 
            },
            onError: (errors) => {
                setErrorMessage('Une erreur est survenue lors du téléchargement des données');
                setSuccessMessage(''); 
                console.error(errors);
            },
        });
    };

    const openDeleteDialog = (contact) => {
        setContactToDelete(contact); // Set the contact to be deleted
        setIsDialogOpen(true); // Open the dialog
    };

    const handleDelete = () => {
        if (contactToDelete) {
            Inertia.delete(route('supplier.infocontact.destroy', contactToDelete.id), {
                onSuccess: () => {
                    setSuccessMessage('Contact supprimé avec succès');
                    setErrorMessage('');
                    setIsDialogOpen(false); // Close dialog after deletion
                },
                onError: (errors) => {
                    setErrorMessage('Une erreur est survenue lors de la suppression du contact');
                    setSuccessMessage('');
                    setIsDialogOpen(false); // Close dialog even on error
                    console.error(errors);
                },
            });
        }
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false); // Close the dialog without deleting
        setContactToDelete(null); // Clear the contact to be deleted
    };

    return (
        <SupplierLayout user={auth.user}>
            <Head title="Mes Informations" />

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Ajouter Contact</h2>

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
                        <InfoContactForm
                            data={data.supplierContacts}
                            onChange={(name, value) => handleFormChange('supplierContacts', name, value)}
                        />
                        <div className="flex justify-center">
                        <Link
                        className="bg-blue-600 w-28 mr-6 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        href={route("supplier.infofinancelegale.index")}
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
                                        onClick={() => openDeleteDialog(contact)} // Open the dialog
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

            {/* Confirmation Dialog for Deletion */}
            <ConfirmationDialog
                isOpen={isDialogOpen}
                onClose={handleCloseDialog}
                onConfirm={handleDelete}
                title="Confirmer la suppression"
                description={`Êtes-vous sûr de vouloir supprimer ${contactToDelete?.nom_prenom}?`}
            />
        </SupplierLayout>
    );
};

export default Index;
