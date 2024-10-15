$(document).ready(function() {

    

    var url = 'https://claire.techniques-graphiques.be/exo_json_sql/';
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function(data) {
            console.log(data);
            var moncontenu = ''; // Conteneur pour stocker l'HTML généré

            // Boucler sur chaque élément (projet) de 'data'
            $.each(data, function(index, post) {

                // Construire l'HTML pour chaque projet, par exemple avec son 'nom' et 'categorie'
                moncontenu += `
                    <div class="projet">
                        <h2>${post.nom}</h2>
                        <img class="img_projet" src="${post.photo}" alt="${post.nom}">
                        <p>Catégorie : ${post.categorie}</p>
                        <p>Description : ${post.description}</p>
                    </div>
                `;
            });

            // Insérer le contenu dans le div avec l'ID 'contenu'
            $('#div-droite2').html(moncontenu);

            // Initialiser ScrollTrigger uniquement après avoir ajouté le contenu
            gsap.registerPlugin(ScrollTrigger);

            ScrollTrigger.create({
                trigger: "#div-gauche2",
                pin: true,
                startTrigger: "#div-droite2",
                start: "top top",
                endTrigger: "#div-droite2",
                end: "bottom bottom",
                markers: true
            });

            ScrollTrigger.create({
                trigger: "#div-gauche3",
                pin: true,
                startTrigger: "#div-droite3",
                start: "top top",
                endTrigger: "#div-droite3",
                end: "bottom bottom",
                markers: true
            });

            // Rafraîchir ScrollTrigger pour prendre en compte les nouveaux contenus
            ScrollTrigger.refresh();

        }, // fin success

        error: function() {
            alert('An error occurred while loading content.');
        } // fin error
    }); // fin ajax

   
    

}); // fin ready


