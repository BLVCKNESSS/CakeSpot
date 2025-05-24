const navbar=document.getElementById("burge");
const afficheBurg=document.getElementById("burgeur");
const masqueBurg=document.getElementById("burgeur");

afficheBurg.addEventListener("click",()=>{
    // navbar.classList.toggle ("visible");
    navbar.classList.toggle ("display");

});

// masqueBurg.addEventListener("click",()=>{
//     navbar.classList.toggle ("masque");
// });

/*************************************************************************************************************/
// pour envoyer les infos d'un formulaire via whatsapp

  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupérer les données du formulaire
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const message = document.getElementById('message').value;

    // Créer le message à envoyer
    const text = `Bonjour, je m'appelle ${name} ${surname}. Mon email est ${email} et mon numero est le ${telephone}. Mon message est le suivant: ${message}`;
    const phoneNumber = "+237686019392"; // Remplace par le numéro WhatsApp (sans le +)

    // Créer l'URL WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    // Rediriger vers WhatsApp
    window.open(url, '_blank');
  });

  
