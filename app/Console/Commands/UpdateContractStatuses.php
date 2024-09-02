<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Contract;
use Carbon\Carbon;

class UpdateContractStatuses extends Command
{
    protected $signature = 'contracts:update-statuses';
    protected $description = 'Update contract statuses to "Expiré" if their date_fin has passed';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $contracts = Contract::where('statut', '!=', 'Expiré')->get();

        foreach ($contracts as $contract) {
            if (Carbon::parse($contract->date_fin)->isPast()) {
                $contract->statut = 'Expiré';
                $contract->save();
            }
        }

        $this->info('Contract statuses updated successfully.');
    }
}
