<?php

namespace App\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Models\Contract;

class ContractDeleted
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
