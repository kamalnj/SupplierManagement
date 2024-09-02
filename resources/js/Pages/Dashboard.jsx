import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { UsersIcon, BriefcaseIcon, CalendarIcon } from '@heroicons/react/24/outline';

export default function Dashboard({ auth, stats, recentUpdates }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Tableau de bord Administrateur</h2>}
        >
            <Head title="Tableau de bord Administrateur" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg">
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <UsersIcon className="h-10 w-10 text-blue-500" />
                                    <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stats.totalSuppliers}</span>
                                </div>
                                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Fournisseurs Total</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg">
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <BriefcaseIcon className="h-10 w-10 text-green-500" />
                                    <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stats.activeContracts}</span>
                                </div>
                                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Contrats Actifs</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg">
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <BriefcaseIcon className="h-10 w-10 text-red-500" />
                                    <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stats.inactiveContracts}</span>
                                </div>
                                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Contrats Inactifs</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg">
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <CalendarIcon className="h-10 w-10 text-yellow-500" />
                                    <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stats.totalCampaigns}</span>
                                </div>
                                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Campagnes Total</p>
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Recent Updates Section */}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg">
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Activités Récentes</h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                Suivez les dernières actions et modifications dans le système.
                            </p>
                            <div className="mt-4 space-y-4">
                                {recentUpdates.length > 0 ? (
                                    recentUpdates.map((update, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <span className="text-sm text-gray-600 dark:text-gray-400">{update.description}</span>
                                            <span className="text-xs text-gray-500 dark:text-gray-500">{update.created_at}</span>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Aucune activité récente.</p>
                                )}
                            </div>
                        </div>
                    </div>

               
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
