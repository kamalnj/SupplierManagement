<?php

namespace App\Http\Controllers;

use App\Models\Campagnes;
use App\Models\Supplier;
use App\Models\Contract;
class AdminDashboardController extends Controller
{
    public function index()
    {
        $recentUpdates = $this->getRecentUpdates();

        return inertia('Dashboard', [
            'stats' => $this->getStats(),
            'recentUpdates' => $recentUpdates,
        ]);
    }

    private function getStats()
    {
        return [
            'totalSuppliers' => Supplier::count(),
            'activeContracts' => Contract::where('statut', 'active')->count(),
            'inactiveContracts' => Contract::where('statut', 'inactive')->count(),
            'totalCampaigns' => Campagnes::count(),
        ];
    }

    private function getRecentUpdates()
    {
        $recentSuppliers = Supplier::orderBy('created_at', 'desc')->limit(5)->get()->map(function($supplier) {
            return [
                'type' => 'Fournisseur',
                'description' => "Fournisseur ajouté : {$supplier->nom}",
                'created_at' => $supplier->created_at->format('d M Y H:i'),
            ];
        });

        $recentContracts = Contract::orderBy('created_at', 'desc')->limit(5)->get()->map(function($contract) {
            return [
                'type' => 'Contrat',
                'description' => "Contrat {$contract->nom_fournisseur} {$contract->statut} le {$contract->created_at->format('d M Y')}",
                'created_at' => $contract->created_at->format('d M Y H:i'),
            ];
        });

        $recentCampaigns = Campagnes::orderBy('created_at', 'desc')->limit(5)->get()->map(function($campaign) {
            return [
                'type' => 'Campagne',
                'description' => "Campagne {$campaign->nom} créée le {$campaign->created_at->format('d M Y')}",
                'created_at' => $campaign->created_at->format('d M Y H:i'),
            ];
        });


        $recentUpdates = $recentSuppliers->merge($recentContracts)->merge($recentCampaigns)
                                         ->sortByDesc('created_at')
                                         ->take(5)
                                         ->values();

        return $recentUpdates;
    }
}
