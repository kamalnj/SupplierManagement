import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Create = ({ auth }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        nom: '',
        email: '',
        categorie: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('supplier.store'), {
            onSuccess: () => {
                reset(); // Reset form after successful submission
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Créer un nouveau fournisseur
                    </h2>
                </div>
            }
        >
            <Head title="Créer un fournisseur" />
            <div className="my-8 mx-auto max-w-3xl">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <form onSubmit={submit} className="space-y-6">
                        {/* Nom */}
                        <div className="relative z-0 w-full group">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12v4m0 0v-4m0 0H8m8 0h-8M3 12h18" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                name="nom"
                                value={data.nom}
                                onChange={e => setData('nom', e.target.value)}
                                id="floating_name"
                                className="block py-2 pl-10 pr-4 w-full text-base text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:border-blue-600 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none transition duration-200 ease-in-out peer"
                                placeholder="Nom du Fournisseur"
                                required
                            />
                            {errors.nom && <div className="text-red-600 text-sm mt-2">{errors.nom}</div>}
                        </div>

                        {/* Email */}
                        <div className="relative z-0 w-full group">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12v4m0 0v-4m0 0H8m8 0h-8M3 12h18" />
                                </svg>
                            </span>
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                                id="email"
                                className="block py-2 pl-10 pr-4 w-full text-base text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:border-blue-600 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none transition duration-200 ease-in-out peer"
                                placeholder="Email"
                                required
                            />
                            {errors.email && <div className="text-red-600 text-sm mt-2">{errors.email}</div>}
                        </div>

                        {/* Catégorie */}
                        <div className="relative z-0 w-full group">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12v4m0 0v-4m0 0H8m8 0h-8M3 12h18" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                name="categorie"
                                value={data.categorie}
                                onChange={e => setData('categorie', e.target.value)}
                                id="categorie"
                                className="block py-2 pl-10 pr-4 w-full text-base text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:border-blue-600 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none transition duration-200 ease-in-out peer"
                                placeholder="Catégorie"
                                required
                            />
                            {errors.categorie && <div className="text-red-600 text-sm mt-2">{errors.categorie}</div>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-2 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 shadow-md transform transition-transform hover:scale-105 flex items-center justify-center"
                            disabled={processing}
                        >
                            {processing ? (
                                <svg className="animate-spin h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12c0-1.9 1.5-4 4-4h8c2.5 0 4 2.1 4 4s-1.5 4-4 4H8c-2.5 0-4-2.1-4-4z" />
                                </svg>
                            ) : null}
                            Ajouter
                        </button>
                    </form>
                    {/* Success Message */}
                    {errors.success && <div className="mt-4 text-green-600 text-sm">{errors.success}</div>}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
