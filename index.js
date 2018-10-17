$(function(){
  //Variables controlant les données entrées dans les champs textes
  var regexFirstlast =  /^[a-zA-ZÀ-Ÿ-]+$/;
  var regexMail =  /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  var regexPhone = /^[0-9]{10}$/;
  var valid = false;//Variable validant le formulaire;
  //Fonction vérifiant le Nom au moment où on enlève le doigt de la touche
  $('#lastName').keyup(function(){
    if(!regexFirstlast.test(this.value)){//Condition appliquant le test de la regex à la valeur de this.
      //Erreur
      $('#lastName').css('border','1px solid red');//Changement de la couleur de la bordure de l'élément ciblé dans le html
      valid = false;//Refus de validation
    } else {
      //Correct
      $('#lastName').css('border','1px solid green');//Changement de la couleur de la bordure de l'élément ciblé dans le html
      valid = true;//Validé
    }
  });
  //Fonction vérifiant le Prénom au moment où on enlève le doigt de la touche
  $('#firstName').keyup(function(){
    if(!regexFirstlast.test(this.value)){//Condition appliquant le test de la regex à la valeur de this.
      //Erreur
      $('#firstName').css('border','1px solid red');//Changement de la couleur de la bordure de l'élément ciblé dans le html
      valid = false;//Refus de validation
    } else {
      //Correct
      $('#firstName').css('border','1px solid green');//Changement de la couleur de la bordure de l'élément ciblé dans le html
      valid = true;//Validé
    }
  });
  //Fonction vérifiant le Prénom au moment où on enlève le doigt de la touche
  $('#mail').keyup(function(){
    this.value = this.value.toLowerCase();//mise en minuscule pour la regex et parceque aucun mail n'existe en majuscule
    if(!regexMail.test(this.value)){//Condition appliquant le test de la regex à la valeur de this.
      //Erreur
      $('#mail').css('border','1px solid red');//Changement de la couleur de la bordure de l'élément ciblé dans le html
      valid = false;//Refus de validation
    } else {
      //Correct
      $('#mail').css('border','1px solid green');//Changement de la couleur de la bordure de l'élément ciblé dans le html
      valid = true;//Validé
    }
  });
  //Fonction vérifiant le Prénom au moment où on enlève le doigt de la touche
  $('#phone').keyup(function(){
    if(!regexPhone.test(this.value)){//Condition appliquant le test de la regex à la valeur de this.
      //Erreur
      $('#phone').css('border','1px solid red');//Changement de la couleur de la bordure de l'élément ciblé dans le html
      valid = false;//Refus de validation
    } else {
      //Correct
      $('#phone').css('border','1px solid green');//Changement de la couleur de la bordure de l'élément ciblé dans le html
      valid = true;//Validé
    }
  });
  //Fonction validant le formulaire
  $('#validate').click(function(){
    if(valid===false){
      alert('Des champs restent invalides, veuillez corriger votre saisie.')
    }else{
      alert('Validé ! Merci de votre contribution ! -$$$$$-')
    }
  });
})
