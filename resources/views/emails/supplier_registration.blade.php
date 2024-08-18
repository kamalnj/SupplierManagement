<!DOCTYPE html>
<html>
<head>
    <title>Inscription Fournisseur</title>
</head>
<body>
    <h1>Bienvenue sur le Portail Fournisseur</h1>
    <p>Votre compte a été créé. Veuillez utiliser les informations suivantes pour vous connecter :</p>
    <p>Email : {{ $email }}</p>
    <p>Mot de passe : {{ $password }}</p>
    <p><a href="{{ url('http://127.0.0.1:8000/login') }}">Connectez-vous ici</a></p>
</body>
</html>
