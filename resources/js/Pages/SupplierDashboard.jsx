import SupplierLayout from '@/Layouts/SupplierLayout';
import { Head } from '@inertiajs/react';

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
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg">
                        <div className="p-6 flex items-center space-x-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Bienvenue, {auth.user.name} !</h3>
                               
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    Nous vous encourageons à compléter vos informations pour une meilleure expérience.
                                    N'hésitez pas à nous contacter si vous avez des questions ou besoin d'assistance !
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg p-6">
                        <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">À faire :</h4>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li>🔹 Compléter vos informations</li>
                            <li>🔹 Vérifier vos contrats </li>
                            <li>🔹 Contacter notre support si nécessaire</li>
                        </ul>
                    </div>
                </div>
            </div>
        </SupplierLayout>
    );
}
