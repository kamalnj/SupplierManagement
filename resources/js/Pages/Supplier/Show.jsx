import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Show = ({ auth, supplier }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={`Supplier Details: ${supplier.nom}`} />

            <section className="bg-white dark:bg-gray-900 flex justify-center py-8">
                <div className="max-w-2xl mx-4 lg:mx-auto">
                    <div className="relative">
                        <img
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 rounded-t-lg">
                            <h2 className="text-3xl font-bold text-white">{supplier.nom}</h2>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-b-lg shadow-lg mt-6">
                        <dl>
                            <dt className="text-lg font-semibold leading-none text-gray-900 dark:text-white">Details</dt>
                            <dd className="mt-2 text-gray-500 dark:text-gray-400">
                                <p><strong>Address:</strong> {supplier.adresse}</p>
                                <p><strong>Contact:</strong> {supplier.contact}</p>
                                <p><strong>Email:</strong> {supplier.email}</p>
                            </dd>
                        </dl>

                        <div className="mt-6">
                            <Link
                                href={route('supplier.index')}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Retourner à la liste
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
};

export default Show;
