<?php

namespace App\Listeners;

use App\Events\ContractDeleted;
use App\Models\Contract;
use App\Models\Supplier;

class UpdateSupplierContractStatusOnDelete
{
    /**
     * Handle the event.
     *
     * @param  \App\Events\ContractDeleted  $event
     * @return void
     */
    public function handle(ContractDeleted $event)
    {
        $contract = $event->contract;
        $supplierId = $contract->fournisseur_id;

        // Vérifier si le fournisseur a encore d'autres contrats
        $hasContracts = Contract::where('fournisseur_id', $supplierId)->exists();

        if (!$hasContracts) {
            $supplier = Supplier::find($supplierId);
            if ($supplier) {
                $supplier->contrat = 'Non';
                $supplier->save();
            }
        }
    }
}
