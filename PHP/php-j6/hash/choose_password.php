<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maux de pass</title>
</head>

<body>
    <main>
        <h1>Inserez votre mot de passe ici :</h1>
        <form action="hash_password.php" method="post">
            <input type="password" name="password" id="password">
            <button type="submit">Valider le mot de passe</button>
        </form>
    </main>
</body>

</html>