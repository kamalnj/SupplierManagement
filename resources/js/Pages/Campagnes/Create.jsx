import {React,useState} from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Create = ({ auth, suppliers }) => {
    // Obtenez la date actuelle
    const today = new Date().toISOString().split('T')[0];
    const [selectedSuppliers, setSelectedSuppliers] = useState(new Set());



    const { data, setData, post, processing, errors, reset } = useForm({
        nom: '',
        description: '',
        date_debut: today,
        date_fin: '',
        selectedSuppliers: [],

        
    });
    const handleCheckboxChange = (e) => {
        const supplierId = e.target.value;
        const updatedSelectedSuppliers = new Set(selectedSuppliers);

        if (e.target.checked) {
            updatedSelectedSuppliers.add(supplierId);
        } else {
            updatedSelectedSuppliers.delete(supplierId);
        }

        setSelectedSuppliers(updatedSelectedSuppliers);
        setData('selectedSuppliers', Array.from(updatedSelectedSuppliers));
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('campagnes.store'), {
            data: { ...data, selectedSuppliers: data.selectedSuppliers },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Créer une nouvelle campagne
                    </h2>
                </div>
            }
        >
            <Head title="Créer une campagne" />
            <div className="my-6">
                <form onSubmit={submit} className="max-w-md mx-auto">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="nom"
                            value={data.nom}
                            onChange={e => setData('nom', e.target.value)}
                            id="floating_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Nom de la campagne
                        </label>
                        {errors.nom && <div className="text-red-600 text-sm">{errors.nom}</div>}
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="description"
                            value={data.description}
                            onChange={e => setData('description', e.target.value)}
                            id="floating_description"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_description"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Description de la campagne
                        </label>
                        {errors.description && <div className="text-red-600 text-sm">{errors.description}</div>}
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="date"
                            name="date_debut"
                            value={data.date_debut}
                            onChange={e => setData('date_debut', e.target.value)}
                            id="floating_date_debut"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            min={today} // Restrict to today and future dates
                            required
                        />
                        <label
                            htmlFor="date_debut"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Date début de la campagne
                        </label>
                        {errors.date_debut && <div className="text-red-600 text-sm">{errors.date_debut}</div>}
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="date"
                            name="date_fin"
                            value={data.date_fin}
                            onChange={e => setData('date_fin', e.target.value)}
                            id="date_fin"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            min={today} // Restrict to today and future dates
                            required
                        />
                        <label
                            htmlFor="date_fin"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Date fin de la campagne
                        </label>
                        {errors.date_fin && <div className="text-red-600 text-sm">{errors.date_fin}</div>}
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <label
                            htmlFor="suppliers"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                            Sélectionner les fournisseurs à évaluer :
                        </label>
                        <div className="space-y-2">
                            {suppliers.map(supplier => (
                                <div key={supplier.id} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`supplier-${supplier.id}`}
                                        value={supplier.id}
                                        checked={selectedSuppliers.has(supplier.id.toString())}
                                        onChange={handleCheckboxChange}
                                        className="w-4 mr-2 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label htmlFor={`supplier-${supplier.id}`} className="text-gray-700 dark:text-gray-300">
                                        {supplier.nom}
                                    </label>
                                </div>
                            ))}
                        </div>
                        {errors.selectedSuppliers && <div className="text-red-600 text-sm">{errors.selectedSuppliers}</div>}
                    </div>

                    {/* Display selected suppliers */}
                    {selectedSuppliers.size > 0 && (
                        <div className="mb-5">
                            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                                Fournisseurs sélectionnés :
                            </h3>
                            <ul className="list-disc list-inside">
                                {suppliers
                                    .filter(supplier => selectedSuppliers.has(supplier.id.toString()))
                                    .map(supplier => (
                                        <li key={supplier.id} className="text-gray-600 dark:text-gray-400">
                                            {supplier.nom}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                        disabled={processing}
                    >
                        Créer la campagne
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
