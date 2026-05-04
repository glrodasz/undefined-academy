import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello Bootcamp JSON" });
});

app.get("/hello/:name", (req, res) => {
  res.json({ message: `Hello ${req.params.name}` });
});

app.get("/sum/:num1/:num2", (req, res) => {
  res.send(`${Number(req.params.num1) + Number(req.params.num2)}`);
});

// Middleware
app.use(express.json());

function fullnameMiddleware(req, res, next) {
  const { name, lastname } = req.body;
  if (!name || !lastname) {
    res.status(400).send("Falta el nombre o el apellido");
  }

  req.fullname = `${name} ${lastname}`;
  next();
}

app.get("/fullname", fullnameMiddleware, (req, res) => {
  const { name, lastname } = req.body;

  console.log(req.fullname);
  res.send(`Hello ${name} ${lastname}`);
});

app.get("/form", (req, res) => {
  console.log(req.query);
  res.send("OK!");
});

app.listen(3000, () => console.log("🌍 Server running on port 3000"));
