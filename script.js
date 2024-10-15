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
                    <div class="projet" data-nom="${post.nom}"> <!-- Ajout de data-nom -->
                        <h2>${post.nom}</h2>
                        <img class="img_projet" src="${post.photo}" alt="${post.nom}">
                        <p>Catégorie : ${post.categorie}</p>
                        <p class="description">Description : ${post.description}</p>
                    </div>
                `;
            });

            // Insérer le contenu dans le div avec l'ID 'contenu'
            $('#div-droite2').html(moncontenu);

            // Gestion du hover pour injecter le nom du projet
            $('.projet').hover(
                function() {
                    // Récupérer le nom du projet à partir de l'attribut data-nom
                    var nomProjet = $(this).data('nom');
                    // Récupérer la description à partir de l'élément avec la classe 'description'
                    var descProjet = $(this).find('.description').html();
                    $('.project-name').html(nomProjet); // Injecter le nom dans la div de gauche
                    $('.project-desc').html(descProjet); // Injecter la description dans la div de gauche
                },
                function() {
                    // Enlever le nom du projet quand la souris quitte
                    $('.project-name').html('');
                    $('.projet-desc').html('');
                }
            );

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


