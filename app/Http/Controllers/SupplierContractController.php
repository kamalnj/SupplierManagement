<?php

namespace App\Http\Controllers;

use App\Models\Contract;
use App\Models\Document;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class SupplierContractController extends Controller
{
    use AuthorizesRequests;
    public function index()
    {
        $user = Auth::user();
        $supplier = $user->supplier;
        $contracts = Contract::where('fournisseur_id', $supplier->id)->get();

        return Inertia::render('Fournisseur/Contracts/Index', [
            'contracts' => $contracts,
        ]);
    }

    public function accept(Contract $contract)
    {
        $this->authorize('accept', $contract);

        $contract->update(['statut' => 'Active']);

        return redirect()->route('supplier.contracts.index')->with('success', 'Contract accepted.');
    }

    
}

