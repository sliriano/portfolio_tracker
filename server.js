const express = require("express");

const app = express();

const port = 3000;
const hostname = "localhost";

app.use(express.static("public_html"))

app.use(express.json());

app.get("/", function (req, res) { 

});

app.listen(port, hostname, () => {
	console.log(`Listening at: http://${hostname}:${port}`);
});