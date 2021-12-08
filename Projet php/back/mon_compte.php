<?php
require_once('./templates/header.php');
?>
<div class="container">
    <nav class="compte_nav">
        <?php require_once('templates/navbar.php')?>
    </nav>
    <main>
        <h1>Votre compte <?php echo $user["lastname"]?></h1>
    </main>
</div>
<?php require_once('templates/footer.php');