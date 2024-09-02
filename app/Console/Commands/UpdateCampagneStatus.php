<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Campagnes;

class UpdateCampagneStatus extends Command
{
    protected $signature = 'campagne:update-status';
    protected $description = 'Mise à jour automatique des statuts des campagnes';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $campagnes = Campagnes::all();
        foreach ($campagnes as $campagne) {
            $now = now();

            if ($now->lt($campagne->date_debut)) {
                $campagne->statut = 'Planifiée';
            } elseif ($now->between($campagne->date_debut, $campagne->date_fin)) {
                $campagne->statut = 'En cours';
            } elseif ($now->gt($campagne->date_fin)) {
                $campagne->statut = 'Terminée';
            }

            $campagne->save();
        }

        $this->info('Statuts des campagnes mis à jour avec succès.');
    }
}
