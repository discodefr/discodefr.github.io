<?php
if(isset($_POST['nom']) && isset($_POST['prenom']) $$ isset($_POST['discordtag']) && isset($_POST['email']) && isset($_POST['message'])) {
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $discordtag = $_POST['discordtag'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'discodefr.contact@gmail.com';
    $subject = '[SITE] Nouveau contact';
    $body = "[Site DisCode] Nouveau contact ! \n\nNom : " + $name ? $name : "Non précisé." + "\nPrénom : " + $prenom ? $prenom : "Non précisé." + "\nTag Discord : " + $discordtag ? $discordtag : "Non précisé." + "\nE-Mail : " + $email ? $email : "Non précisé." + "\n\nMessage : \n$message"

    //send
    $send = mail($to, $subject, $body);
    if($send) {
        echo '<br>';
        echo 'Merci de nous avoir contacté. Si vous avez rempli les champs "Tag Discord" ou "E-Mail", vous obtiendrez une réponse aussi tôt que possible.'

    } else {
        echo 'Oups ! Une erreur est survenue, veuillez réessayer s\'il-vous-plaît !'
    }
}
?>