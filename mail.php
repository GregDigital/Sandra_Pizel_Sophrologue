
<?php
  $name = htmlspecialchars($_POST['name']);
  $prenom = htmlspecialchars($_POST['prenom']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);
  if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $receiver = "";
      $subject = "From: $name <$email>";
      $body = "Name: $name\nFirstname: $prenom\nEmail: $email\nMessage:\n$message\n";
      $sender = "From: $email";
      if(mail($receiver, $subject, $body, $sender)){
         echo "Merci, Votre message a bien été envoyé";
      }else{
         echo "Désolé votre message n'a pas été envoyé";
      }
    }else{
      echo "Merci d'entrer un email valide (contact@mail.fr)";
    }
  }else{
    echo "Merci d'indiquer votre email et votre message";
  }
?>