<?php
session_start();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Choix du pseudo</title>
</head>
<body>
    <h1>Choisissez votre pseudo</h1>
    <form action="nickname.php" method="post">
        <label for="nickname">Pseudo :</label>
        <input type="text" id="nickname" name="nickname" required>
        <button type="submit">Valider</button>
    </form>
</body>
<a href="logout.php">Déconnexion</a>
</html>