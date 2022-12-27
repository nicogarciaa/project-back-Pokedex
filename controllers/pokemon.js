const { Pool } = require("pg");

const pool = new Pool({
  user: "pokemon",
  database: "Pokemon",
  password: "123456",
});

exports.getPokemon = async (req, res) => {
  const { rows } = await pool.query(
    "SELECT * FROM public.pokemon"
  );
  res.send(rows);
}

exports.agregarPokemon = async (req, res) => {
  const {
    nombre,
    ID,
    imagen,
  } = req.body;

  await pool.query(
    'INSERT INTO public.pokemon("ID", nombre, imagen) VALUES ($1, $2, $3)',
    [ID, nombre, imagen]
  );

  res.json({ success: true });
};
