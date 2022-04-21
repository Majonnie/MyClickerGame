# My Clicker Game - XTREM CATFISHER 2 REBORN

Jeu consistant à obtenir un maximum de ressources en cliquant répétitivement sur un bouton et en achetant des améliorations.

* Lancement du projet : ouvrez simplement le fichier `index.html`
* Principe du jeu :
    - Lorsque vous commencez le jeu, vous n'avez ni poissons, ni minous. Si vous cliquez sur le gros poisson central, vous obtiendrez un poisson par clic.
    - Le but du jeu est d'obtenir le plus de poissons possible (durée de vie infinie).
    - Pour ce faire, en plus de cliquer sur le gros poisson central, vous devrez acheter des minions au fur et à mesure. Leur prix (en poissons), leur effet et le nombre que vous possédez est noté sur leur fiche dans le magasin en bas à droite.<br>
    --> Le premier minion (Cat hand) augmentera le nombre de poissons que vous gagnerez par clic, tandis que les autres minions augmenteront ceux que vous gagnerez par secondes.
    - Bonus :
      - Parfois, un poisson volant apparaitra en haut de l'écran de jeu et le traversera de droite à gauche. Si vous parvenez à cliquer dessus, il vous donnera un nombre de poissons égal à 500 fois la valeur de votre clic (par exemple, si vous obtenez 10 poissons à chaque fois que vous cliquez sur le gros poisson central, ce bonus vous donnera 5000 poissons) ;
      - Le bouton **BOOST** vous permettra d'obtenir un bonus pendant 30 secondes. Vous pouvez l'utiliser toutes les 300 secondes.

* Sauvegarde :
  - Votre partie (poissons obtenus, minous achetés et leurs effets) est sauvegardée automatiquement à chaque seconde.
  En rechargeant la page ou en revenant sur le jeu bien plus tard, vous retrouverez donc votre partie telle qu'elle était.
  - Pour supprimer votre sauvegarde, et donc recommencer le jeu depuis le début, vous êtes obligés de passer par une manipulation relativement compliquée. Il vous faudra :
    1) Accéder au mode développeur de votre navigateur ;
    2) Dans l'onglet Application, accéder au Local Storage ;
    3) Rapidement (moins d'une seconde pour éviter que la sauvegarde automatique ait lieu au même moment) supprimer l'unique fichier du Local Storage (clic droit + clear) et actualiser la page.
   