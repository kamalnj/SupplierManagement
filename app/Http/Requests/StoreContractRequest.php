<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreContractRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
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
            'fournisseur_id' => 'required|exists:suppliers,id',
            'date_debut' => 'required|date',
            'date_fin' => 'required|date|after_or_equal:date_debut',
            'conditions' => 'required|string',
            'statut' => 'required|string',
            'nom_entreprise' => 'required|string',
            'adresse_entreprise' => 'required|string',
            'nom_representant' => 'required|string',
            'fonction_representant' => 'required|string',
            'nom_fournisseur' => 'required|string',
            'adresse_fournisseur' => 'required|string',
            'nom_representant_fournisseur' => 'required|string',
            'fonction_representant_fournisseur' => 'required|string',
            'description_produit_service' => 'required|string',
            'duree_contrat' => 'required|string',
            'prix_annexe' => 'required|numeric',
            'conditions_paiement' => 'required|string',
            'penalite_retard' => 'required|string',
            'date_signature' => 'required|date',
            'lieu_signature' => 'required|string',
            'signature_entreprise' => 'required|string',
            'signature_fournisseur' => 'required|string',
        ];
    }
}
