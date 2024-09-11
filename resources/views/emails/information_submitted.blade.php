
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouvelle Soumission d'Informations</title>
    <style>
        /* Add your custom styles here */
        body {
            font-family: Arial, sans-serif;
            color: #333;
            margin: 20px;
        }
        .container {
            max-width: 600px;
            margin: auto;
        }
        .header {
            background-color: #f8f9fa;
            padding: 10px;
            text-align: center;
            border-bottom: 1px solid #ddd;
        }
        .content {
            margin: 20px 0;
        }
        .footer {
            background-color: #f1f1f1;
            padding: 10px;
            text-align: center;
            border-top: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Nouvelle Soumission d'Informations</h1>
        </div>
        <div class="content">
            <p>Une nouvelle soumission d'informations a été complétée.</p>
            <p><strong>Type :</strong> {{ $type }}</p>
            <p>Merci de vérifier les informations soumises.</p>
        </div>
     
    </div>
</body>
</html>
