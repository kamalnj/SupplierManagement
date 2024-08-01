import React from "react";
import { Dialog } from "@headlessui/react";

const ConfirmationDialog = ({ isOpen, onClose, onConfirm }) => {
    return (
        <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 py-6">
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                <div className="relative bg-white rounded max-w-sm mx-auto p-6">
                    <Dialog.Title className="text-lg font-medium text-gray-900">Supprimer Fournisseur</Dialog.Title>
                    <Dialog.Description className="mt-2 text-sm text-gray-500">
                    Êtes-vous sûr de vouloir supprimer ce fournisseur ? Cette action ne peut pas être annulée.                    </Dialog.Description>
                    <div className="mt-4 flex justify-end space-x-4">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            onClick={onClose}
                        >
                            Annuler
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            onClick={onConfirm}
                        >
                            Supprimer
                        </button>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default ConfirmationDialog;
