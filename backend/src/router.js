const express = require("express");
const multer = require("multer");

const upload = multer({ dest: "public/uploads/" });
const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const magasinControllers = require("./controllers/magasinControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

// Route to get a list of bornes
router.get("/magasins", magasinControllers.browse);

// Route pour ajouter le fichier csv
router.post("/uploads", upload.single("file"), magasinControllers.add);
/* ************************************************************************* */

module.exports = router;
