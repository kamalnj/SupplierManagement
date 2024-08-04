<!DOCTYPE html>
<html>
<head>
    <title>Contrat de Fourniture</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        h1, h2, h3 {
            text-align: center;
        }
        .content {
            margin: 20px;
        }
    </style>
</head>
<body>
    <h1>Contrat de Fourniture</h1>
    <div class="content">
        <p><strong>Entre :</strong></p>
        <p>{{ $contract->nom_entreprise }}</p>
        <p>Adresse : {{ $contract->adresse_entreprise }}</p>
        <p>Représentée par : {{ $contract->nom_representant }}</p>
        <p>Fonction : {{ $contract->fonction_representant }}</p>
        
        <p><strong>Et :</strong></p>
        <p>{{ $contract->nom_fournisseur }}</p>
        <p>Adresse : {{ $contract->adresse_fournisseur }}</p>
        <p>Représenté par : {{ $contract->nom_representant_fournisseur }}</p>
        <p>Fonction : {{ $contract->fonction_representant_fournisseur }}</p>
        
        <h2>Préambule :</h2>
        <p>Ce contrat de fourniture (ci-après dénommé "Contrat") est conclu entre {{ $contract->nom_entreprise }} (ci-après dénommée "l'Entreprise") et {{ $contract->nom_fournisseur }} (ci-après dénommé "le Fournisseur") pour la fourniture de {{ $contract->description_produit_service }} selon les termes et conditions suivants.</p>
        
        <h2>Article 1 : Objet du Contrat</h2>
        <p>Le Fournisseur s'engage à fournir à l'Entreprise {{ $contract->description_produit_service }} conformément aux spécifications, quantités et délais indiqués dans les commandes émises par l'Entreprise.</p>
        
        <h2>Article 2 : Durée du Contrat</h2>
        <p>Le présent Contrat entre en vigueur à compter de sa date de signature et restera en vigueur pour une durée de {{ $contract->duree_contrat }} années, sauf résiliation anticipée conformément aux dispositions de l'Article 9.</p>
        
        <h2>Article 3 : Prix et Conditions de Paiement</h2>
        <p>Les prix des produits/services sont fixés dans l'annexe {{ $contract->prix_annexe }} jointe au présent Contrat. Les paiements seront effectués par l'Entreprise dans un délai de {{ $contract->conditions_paiement }} jours à compter de la date de réception de la facture émise par le Fournisseur.</p>
        
        <h2>Article 4 : Livraison</h2>
        <p>Le Fournisseur s'engage à livrer les produits/services à l'adresse indiquée par l'Entreprise dans les délais convenus. En cas de retard de livraison, des pénalités pourront être appliquées conformément à l'Article 5.</p>
        
        <h2>Article 5 : Pénalités de Retard</h2>
        <p>Pour chaque jour de retard dans la livraison des produits/services, une pénalité de {{ $contract->penalite_retard }} sera appliquée, sauf cas de force majeure.</p>
        
        <h2>Article 6 : Conformité et Garantie</h2>
        <p>Le Fournisseur garantit que les produits/services fournis sont conformes aux spécifications définies dans le Contrat. En cas de non-conformité, l'Entreprise pourra exiger le remplacement ou le remboursement des produits/services.</p>
        
        <h2>Article 7 : Confidentialité</h2>
        <p>Chaque partie s'engage à garder confidentielles toutes les informations échangées dans le cadre du présent Contrat et à ne pas les divulguer à des tiers sans l'accord préalable de l'autre partie.</p>
        
        <h2>Article 8 : Propriété Intellectuelle</h2>
        <p>Tous les droits de propriété intellectuelle relatifs aux produits/services fournis par le Fournisseur restent la propriété du Fournisseur, sauf disposition contraire dans le présent Contrat.</p>
        
        <h2>Article 9 : Résiliation</h2>
        <p>Le présent Contrat peut être résilié par l'une des parties en cas de manquement grave aux obligations contractuelles par l'autre partie, après notification écrite et sans réponse corrective dans un délai de {{ $contract->duree_contrat }} jours.</p><br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <h2>Article 10 : Loi Applicable et Juridiction Compétente</h2>
        <p>Le présent Contrat est régi par la loi {{ $contract->lieu_signature }}. Tout litige relatif à l'interprétation ou à l'exécution du Contrat sera de la compétence exclusive des tribunaux de {{ $contract->lieu_signature }}.</p>
        <br>
        <br>
        <br>
        <p>Fait à {{ $contract->lieu_signature }}, le {{ $contract->date_signature }} en deux exemplaires originaux.</p>
        
        <p>Pour l'Entreprise :</p>
        <p>Nom : {{ $contract->nom_representant }}</p>
        <p>Fonction : {{ $contract->fonction_representant }}</p>
        <p>Signature : ________________________</p>
        
        <p>Pour le Fournisseur :</p>
        <p>Nom : {{ $contract->nom_representant_fournisseur }}</p>
        <p>Fonction : {{ $contract->fonction_representant_fournisseur }}</p>
        <p>Signature : ________________________</p>
    </div>
</body>
</html>
