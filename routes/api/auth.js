const express = require("express");
const router = express.Router();
const { validateBody } = require("../../midlewares");
const { schemas } = require("../../models/users");
const ctrl = require("../../controllers/auth");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

module.exports = router;
