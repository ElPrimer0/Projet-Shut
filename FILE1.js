// Fonction pour télécharger les pages de Google Books
function downloadGoogleBooksPages() {
    // Vérifie si nous sommes sur la page de Google Books
    if (!window.location.href.includes('books.google.')) {
        console.error('Ce script doit être exécuté sur une page de Google Books.');
        return;
    }

    // Attendez que la page soit complètement chargée
    setTimeout(() => {
        // Si le bouton de téléchargement est disponible, cliquez dessus
        const downloadButton = document.querySelector('button[jsname="c5jDZb"]');
        if (downloadButton) {
            downloadButton.click();
            console.log('Téléchargement du livre en cours...');
        } else {
            console.log('Le bouton de téléchargement n\'est pas disponible.');
        }

        // Capture d'écran de chaque page du livre
        const pages = document.querySelectorAll('.pageImageDisplay img');
        pages.forEach((page, index) => {
            // Crée un lien de téléchargement pour chaque page et simule un clic pour télécharger l'image
            const link = document.createElement('a');
            link.href = page.src;
            link.download = `page_${index + 1}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            console.log(`Page ${index + 1} téléchargée.`);
        });

        console.log('Téléchargement terminé.');
    }, 5000); // Attendre 5 secondes pour que la page soit complètement chargée
}

// Appel de la fonction pour démarrer le téléchargement des pages
downloadGoogleBooksPages();
