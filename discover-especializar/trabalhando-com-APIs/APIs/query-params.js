const express = require("express");

const app = express();

app.listen("3000");

//middleware
app.use(express.json());

//Query Params
app.route("/").get((req, res) => res.send(req.query.nome));

app.route("/about/user").get((req, res) => res.send(req.query));