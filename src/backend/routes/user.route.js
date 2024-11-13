const {getUsers,isSub,addUser} = require("../controller/user.controller");
const express = require("express");
const router = express.Router();

router.get("/",getUsers);
router.put("/",isSub);
router.post("/",addUser);

module.exports = router;