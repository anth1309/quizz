document.addEventListener("DOMContentLoaded", function () {
  //Ouverture Contact
  const contact = document.querySelector(".openContact");
  const closedContact = document.getElementById("closedContact");
  const containerContact = document.querySelector(".container");

  closedContact.addEventListener("click", (e) => {
    e.preventDefault();
    containerContact.classList.remove("openContact");
  });

  contact.addEventListener("click", (e) => {
    e.preventDefault();
    containerContact.classList.add("openContact");
  });

  //ouverture mentions legales
  const mentionLegal = document.querySelector(".openMention");
  const closed = document.getElementById("closed");
  const container = document.querySelector(".container");

  closed.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.remove("openMentions");
  });

  mentionLegal.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.add("openMentions");
  });

  //Validation nb rep juste ou fausse
  {
    var boutonValidation = document.getElementById("validation");
    var arrayRep = [
      "question1",
      "question2",
      "question3",
      "question4",
      "question5",
      "question6",
      "question7",
      "question8",
      "question9",
      "question10",
    ];
    boutonValidation.addEventListener("click", function () {
      const trueanswer = [1, 2, 2, 3, 3, 2, 3, 3, 3, 1];
      const container = document.getElementsByClassName("container");
      const espaceMessage = document.getElementById("resultatNote");
      var reponse1Eleve = document.querySelectorAll("input:checked");
      let note = 0;
      for (i = 0; i < 10; i++) {
        var reponseEleve = reponse1Eleve.item(i);
        if (reponseEleve.value == trueanswer[i]) {
          console.log("question " + arrayRep[i] + "   ok");
          note = note + 1;

          //document.getElementsByClassName("answer").classList.add("juste");
          espaceMessage.innerHTML = `Vous avez obtenu la note de ${note}/10`;
        } else {
          console.log("question " + arrayRep[i] + "   nmauvais");
        }
      }
    });

    //activation boutton soumettre

    var boutonValidation = document.getElementById("validation");
    var array = [
      "question1",
      "question2",
      "question3",
      "question4",
      "question5",
      "question6",
      "question7",
      "question8",
      "question9",
      "question10",
    ];
    let compteur = 0;
    var nombreReponse = document.querySelectorAll("section input");
    nombreReponse.forEach((e) => {
      e.addEventListener("click", function () {
        // alert("ppyt  " + e.name);
        for (i = 0; i < 10; i++) {
          if (e.name === array[i]) {
            delete array[i];
            compteur = compteur + 1;
          }
          if (compteur == 10) {
            boutonValidation.disabled = false;
          }
        }
      });
    });
  }
});

for (i = 0; i < 10; i++) {
  var nombreTotalReponse = nombreReponse;
  nombreTotalReponse.forEach((e) => {
    e.addEventListener("click", function () {
      nombreTotalReponse = nombreTotalReponse + 1;
      console.log("nb " + nombreTotalReponse.value);
      console.log("ppp   " + questionEleve);
      if (nombreTotalReponse == 10) {
        boutonValidation.disabled = false;
      }
    });
  });
}
// });
//  reponsesq2.forEach((e) => {
//    e.addEventListener("click", function () {
//      q2 = true;
//      verifquestionnaire();
//    });
//  });
