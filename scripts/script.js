import Formulaire from "./Formulaire.js";
(() => {
  //elements du DOM
  let eDivForm = document.querySelectorAll("[data-js-form]");

  eDivForm.forEach((element) => {
    new Formulaire(element);
  });
})();
