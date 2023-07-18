const router = require("express").Router();
const Controller = require("../controlls/control");


router.get("/", Controller.home);
router.post("/", Controller.homePost);
router.get("/:id", Controller.IdPost);
router.delete("/:id", Controller.DeletePost);
router.patch('/:id',Controller.UpdatePost)


module.exports = router;
