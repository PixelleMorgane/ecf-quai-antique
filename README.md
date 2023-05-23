# ecf-quai-antique

Pour installer le site en local :

Télécharger le dossier du projet sur votre ordinateur

Ouvrez le projet avec votre éditeur de code 

Dans votre éditeur de code utiliser une extension qui vous permet d'écrire du SQL, toute les commandes SQL dont vous avez besoin pour créer votre base sont dans back > BDD.sql

Dans le dossier back > src créer un fichier .env.local

Dans ce fichier renseignez les variables d'environnement :
PORT=5000
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=

Ouvrez deux terminaux dans votre éditeur de code

 1 pour le front (dans ce terminal tapez les commandes suivantes) :
 
  cd back

  set -a

  source ./src/.env.local

  npm (ou yarn) run dev


1 pour le front (dans ce terminal tapez les commandes suivantes) :
 
  cd front

  npm (ou yarn) run start


Pour créer un administrateur en local il faut tout d'abord créer un utilisateur via le formulaire d'inscription.
Vérifier que l'utilisateur se trouve en BDD.
Pour donner le role d'administrateur à votre utilisateur entrer la commande SQL suivante :
UPDATE users SET is_admin = 1 WHERE id = 'entrez l\'id de votre utilisateur';
