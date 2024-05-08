## Projet-Shut / FILE1

Ce script JavaScript permet de télécharger automatiquement des pages de prévisualisation de Google Books. Il utilise des techniques d'interaction avec le Document Object Model (DOM) pour détecter et télécharger des images de pages de livres affichées dans la prévisualisation de Google Books.

## Fonctionnement

- Le script vérifie si l'utilisateur se trouve sur une page Google Books.
- Il attend que la page soit complètement chargée avant de commencer l'opération.
- Le script tente d'activer le bouton de téléchargement s'il est disponible.
- Il capture les images des pages de prévisualisation et crée des liens pour télécharger chaque image.
- Le script simule des clics sur ces liens pour initier le téléchargement des images des pages.

## Comment utiliser le script

1. Ouvrez la console JavaScript dans votre navigateur (par exemple, dans Chrome, utilisez `Ctrl + Maj + J`).
2. Copiez le code du script.
3. Assurez-vous d'être sur une page Google Books où un livre est en prévisualisation. Par exemple celle-la :
4. 
   https://books.google.cd/books?id=dig2DwAAQBAJ&printsec=frontcover&hl=fr&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false
   
6. Collez le code dans la console et appuyez sur `Entrée`.
7. Le script commencera à télécharger les images des pages de prévisualisation.
8. Une fois terminé, il affichera un message indiquant que le téléchargement est terminé.

## Soucis
Seulement les deux premieres pages sont telechargees. 


## Projet-Shut / FILE2

Ce script JavaScript automatise le téléchargement des pages de prévisualisation de Google Books. Le script utilise des techniques d'observation des mutations (MutationObserver) pour détecter et capturer des images des pages de prévisualisation, ainsi qu'un mécanisme de défilement automatique pour parcourir le contenu de Google Books.

## Fonctionnalités
- Observateur de mutations pour détecter les changements dans la prévisualisation des pages.
- Défilement automatique pour charger des images de pages supplémentaires.
- Téléchargement automatique des images des pages détectées.
- Interface simple avec des fonctions `start` et `finish`.

## Comment utiliser le script
1. **Ouvrir la Console JavaScript**:
   - Ouvrez votre navigateur (comme Chrome) et accédez à la console JavaScript (`Ctrl + Maj + J` sur Windows, `Cmd + Opt + J` sur Mac).
2. **Collez le Script**:
   - Copiez le code du script dans la console.
3. **Démarrer le Téléchargement**:
   - Assurez-vous d'être sur une page Google Books où un livre est en prévisualisation. Par exemple celle-la :
   - 
     https://books.google.cd/books?id=dig2DwAAQBAJ&printsec=frontcover&hl=fr&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false
     
   - Tapez `gbppd.start()` dans la console et appuyez sur `Entrée`. Cela commencera l'observation des mutations et le défilement automatique.
4. **Terminer et Télécharger**:
   - Lorsque vous souhaitez arrêter et commencer le téléchargement des images des pages capturées, tapez `gbppd.finish()` dans la console et appuyez sur `Entrée`.
   - Cela ouvrira un nouvel onglet avec des liens pour télécharger les images des pages détectées.
## Soucis
Les images sont mal numerotees, certaiees se repetent et des fichiers .htm apparaissent. 



