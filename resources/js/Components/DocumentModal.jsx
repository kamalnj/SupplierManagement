import { useForm } from '@inertiajs/inertia-react';
import React from 'react';

const DocumentModal = ({ isOpen, onClose, documents, documentNames }) => {
    const { delete: deleteDocument } = useForm();

    const handleDelete = (documentId) => {
        if (documentId) {
            deleteDocument(route('document.destroy', documentId), {
                onSuccess: () => console.log('Document deleted successfully'),
                onError: () => console.log('Error deleting document'),
            });
        }
    };

    if (!isOpen || !documents) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" aria-hidden="true">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full mx-4 sm:mx-0">
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Détails du Document</h3>
                    <div>
                        <h4 className="text-lg font-medium text-gray-700 mb-3">Documents:</h4>
                        <ul className="space-y-2">
                            {documents.length > 0 ? (
                                documents.map((doc, index) => {
                                    const documentName = documentNames[doc.id_nom_document]?.nom || 'Nom non disponible';
                                    return (
                                        <li key={index} className="flex items-center justify-between">
                                            <div>
                                                <span className="font-medium text-gray-800">{documentName}</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                {doc.date_telechargement && (
                                              <a href="{{ route('admin.download', ['file' => $fileName]) }}">Download</a>

                                                )}
                                                <button  
                                                    type="button"
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                                                    onClick={() => handleDelete(doc.id)}
                                                >
                                                    Supprimer
                                                </button>
                                            </div>
                                        </li>
                                    );
                                })
                            ) : (
                                <li className="text-gray-600">Aucun document disponible</li>
                            )}
                        </ul>
                    </div>
                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={onClose}
                            className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition duration-200"
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocumentModal;
