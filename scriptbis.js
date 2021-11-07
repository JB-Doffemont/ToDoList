function todolist() {
  /* Création des variables */

  // Récupération des éléments du DOM
  let inputAdd = document.querySelector(".inputAdd");
  let buttonAdd = document.querySelector(".buttonAdd");
  let listToDo = document.querySelector(".listToDo");
  let listDone = document.querySelector(".listDone");

  // Création d'un évènement au clique du bouton "add"
  buttonAdd.addEventListener("click", function () {
    // Création d'une liste qui récupère la valeur de l'input
    let childOfListToDo = document.createElement("li");
    childOfListToDo.innerText = inputAdd.value;

    // Création d'un bouton pour supprimer les éléments
    let cancelButton = document.createElement("Button");
    cancelButton.innerText = "Supprimer";

    // Création des éléments au sein de la liste
    listToDo.appendChild(childOfListToDo);
    // Création du bouton au sein la liste
    childOfListToDo.appendChild(cancelButton);

    // Réinitialisation de la valeur Input
    inputAdd.value = "";

    // Création d'un évènement au clique du bouton "cancel"
    cancelButton.addEventListener("click", function () {
      // Création d'une nouvelle liste
      let childOfListDone = childOfListToDo;
      // Création des éléments au sein de la nouvelle liste
      listDone.appendChild(childOfListDone);
      // Disparition du bouton "cancel"
      cancelButton.remove();
    });
  });
}

// Appel de la fonction
todolist();
