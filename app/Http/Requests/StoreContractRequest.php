<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreContractRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'fournisseur_id' => 'required|exists:suppliers,id',
            'nom_fournisseur' => 'required|string',
      
        ];
    }
}
