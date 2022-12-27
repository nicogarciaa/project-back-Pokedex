
const express = require("express");
const router = express.Router();
const {
  getPokemon,
  agregarPokemon,
} = require("../controllers/pokemon");

router.get("/pokemon", getPokemon);
router.post("/pokemon", agregarPokemon);

module.exports = router;
