<?php

session_start();

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maux de pass et test</title>
</head>

<body>
    <main>
        <h1>Inserez votre mot de passe ici :</h1>
        <form action="decrypt_password.php" method="post">
            <input type="password" name="password" id="password">
            <input type="password" name="hashedPassword" id="hashedPassword">
            <button type="submit">Vérifier la correspondance des mot de passes</button>
        </form>
    </main>
</body>

</html>