<?php
if(isset($_POST['email'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "discodefr.contact@gmail.com";
    $email_subject = "[Site] Nouveau contact";
 
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
 
    // validation expected data exists
    if(!isset($_POST['nom']) ||
        !isset($_POST['prenom']) ||
        !isset($_post['discordtag']) ||
        !isset($_POST['email']) ||
        !isset($_POST['message'])) {
        died('Erreur !');       
    }
 
     
 
    $first_name = $_POST['nom']; // not required
    $last_name = $_POST['prenom']; // not required
    $discordtag = $_POST['discordtag'] // not required
    $email_from = $_POST['email']; // required
    $comments = $_POST['message']; // required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "Nom : ".clean_string($first_name)."\n";
    $email_message .= "Prénom : ".clean_string($last_name)."\n";
    $email_message .= "Email : ".clean_string($email_from)."\n";
    $email_message .= "Tag Discord : ".clean_string($discordtag)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";
 
// create email headers
$headers = 'De : '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 
Merci.
 
<?php
 
}
?>