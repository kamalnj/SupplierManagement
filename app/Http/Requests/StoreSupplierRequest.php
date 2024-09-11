<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Supplier;

class StoreSupplierRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // Allow all authenticated users to create suppliers
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nom' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:suppliers,email',
            'categorie'=> 'required|string|max:255',
            'qualification'=> 'string|max:255',
            'contrat' => 'nullable|string|in:' . implode(',', Supplier::getContratOptions()), // Make contrat nullable
            'password' => 'string|min:8|confirmed',
        ];
    }
}

