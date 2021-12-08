<?php 
require_once('./templates/headerlogin.php');
require_once('./classes/bdd.php');
if(isset($_POST['send'])){
    $email      = $_POST['email'];
    $password   = $_POST['password'];
    $firstname  = $_POST['firstname'];
    $lastname   = $_POST['lastname'];
    $role = "user";
    
    if($email !== "" && $password !== "" && $firstname !== "" && $lastname !==""){
        $sql = "INSERT INTO user (`email`,`password`,`firstname`,`lastname`,`role`) VALUES
        (:email,:password,:firstname,:lastname,:role);";

        $bdd = new Bdd();
        $bdd->execute($sql,array(
            ':email' => $email,
            ':password' => password_hash($password,PASSWORD_BCRYPT), 
            ':firstname' => $firstname,
            ':lastname' => $lastname,
            ':role'=> $role
        ));
        
        header('Location: login.php');
    }
}

?>

<form class="register-form" action="" method="post" >
    <h1> Créez votre compte</h1>
     <div>
        <label class="register-label" for="firstname">Prenom</label>
        <input class="register-input" type="text" name="firstname" id="firstname" placeholder="Entrez votre prenom"/>
    </div>
    <div>
        <label class="register-label" for="lastname">Nom</label>
        <input class="register-input" type="text" name="lastname" id="lastname" placeholder="Entrez votre nom"/>
    </div>
    <div>
        <label class="register-label" for="email">Email</label>
        <input class="register-input" type="text" name="email" id="email" placeholder="Entrez votre email"/>
    </div>
    <div>
        <label class="register-label" for="pwd">Password</label>
        <input class="register-input" type="password" name="password" id="psw" placeholder="Entrez votre mot de passe"/>
    </div>
    <div >
        <input class="register-button" type="submit" name = "send" value = "send">
    </div>
    <a class="register-href" href="login.php">Deja un compte ?<a>
</form>

<?php require_once('templates/footer.php')?>
