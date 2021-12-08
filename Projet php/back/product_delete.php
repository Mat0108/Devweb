<?php
require_once('./classes/session.php');
require_once('./templates/header.php');

require_once('./classes/bdd.php');
$bdd = new Bdd();

if(isset($_POST['annuler'])){

    header('Location: product.php');
}
if(isset($_POST['remove'])){
    $sql = 'DELETE FROM `product` WHERE `id`=:id';
    $bdd->execute($sql,array(
        ':id' => $_POST['id']
    ));
    header('Location: product.php');
}


$product = $bdd->fetch('SELECT * FROM `product`WHERE id = :id', array(
    ':id' => $_GET['id']
));
?>
<form class="delete-form" action="" method="post">
    <h1>Editer le produit ! </h1>
    <input type="hidden"  name="id" id="id" value="<?php echo $product["id"]?>" />
    <input type="hidden"  name="category" id="category" value="<?php echo $product["category"]?>" />
    <div>
        <label class="login-label" for="name">name</label>
        <input class="login-input" required type="text" name="name" id="name" value="<?php echo $product["name"]?>" placeholder="Entrez le nom du product"/>
    </div>
    <div>
        <label class="login-label" for="prix">prix</label>
        <input class="login-input" required type="text" name="price" id="price" value="<?php echo $product["price"]?>" placeholder="Entrez le prix"/>
    </div>
    <div>
        <label class="login-label" for="description">description</label>
        <input class="login-input" required type="text" name="description" id="description" value="<?php echo $product["description"]?>"  placeholder="Entrez la description"/>
    </div>
    <div>
        <label class="login-label" for="photo">photo</label>
        <input class="login-input" required type="text" name="picture" id="picture" value="<?php echo $product["picture"]?>" placeholder="Entrez l'url de la photo"/>
    </div>
    <div>
        <label class="login-label" for="category">category</label>
        <input class="login-input" required type="text" name="category" id="category" value="<?php echo $product["category"]?>" placeholder="Entrez l'url de la photo"/>
    </div>
    <div class="delete-label">
        <label>est vous sur ?<label>
    </div>
    <div class="delete-button">
        <input class="login-button" type="submit" name = "annuler" value = "Annuler">
        <input class="login-button" type="submit" name = "remove" value = "Supprimer" >
    </div>


    
</form>

