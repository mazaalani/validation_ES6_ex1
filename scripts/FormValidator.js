export default class FormValidator {
  validerChamps = () => {
    // Récupérer les champs à valider :
    this._inputs = this._eForm.getElementsByTagName("input");
    this._radio = this._eForm.querySelectorAll("[type=radio]");
    this._courriel = this._eForm.querySelector("[type=email]");
    this._champsErr = this._eForm.querySelectorAll("[data-js-error-msg]");

    //  - Champs required
    for (let champ of this._inputs) {
      console.log(champ);
      let msgErr = champ.parentNode.querySelector("[data-js-error-msg]");
      if (champ.value.trim() == "") {
        msgErr.innerHTML = `Le champ ${champ.name} est obligatoire.`;
        champ.parentNode.classList.add("error");
      } else {
        msgErr.innerHTML = ``;
        champ.parentNode.classList.remove("error");
      }
    }
    //  - Champs radio required
    for (let champ of this._radio) {
      let msgErr = champ.parentNode.querySelector("[data-js-error-msg]");
      if (champ.checked == true) {
        msgErr.innerHTML = ``;
        champ.parentNode.classList.remove("error");
        break;
      } else {
        msgErr.innerHTML = `Une oprion Àge doit étre séléctionnée.`;
        champ.parentNode.classList.add("error");
      }
    }

    //  - Champs courriel
    if (this._courriel.value) {
      let emailErr = this._courriel.parentNode.querySelector(
        "[data-js-error-msg]"
      );
      RegExp = /(.+)@(.+){1,}\.(.+){1,}/;
      if (!RegExp.test(this._courriel.value)) {
        emailErr.innerHTML = `L'adresse courriel choisie est invalide.`;
        emailErr.parentNode.classList.add("error");
      } else emailErr.innerHTML = ``;
    }

    // Initiatialiser _isValid à true
    this._idValid = true;
    // Faire la poutine de validation et la gestion d'affichage des messages d'erreurs
    this._champsErr.forEach((champ) => {
      champ.classList.add("error");
      champ.classList.add("error-message");
      if (champ.innerHTML != "") this._idValid = false;
    });
    // Setter isValid
    if (this._idValid == true) return "Merci";
  };
}
