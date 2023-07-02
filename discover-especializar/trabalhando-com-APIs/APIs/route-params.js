const express = require("express");

const app = express();

app.listen("3000");

//middleware
app.use(express.json());

//Route Params
app.route("/").get((req, res) => res.send("Oi"));

app.route("/:variavel").get((req, res) => res.send(req.params.variavel));

app.route("/identidade/:variavel").get((req, res) => res.send(req.params.identidade));