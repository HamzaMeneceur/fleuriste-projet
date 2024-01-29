# fleuriste-projet

## Les routes de mon API WEB

<details><summary>Categories</summary>

methode GET :

- Toute les categories : /categories
- Une categorie : /category/:id

methode POST :

- Ajout d'une categorie : /category

methode DELETE :

- Supprimer une categorie : /category/:id

methode PATCH :

- Modification d'une categorie : /category/:id

</details>

<details><summary>Articles</summary>

methode GET :

- Tout les articles et leurs catégories associé : /items
- Un article et sa catégories associé : /item/:id

methode POST :

- Ajout d'un article : /item

methode DELETE :

- Supprimer un article : /item/:id

methode PATCH :

- Modification d'un article : /item/:id

</details>

<details><summary>Gerer les associations</summary>

methode POST :

- Lié un article existant sur une catégorie : /item/:id/category/:catId

methode DELETE :

- Supprimé l'association entre article et catégorie : /item/:id/category/:catId

</details>

### En cours de production

Pour les images lié à la bdd de item.img, j'ai deux options ou je stock dans le static avec un chemin ex: /img/rose.jpg ou j'utilise multer.

<details><summary>Multer - Documentations</summary>
https://www.npmjs.com/package/multer
</details>
