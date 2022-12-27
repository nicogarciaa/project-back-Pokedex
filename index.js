const express = require("express");
const pokemonRoutes = require("./routes/pokemon");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/", pokemonRoutes);

app.listen(1234, async () => {
  console.log("Server listening on http://localhost:1234");
});