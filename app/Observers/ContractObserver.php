<?php

namespace App\Observers;

use App\Models\Contract;
use App\Models\Supplier;

class ContractObserver
{
    /**
     * Handle the Contract "deleting" event.
     *
     * @param  \App\Models\Contract  $contract
     * @return void
     */
    public function deleting(Contract $contract)
    {
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
