import SupplierLayout from '@/Layouts/SupplierLayout';
import { Head } from '@inertiajs/react';
import { BriefcaseIcon, DocumentIcon, BellAlertIcon } from '@heroicons/react/24/outline';

export default function SupplierDashboard({ auth }) {
    return (
        <SupplierLayout 
            user={auth.user}
            header={<h2 className="font-semibold text-2xl text-gray-800 dark:text-gray-200 leading-tight">Tableau de bord</h2>}
        >
            <Head title="Tableau de bord" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    {/* Welcome Section */}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-lg font-semibold">Bienvenue, {auth.user.name} !</h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Voici un aperçu rapide de votre activité récente et des options disponibles.</p>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg">
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <BriefcaseIcon className="h-10 w-10 text-blue-500" />
                                    <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">0</span>
                                </div>
                                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Contrats Actifs</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg">
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <DocumentIcon className="h-10 w-10 text-green-500" />
                                    <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">0</span>
                                </div>
                                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Documents Manquants</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg">
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <BellAlertIcon className="h-10 w-10 text-red-500" />
                                    <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">0</span>
                                </div>
                                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Notifications</p>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity Section */}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg">
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Activité Récente</h3>
                            <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                     
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </SupplierLayout>
    );
}
