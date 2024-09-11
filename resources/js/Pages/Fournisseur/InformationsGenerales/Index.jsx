import React from 'react';
import InfoGeneralesForm from '../../../Components/InfoGeneralesForm.jsx';
import { Head, useForm } from '@inertiajs/react';
import SupplierLayout from '@/Layouts/SupplierLayout.jsx';

const Index = ({ initialData = {}, supplierName, auth }) => {
    const { data, setData, post, processing, errors } = useForm({
        infoGenerales: initialData?.infoGenerales || {},
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
        post(route('supplier.infogénérales.upload'), {
            onSuccess: () => {
                console.log("Data uploaded successfully");
            },
            onError: (errors) => {
                console.error(errors);
            },
        });
    };

    return (
        <SupplierLayout 
            user={auth.user}
        >
            <Head title="Mes Documents" />
            <form onSubmit={handleSubmit}>
                <InfoGeneralesForm
                    data={data.infoGenerales}
                    onChange={(name, value) => handleFormChange('infoGenerales', name, value)}
                    supplierName={supplierName}
                />
                <div className=" my-6 flex justify-center">
                <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={processing}
                    >
                        {processing ? 'Enregistrement...' : 'Enregistrer'}
                    </button>
                </div>
            </form>
        </SupplierLayout>
    );
};

export default Index;
