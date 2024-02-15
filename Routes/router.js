const express = require("express");
const router = new express.Router();
const controllers = require("../Controllers/productControllers");
const userControllers = require("../Controllers/userControllers");
const logoutControllers = require("../Controllers/logoutController");
const verifyJwt = require("../middleware/verifyJWT");
const { handleRefreshToken } = require("../Controllers/refreshTokenController");

router.post("/add",verifyJwt, controllers.addProduct);

router.get("/", controllers.getAllProducts);

router.get("/edit/:id", controllers.getSingleProduct);

router.put("/edit/:id",verifyJwt, controllers.updateProduct);

router.delete("/delete/:id", verifyJwt, controllers.deleteProduct);

router.post("/add_user", userControllers.addUser);

router.post("/validate_user", userControllers.loginUser);

router.get("/logout", logoutControllers.handleLogout);

router.get("/refresh", handleRefreshToken)

module.exports = router;
