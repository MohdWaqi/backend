const express = require("express");
const router = new express.Router();
const controllers = require("../Controllers/productControllers");
const userControllers = require("../Controllers/userControllers");
const logoutControllers = require("../Controllers/logoutController");

router.post("/add", controllers.addProduct);

router.get("/", controllers.getAllProducts);

router.get("/edit/:id", controllers.getSingleProduct);

router.put("/edit/:id", controllers.updateProduct);

router.delete("/delete/:id", controllers.deleteProduct);

router.post("/add_user", userControllers.addUser);

router.post("/validate_user", userControllers.loginUser);

router.get("/logout",logoutControllers.handleLogout);

module.exports = router;
