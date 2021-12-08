<?php
require_once('./classes/session.php');
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
    <main>
        <div  class="product-h1">

            <h1 class="barre">Les products</h1>
        </div>
        <table class="product-table">
            <thead class="product-table" >
                <tr class="product-table">
                    <th class="product-nom barre">Nom</th>
                    <th class="product-prix barre">Prix</th>
                    <th class="product-text barre">Description</th>
                    <th class="product-prix barre">Category</th>
                    <th class="product-photo barre">Photo</th>
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
                <td class="product-nom"><?php echo $row['name'];?></td>
                <td class="product-prix"><?php echo $row['price'];?></td>
                <td class="product-text"><?php echo $row['description'];?></td>
                <td class="product-prix"><?php echo $category['name'];?></td>
                <td class="product-photo"><img src="data:image/x-icon;base64,<?= $image ?>"?> </td>
                <td class="admin-action"><a href="product_edit.php?id=<?php echo $row['id'];?>">Edit</a> </td>
            </tr>

        <?php
        }
        
    ?>

</table>


    </main>
</div>
<?php require_once('templates/footer.php');