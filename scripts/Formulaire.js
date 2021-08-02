import FormValidator from "./FormValidator.js";

export default class Formulaire extends FormValidator {
  // Récupérer le formulaire et champs nécessaires
  constructor(eDivForm) {
    super();
    this._eDivForm = eDivForm;
    this._btn = this._eDivForm.querySelector("[data-js-submit]");
    this._eForm = this._eDivForm.querySelector("form");
    this._inputsDiv = this._eDivForm.querySelectorAll(
      "[data-js-input-wrapper]"
    );
    this._eThank = this._eDivForm.querySelector("[data-js-thank]");

    this.init();
  }

  // Gestion du clic du bouton data-js-submit
  init = () => {
    this._btn.addEventListener("click", (e) => {
      e.preventDefault();
      // Appel de la classe FormValidation
      if (this.validerChamps()) this.direMerci();
    });
  };

  // Si valide, gestion du message 'Merci !'
  direMerci = () => {
    this._eForm.classList.add("hidden");
    this._eThank.classList.toggle("thank--hidden");
  };
}
