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
  const answer = document.querySelector("answer");
  var boutonValidation = document.getElementById("validation");

  boutonValidation.addEventListener("click", function () {
    const trueanswer = [1, 2, 2, 3, 3, 2, 3, 3, 3, 1];
    const espaceMessage = document.getElementById("resultatNote");
    var reponse1Eleve = document.querySelectorAll("input:checked");
    const visibleCorrection = document.querySelectorAll("section");
    //visibleCorrection.classList.add("visibleCorrection");
    //const reponseFausses = [];
    let note = 0;
    for (i = 0; i < 10; i++) {
      var reponseEleve = reponse1Eleve.item(i);

      if (reponseEleve.value == trueanswer[i]) {
        note = note + 1;
        reponseEleve.classList.add("juste");
        // console.log(reponseEleve.name);

        //console.log(section.id);
        //reponseEleve.classList.add("visibleCorrection");

        espaceMessage.innerHTML = `Vous avez obtenu la note de ${note}/10`;
        window.scrollTo(00, 00);
      } else {
        reponseEleve.classList.add("fausse");
        //reponseFausses.push(reponseEleve.name);
      }

      //for (let reponseFausse of reponseFausses) {
      //console.log((id = reponseFausse));
      //}
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
});
