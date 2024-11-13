const {getUsers,isSub} = require("../controller/user.controller");
const express = require("express");
const router = express.Router();

router.get("/",getUsers);
router.put("/",isSub);

module.exports = router;