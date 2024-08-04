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
            'statut' => 'required|string',
            'nom_entreprise' => 'required|string|max:255',
            'adresse_entreprise' => 'required|string|max:255',
            'nom_representant' => 'required|string|max:255',
            'fonction_representant' => 'required|string|max:255',
            'nom_fournisseur' => 'required|string|max:255',
            'adresse_fournisseur' => 'required|string|max:255',
            'nom_representant_fournisseur' => 'required|string|max:255',
            'fonction_representant_fournisseur' => 'required|string|max:255',
            'description_produit_service' => 'required|string',
            'duree_contrat' => 'required|string',
            'prix_annexe' => 'required|numeric',
            'conditions_paiement' => 'required|string',
            'penalite_retard' => 'required|numeric',
            'clause_resiliation' => 'required|string',
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
            'statut.required' => 'Le statut est obligatoire.',
            'nom_entreprise.required' => 'Le nom de l\'entreprise est obligatoire.',
            'adresse_entreprise.required' => 'L\'adresse de l\'entreprise est obligatoire.',
            'nom_representant.required' => 'Le nom du représentant est obligatoire.',
            'fonction_representant.required' => 'La fonction du représentant est obligatoire.',
            'nom_fournisseur.required' => 'Le nom du fournisseur est obligatoire.',
            'adresse_fournisseur.required' => 'L\'adresse du fournisseur est obligatoire.',
            'nom_representant_fournisseur.required' => 'Le nom du représentant du fournisseur est obligatoire.',
            'fonction_representant_fournisseur.required' => 'La fonction du représentant du fournisseur est obligatoire.',
            'description_produit_service.required' => 'La description du produit/service est obligatoire.',
            'duree_contrat.required' => 'La durée du contrat est obligatoire.',
            'prix_annexe.required' => 'Le prix annexe est obligatoire.',
            'prix_annexe.numeric' => 'Le prix annexe doit être un nombre.',
            'conditions_paiement.required' => 'Les conditions de paiement sont obligatoires.',
            'penalite_retard.required' => 'La pénalité de retard est obligatoire.',
            'penalite_retard.numeric' => 'La pénalité de retard doit être un nombre.',
            'clause_resiliation.required' => 'La clause de résiliation est obligatoire.',
        ];
    }
}
