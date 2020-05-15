# Legal Tech

#### Généralités
La mise en place de ce projet découle d’un impératif important : <strong>la nécessité pour le barreau de la Guinée de saisir                                        l’opportunité du web</strong>.<br />
En tant qu’étudiants et citoyens, il nous arrive souvent d’avoir besoin d’informations sur la vie de certaines
institutions politiques et juridiques. Dans bien des cas, il se trouve que l’accessibilité à l’information est
difficile car les moteurs de recherches ne sont pas fournis en information sur ces sujets.
C’est le cas avec le barreau qui absent sur le net, pourrait fortement rehausser sa présence et
mettre en évidence son importance dans le fonctionnement du paysage juridique de la Guinée en s’intéressant à une
communication digitale que ce projet peut lui
garantir. <br />
De plus, à l’ère de l’internet, il y va du crédit des plus grandes institutions d’avoir des
supports de communication efficaces et accessibles au maximum de personne à travers le monde.
Là est donc tout l’intérêt de ce projet.

#### Produit final
Le site doit être super interactif avec :
- [ ] Une ou des bibliothèques pour ajouter les lois et autres documents du barreau
- [ ] Une vidéothèque pour diffuser les différentes activités du barreau et animer même la page
- [ ] Une partie publicitaire au cas où les membres du barreau auraient des publications (livres, page personnelle…)
- [ ] Un « blog » pour les différents articles

Le site pourra avoir les rubriques suivantes :
- [ ] Navigation : comment naviguer sur le site pour permettre aux différents utilisateurs de s’orienter avec plus d’aisance
- [ ] Barreau : dans cette partie il y’aura une section « profession d’avocat », une section présentation du barreau, une section « anciens bâtonniers »
- [ ] Tableau : cette partie contiendra la liste des avocats régulièrement inscrit au barreau
- [ ] Actualités : il y’aura l’actualité du barreau de guinée en première section et en dernière section l’actualité des barreaux étrangers
- [ ] Animation : ce sera une rubrique essentiellement consacrée à « l’éducation juridique ». Les membres du barreau pourront faire des vidéos ou articles pour parler de certaines questions par exemple.

#### Réalisation
Ce projet sera divisé en plusieurs sites webs chargés de fonctionner ensemble, on aura:
- [ ] Un espace d'administration pour la gestion du site
- [ ] Un espace privé pour les avocats qui pourront modifier leurs informations ou ajouter des articles sur le blog
- [ ] Un blog pour les articles
- [ ] Un site web pour afficher l'annuaire d'avocats, la vidéothèque et tous les éléments cités en haut

##### Organisation de l'API
On divisera l'api en plusieurs microservices basés sur `graphql` et `apollo federation`, pour le moment on a ces services:
- <strong>droits</strong>: pour la gestion des différents type de droits
- <strong>lois</strong>: s'occupe des lois
- <strong>utilisateurs</strong>: gestion de l'authentification, de l'autorisation et des données personnelles
- <strong>notifications</strong>: gestion des notifications au sein de la plateforme
- <strong>articles</strong>: gestion du contenu pour le blog
- <strong>publicites</strong>: gestion des publicités
- <strong>videos</strong>: gestion de la vidéothèque

###### Base de données et cache
On utilisera `postgresql` comme système de base de données et on ajoutera `redis` pour le cache.
Il n'y aura qu'une seule base de données pour plus de simplicité, j'ai pensé à séparer les données
relatives au blog des données personnelles mais ce serait ajouter plus de complexité. <br />
En vrai je réflechis encore sur la question.

##### Plateformes
Les plateformes web seront faites avec `Vue` en majorité et potentiellement avec `React` aussi. Je prévois d'utiliser
`Bulma CSS` pour les espaces d'administration et avocats puis `Tailwind CSS`pour le site et le blog. <br />
Le blog et le site fonctionneront avec `Nuxt js` pour améliorer le SEO mais les espaces d'aministration seront
single page.

##
<strong>Ca va être trop cool! Let's go</strong> 
