# Organisation du site

Le site comporte deux layouts principaux.
- Un pour l'utilisateur connecté
- Un pour celui qui n'est pas connecté

Le layout par défaut est celui avec l'utilisateur connecté.

## Accès au site
La première page du site web correspond à la page d'inscription, avec un lien qui permet d'attérir sur la page de connexion.

#### Inscription
Pour l'inscription, on aura un formulaire qui contient ces informations: <br />
```
    email:      { type: email },
    password:   { type: password },
    firstName:  { type: text }
    lastName:   { type: text }
    avatar:     { type: file }
    description: { type: textarea }
```

Ces champs seront à remplir obligatoirement, et des messages d'erreurs doivent être afficher en bas de chacun d'eux si ce n'est pas correctement rempli.
##### Règles
Mot de passe: Il doit contenir au moins 8 caractères, sans les espaces.

##### Connexion
La connexion nécessite juste l'adresse email et le mot de passe.

### Espace avocat

Après la connexion, l'avocat est rédirigé sur son tableau de bord organisé comme suit: <br />
On a trois principaux blocs verticaux.
1. La barre de navigation
2. La seconde barre de navigation
3. Le contenu de la page

##### Details
###### La barre de navigation
Pour le moment elle ne contient que l'image de profil de l'avocat

###### La seconde barre de navigation
Elle contient trois rubriques qui sont:
1. Ecrire un billet (qui renvoie vers un formulaire pour écrire un article)
2. Rendez-vous (qui renvoie vers une page qui affiche la liste des rdv de l'avocat)
3. Formations (qui renvoie vers une page affichant les formations et séminaires qui approchent)

###### Le contenu de la page
Le contenu de la page est divisé en deux parties
. Une premiere partie qui affiche les informations de l'utilisateur
1. Mes informations (qui affiche la page des informations de l'utilisateur)
2. Mon contact (qui permet de modifier le contact de l'utilisateur)
3. Mes formations (qui permet de modifier le parcours scolaire de l'utilisateur)
4. Ma carrière (qui permet de modifier l'entreprise où travaille l'avocat)
et un menu qui contient ces liens ci-dessous:
1. Notifications
2. Billets
    2.1 Publiés
    2.2 En attente
3. Services
4. Contact
5. Déconnexion
