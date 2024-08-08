<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateContractRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // Authorize all users for now, adjust as per your application's authorization logic
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
            'date_debut' => 'required|date',
            'date_fin' => 'required|date|after_or_equal:date_debut',
            'conditions' => 'required|string',
            'duree_contrat' => 'required|string',
            'prix_annexe' => 'required|numeric',
            'conditions_paiement' => 'required|string',
            'penalite_retard' => 'required|numeric',
        ];
    }

    /**
     * Custom messages for validation errors.
     *
     * @return array<string, string>
     */
    public function messages()
    {
        return [
            'date_debut.required' => 'La date de début est obligatoire.',
            'date_fin.required' => 'La date de fin est obligatoire.',
            'date_fin.after_or_equal' => 'La date de fin doit être postérieure ou égale à la date de début.',
            'conditions.required' => 'Les conditions sont obligatoires.',
            'duree_contrat.required' => 'La durée du contrat est obligatoire.',
            'prix_annexe.required' => 'Le prix annexe est obligatoire.',
            'prix_annexe.numeric' => 'Le prix annexe doit être un nombre.',
            'conditions_paiement.required' => 'Les conditions de paiement sont obligatoires.',
            'penalite_retard.required' => 'La pénalité de retard est obligatoire.',
            'penalite_retard.numeric' => 'La pénalité de retard doit être un nombre.',
        ];
    }
}
