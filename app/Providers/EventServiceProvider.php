<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;
use App\Events\ContractCreated;
use App\Events\ContractDeleted;
use App\Listeners\UpdateNonSupplierContratStatus;
use App\Listeners\UpdateSupplierContractStatusOnDelete;
use App\Listeners\UpdateSupplierContratStatus;
use App\Models\Contract;
use App\Observers\ContractObserver;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        ContractCreated::class => [
            UpdateSupplierContratStatus::class,
        ],
        ContractDeleted::class => [
            UpdateSupplierContractStatusOnDelete::class,
        ],
      
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();
        Contract::observe(ContractObserver::class);


    }
}
