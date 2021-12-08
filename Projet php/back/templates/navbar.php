
<ul>
    <li class="navbar-barre"><a href="product.php"    class="navbar-barre">les produits</a></li>
    <li class="navbar-barre"><a href="mon_compte.php" class="navbar-barre">Votre compte</a></li>
    <li class="navbar-barre"><a href="mon_compte.php" class="navbar-barre">Vos commandes</li>
    <li class="navbar-barre"><a href="mon_compte.php" class="navbar-barre">Vos messages</li>
    <li class="navbar-barre"><a href="logout.php"     class="navbar-barre">Deconnexion</a></li>
    <?php
    require_once('./classes/session.php');
    $user = $session->get('user');
    if($user['role'] == "admin"){
        ?> <li class="navbar-barre"><a href="admin.php" class="navbar-barre">Admin</a></li><?php
    }
    
    ?>
</ul>