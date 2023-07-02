const express = require("express");

const app = express();

app.listen("3000");

//middleware
app.use(express.json());

//Body Params
app.route("/").post((req, res) => {
    const {
        nome, cidade
    } = req.body;
    res.send(`Meu nome é ${nome}, e minha cidade é ${cidade}`);
});