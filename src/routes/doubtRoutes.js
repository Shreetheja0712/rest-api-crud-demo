const express = require("express");
const router = express.Router();

const {
  createDoubt,
  getAllDoubts,
  getDoubtByID,
  updateDoubt,
  deleteDoubt,
} = require("../controllers/doubtController");

router.post("/", createDoubt);
router.get("/", getAllDoubts);
router.get("/:id", getDoubtByID);
router.put("/:id", updateDoubt);
router.delete("/:id", deleteDoubt);

module.exports = router;
