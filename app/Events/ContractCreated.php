<?php

namespace App\Events;

use App\Models\Contract;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ContractCreated
{
    use Dispatchable, SerializesModels;

    public $contract;

    /**
     * Create a new event instance.
     *
     * @param  \App\Models\Contract  $contract
     * @return void
     */
    public function __construct(Contract $contract)
    {
        $this->contract = $contract;
    }
}