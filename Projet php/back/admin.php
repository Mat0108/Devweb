<?php
require_once('./templates/header.php'); 
require_once('./classes/bdd.php');
$bdd = new Bdd();
$sql = 'SELECT * FROM `product`';
$product = $bdd->fetchall($sql);
?>
<div class="container">
<nav class="compte_nav">
        <?php require_once('templates/navbar.php')?>
</nav>
<table class="admin-table">
    <thead class="admin-table" >
        <tr class="admin-table">
            <th class="admin-nom barre">Nom</th>
            <th class="admin-prix barre">Prix </th>
            <th class="admin-text barre">Description</th>
            <th class="admin-prix barre">Category</th>
            <th class="admin-photo barre">Photo</th>
            <th class="admin-action barre"></th>
            
        </tr>
    </thead>
        <?php 
        foreach($product as $row){
            $image = base64_encode(file_get_contents($row['picture']));
            $sql = 'SELECT `name` FROM `category` WHERE `id` = :id';
            $category = $bdd->fetch($sql,array(
                ':id' => $row['category']
            ));
        ?>
        
        <tr>
            <td class="admin-nom"><?php echo $row['name'];?></td>
            <td class="admin-prix"><?php echo $row['price'];?></td>
            <td class="admin-text"><?php echo $row['description'];?></td>
            <td class="product-prix"><?php echo $category['name'];?></td>
            <td class="admin-photo"><img src="data:image/x-icon;base64,<?= $image ?>"> </td>
            <td class="admin-action"><a href="admin_edit.php?id=<?php echo $row['id'];?>">Edit</a> </td>
         </tr>

    <?php
    }
        
    ?>

</table>
</div>
<?php require_once('templates/footer.php')?>



