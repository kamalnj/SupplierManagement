import SupplierLayout from '@/Layouts/SupplierLayout';
import { Head } from '@inertiajs/react';

export default function SupplierDashboard({ auth }) {
    return (
        <SupplierLayout 
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">Supplier , You're logged in!</div>
                    </div>
                </div>
            </div>
            </SupplierLayout>    );
}
