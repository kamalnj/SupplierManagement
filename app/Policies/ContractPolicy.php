<?php

namespace App\Policies;

use App\Models\Contract;
use App\Models\User;

class ContractPolicy
{
    public function accept(User $user, Contract $contract)
    {
        return $user->supplier->id === $contract->fournisseur_id;
    }
}
