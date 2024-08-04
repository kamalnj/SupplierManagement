<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ContractResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array<string, mixed>
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'fournisseur_id' => $this->fournisseur_id, // supplier_id
            'date_debut' => $this->date_debut, // start_date
            'date_fin' => $this->date_fin, // end_date
            'conditions' => $this->conditions, // terms
            'statut' => $this->statut, // status
            'nom_entreprise' => $this->nom_entreprise, // company_name
            'adresse_entreprise' => $this->adresse_entreprise, // company_address
            'nom_representant' => $this->nom_representant, // representative_name
            'fonction_representant' => $this->fonction_representant, // representative_position
            'nom_fournisseur' => $this->nom_fournisseur, // supplier_name
            'adresse_fournisseur' => $this->adresse_fournisseur, // supplier_address
            'nom_representant_fournisseur' => $this->nom_representant_fournisseur, // supplier_representative_name
            'fonction_representant_fournisseur' => $this->fonction_representant_fournisseur	, // supplier_representative_position
            'description_produit_service' => $this->description_produit_service, // product_service_description
            'duree_contrat' => $this->duree_contrat, // contract_duration
            'prix_annexe' => $this->prix_annexe, // annex_price
            'conditions_paiement' => $this->conditions_paiement, // payment_terms
            'penalite_retard' => $this->penalite_retard, // late_penalty
            'date_signature' => $this->date_signature, // signature_date
            'lieu_signature' => $this->lieu_signature, // signature_place
            'signature_entreprise' => $this->signature_entreprise, // company_signature
            'signature_fournisseur' => $this->signature_fournisseur, // supplier_signature
        ];
    }
}
