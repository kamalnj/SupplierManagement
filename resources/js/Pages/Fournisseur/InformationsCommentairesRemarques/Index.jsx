import React from 'react';
import { Head, useForm} from '@inertiajs/react';
import SupplierLayout from '@/Layouts/SupplierLayout.jsx';
import InfoCommentsRemarqueForm from '@/Components/InfoCommentsRemarqueForm';

const Index = ({ initialData = {}, supplierName, auth, commentairesRemarques }) => {
    const { data, setData, post, processing, errors } = useForm({
        commentairesRemarques: initialData?.commentairesRemarques || {},
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
        post(route('supplier.commentaireremarque.upload'), {
            onSuccess: () => {
                console.log("Data uploaded successfully");
            },
            onError: (errors) => {
                console.error(errors);
            },
        });
    };

    return (
        <SupplierLayout user={auth.user}>
            <Head title="Mes Contacts" />

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Commentaires et Remarques</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <InfoCommentsRemarqueForm
                            data={data.commentairesRemarques}
                            onChange={(name, value) => handleFormChange('commentairesRemarques', name, value)}
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
            </div>
        </SupplierLayout>
    );
};

export default Index;
