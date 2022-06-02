<?php 



if (isset($_POST['valider'])) {
    // Controle des champs si javascript est desactive
    $err = '';
    if ($_POST['last'] == "") {
        $err.= "Veuillez indiquer votre nom !";
    } elseif ($_POST['email'] == "") {
        $err.= "Veuillez indiquer votre email !";
    } 
    // Traitement des donnees du formulaire
    if ($err == "") {
        // Enregistrement en BDD (si besoin)
       // Insérer votre requête à cet endroit
        
        // Envoi du mail
        $sujet = "Mail depuis mon site";
        $msg_texte = "Votre texte<br /><br />";
        $msg_texte.= "E-mail : ".$_POST['email']."<br /><br />";
        $msg_texte.= "Nom : ".$_POST['last'];
        $entete = "Reply-to: http://127.0.0.1:5501/";
        $entete.= "From: Mon site <http://127.0.0.1:5501/>";
        $entete.= "MIME-Version: 1.0";
        $entete.= "Content-Type:text/html; charset=utf-8;";
        $send = mail("gdossantos.pro@gmail.com", $sujet, $msg_texte, $entete);
        // Tag pour afficher le bon envoi du formulaire
        $ok = true;
    }
}


?>

