<?php 
require_once('templates/headerlogin.php');
require_once('./classes/bdd.php');

$error = null;

if(isset($_POST['send'])){
    $email      = $_POST['email'];
    $password   = $_POST['password'];
    
    if($email !== "" && $password !== ""){
        $bdd = new bdd();
        $sql = "SELECT * FROM user WHERE email= :email;";
        $user = $bdd->fetch($sql,array(
            ':email' => $email
        ));
        if($user && password_verify($password,$user['password'])){
            $session->set('user', $user);
                 
            header('Location: mon_compte.php');
            
        }else{
            $error = 'Mauvais mot de passe ou login';
        }
        
    }   
}

if ($error){
    
    }
    

?>





<form class="login-form" action="" method="post">
    <h1>Login</h1>
    
    <div>
        <label class="login-label" for="email">Email</label>
        <input class="login-input" required type="text" name="email" id="email" placeholder="Entrez votre email"/>
    </div>
    <div>
        <label class="login-label" for="pwd">Password</label>
        <input class="login-input" required type="password" name="password" id="psw" placeholder="Entrez votre mot de passe"/>
    </div>
    <div >
        <input class="login-button" type="submit" name = "send" value = "Connection">
    </div>
    <div>
        <a class="login-href" href="register.php">Creer un compte</a>
    </div>
    <div>
        <label class="error"><?php echo $error?></label>
    </div>
    
</form>

<?php require_once('templates/footer.php')?>
