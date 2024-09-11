<?php

namespace App\Http\Controllers;

use App\Models\Contract;
use App\Models\Document;
use Illuminate\Http\Request;

class SupplierDashboardController extends Controller
{
    
    public function index()
    {

        return inertia('SupplierDashboard', [
           
        ]);
    }

    private function getStats()
    {
        return [
            'activeContracts' => Contract::where('statut', 'active')->count(),
            'Documents' => Document::count(),
        ];
    }
}
