const express = require("express");

const router = express.Router();

router.post("/getprices", (req, res) => {
  console.log(req.body);
  res.status(200).end();
});

module.exports = router;