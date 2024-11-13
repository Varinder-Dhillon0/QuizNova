const { create_workspace, get_workspaces, update_workspace, delete_workspace } = require("../controllers/workspace");

const router = require("express").Router();

router.post("/workspace/create" , create_workspace);
router.get("/workspace/get" , get_workspaces);
router.post("/workspace/update" , update_workspace);
router.post("/workspace/delete" , delete_workspace);

module.exports = router;