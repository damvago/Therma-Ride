document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Récupérer les valeurs du formulaire
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("responseMessage").textContent = "Merci " + name + ", votre message a été envoyé avec succès!";
        document.getElementById("responseMessage").style.color = "green";
        document.getElementById("contactForm").reset(); 
    } else {
        document.getElementById("responseMessage").textContent = "Veuillez remplir tous les champs.";
        document.getElementById("responseMessage").style.color = "red";
    }
});
