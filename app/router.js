const { Router } = require('express');
const { categoryController, itemController } = require('./controllers')
const router = Router();
// ! API WEB
// Toute les categories
router.get('/categories', categoryController.getAllCategories);
// Recuperation d'une category
router.get('/category/:id', categoryController.getOneCategory);
// Ajout d'une category
router.post('/category', categoryController.createCategory);
// suppression d'une category
router.delete('/category/:id', categoryController.deleteCategory);
// Modification d'une category
router.patch('/category/:id', categoryController.updateCategory);

// Tout les items ainsi que les categories associer
router.get('/items', itemController.getAllItems);
// Un item et sa catégory
router.get('/item/:id', itemController.getOneItem);
// ajout d'un item
router.post('/item', itemController.createItem);
// Suppression d'un item
router.delete('/item/:id', itemController.deleteItem);
// Modification d'un item
router.patch('/item/:id', itemController.updateItem);

// Associé un item sur une catégory
router.post('/item/:id/category/:catId', itemController.linkOfItemCategory)
// Suprimer l'association ciblé
router.delete('/item/:id/category/:catId', itemController.deleteOfItemCategory)
module.exports = router