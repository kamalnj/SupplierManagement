<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SupplierResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'nom' => $this->nom,
            'adresse' => $this->adresse,
            'contact' => $this->contact,
            'email' => $this->email,
            'categorie' => $this->categorie, // Ensure this line is present
            'created_at' => $this->created_at->toDateTimeString(),
        ];
    }
}
