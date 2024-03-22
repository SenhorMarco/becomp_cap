const express = require('express');

const app = express();

app.use(express.static(__dirname + '/sem1'))
app.use(express.static(__dirname + '/sem2'))

app.listen(3000, () => console.log("Vivo"));
