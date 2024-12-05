document
  .getElementById("bankForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    let code = document.getElementById("code").value;
    let [year, month, day] = dob.split("-");
    dob = `${day}/${month}/${year}`;

    // Validation des champs
    if (nom.length < 3 || prenom.length < 3) {
      alert("Le nom et le prénom doivent contenir au moins 3 caractères");
      return;
    }

    const datePattern =
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;
    if (!datePattern.test(dob)) {
      alert("La date doit être au format jj/mm/aaaa");
      return;
    }

    const codePattern = /^[A-Z]{2}\d{5}[A-Z]{3}x$/;
    if (!codePattern.test(code)) {
      alert(
        "Le code confidentiel doit suivre le format FR : 2 lettres majuscules suivies de 5 chiffres, puis 3 lettres majuscules et se termine par x"
      );
      return;
    }

    // Affiche le modal
    let successModal = new bootstrap.Modal(
      document.getElementById("successModal")
    );
    successModal.show();
  });

// Ferme le modal
document.querySelector(".btn-close").addEventListener("click", function () {
  document.getElementById("successModal").style.display = "none";
});
