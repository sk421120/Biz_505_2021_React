const express = require("express");
const router = express.Router();

const bucket = {
  b_id: "String",
  b_flag: 0,
  b_start_date: "String",
  b_title: "String",
  b_end_date: "String",
  b_end_check: false,
  b_cancel: false,
};

router.get("/", (req, res) => {
  res.render("index", { title: "HELLO API" });
});

router.get("/getlist", (req, res) => {
  res.json(bucket);
  console.table(bucket);
});

router.get("/cancel/:id", (req, res) => {
  let { id } = req.params;
  const cancelBucket = { ...bucket, b_id: id };
  res.render("index", { title: "CANCEL API" });
  console.table(cancelBucket);
});

router.get("/update/:id/:title", (req, res) => {
  let { id, title } = req.params;
  const updateBucket = { ...bucket, b_id: id, b_title: title };
  res.render("index", { title: "UPDATE API" });
  console.table(updateBucket);
});

module.exports = router;
