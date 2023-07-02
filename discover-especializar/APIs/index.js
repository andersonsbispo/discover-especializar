const express = require("express");

const app = express();

app.listen("3000");

let author = "Anderson";

//middleware
app.use(express.json());

//Get
app.route("/").get((req, res) => res.send(author));

//Post
app.route("/").post((req, res) => res.send(req.body));

//Put
app.route("/").put((req, res) => {
    author = req.body.author;
    res.send(author);
});

//Delete
app.route("/:identificador").delete((req, res) => {
    res.send(req.params.identificador);
});