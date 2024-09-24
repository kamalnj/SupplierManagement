import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons"; 
import Pagination from "@/Components/Pagination";
import { useState, useEffect } from "react"; 

const Index = ({ auth, contracts }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredContracts, setFilteredContracts] = useState(contracts.data);

    useEffect(() => {
        if (searchTerm) {
            const filtered = contracts.data.filter(contract =>
                contract.nom_fournisseur.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredContracts(filtered);
        } else {
            setFilteredContracts(contracts.data);
        }
    }, [searchTerm, contracts.data]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-3xl text-gray-800 dark:text-gray-200 leading-tight">
                        Liste des CGAs
                    </h2>
                </div>
            }
        >
            <Head title="Liste des contrats" />

            <section className="bg-gray-100 dark:bg-gray-900 p-6 antialiased">
                <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                    <form className="mb-4 flex items-center space-x-2">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Rechercher par nom de fournisseur..."
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring focus:ring-green-500 transition duration-300"
                        />
                    </form>
                    <div className="relative bg-white dark:bg-gray-800 shadow-lg sm:rounded-lg p-6">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">Nom du fournisseur</th>
                                        <th scope="col" className="px-4 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredContracts.map((contract, index) => (
                                        <tr
                                            key={contract.id}
                                            className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-300`}
                                        >
                                            <td className="px-4 py-3 text-gray-900 dark:text-white">
                                                {contract.nom_fournisseur}
                                            </td>
                                            <td className="px-4 py-3 flex items-center justify-start space-x-3">
                                                <button
                                                    type="button"
                                                    className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-md transition duration-300"
                                                    onClick={() =>
                                                        window.open(
                                                            `/contracts/view/contrat_${contract.nom_fournisseur}.pdf`,
                                                            "_blank"
                                                        )
                                                    }
                                                >
                                                    <FontAwesomeIcon icon={faEye} className="mr-2" />
                                                    Voir CGA
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <Pagination links={contracts.meta.links} />
        </AuthenticatedLayout>
    );
};

export default Index;
