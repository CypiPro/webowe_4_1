"use strict";

const express = require("express");
const app = express();

// define endpoint for exercise 1 here

app.get("/math/circle/:r", (req, res) => {
  const r = parseFloat(req.params.r);

  const pole = (Math.PI * r * r).toFixed(2);
  const obwud = (2 * Math.PI * r).toFixed(2);

  const result = {
    area: pole,
    circumference: obwud,
  };

  res.json(result);
});

//TODO2

//TODO3

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
