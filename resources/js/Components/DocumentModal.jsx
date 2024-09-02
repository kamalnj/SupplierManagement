import React from 'react';

const DocumentModal = ({ isOpen, onClose, documents, documentNames }) => {
    if (!isOpen || !documents) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60" aria-hidden="true">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full mx-4 sm:mx-0">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-4">Détails du Document</h3>
                <div className="mt-4">
                    <h4 className="text-xl font-medium text-gray-800 mb-3">Documents:</h4>
                    <ul className="space-y-2">
                        {documents.length > 0 ? (
                            documents.map((doc, index) => {
                                const documentName = documentNames[doc.id_nom_document]?.nom || 'Nom non disponible';
                                return (
                                    <li key={index} className="flex items-center justify-between text-gray-700">
                                        <span className="font-medium">{documentName}</span>
                                        <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${doc.date_telechargement ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            {doc.date_telechargement ? 'Oui' : 'Non'}
                                        </span>
                                        {doc.date_telechargement && (
                                       <a
                                       href={route('documents.download', { document: doc.id })}
                                       className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition duration-300"
                                       aria-label={`Télécharger ${documentName}`}
                                   >
                                       Télécharger
                                   </a>
                                   
                                        )}
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
                        className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow-sm hover:bg-indigo-700 transition duration-300"
                    >
                        Fermer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DocumentModal;
