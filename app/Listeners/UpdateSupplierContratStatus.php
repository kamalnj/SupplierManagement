<?php

namespace App\Listeners;

use App\Events\ContractCreated;

use Illuminate\Support\Facades\Log;

class UpdateSupplierContratStatus
{
    public function handle(ContractCreated $event)
    {
        $contract = $event->contract;
        $supplier = $contract->supplier;

        if ($supplier) {
            $supplier->contrat = 'Oui';
            $supplier->save();
        } else {
            Log::warning('Supplier not found for contract ID: ' . $contract->id);
        }
    }

   
}