    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
    import { Head } from '@inertiajs/react';

    export default function Dashboard({ auth }) {
        return (
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Tableau de bord Administrateur</h2>}
            >
                <Head title="Tableau de bord Administrateur" />
                         <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Bienvenue, Admin!</h4>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Voici votre tableau de bord où vous pouvez gérer les fournisseurs, surveiller les performances, et consulter les contrats. 
                            .
                        </p>
                    </div>
         
            </AuthenticatedLayout>
        );
    }
