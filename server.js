import express from "express";

const PORT = process.env.PORT;
const app = express();

app.get("/color", (req, res) => {
	res.send("tomato");
})

app.listen(PORT, () => {
	console.log(`listen on http://localhost:${PORT}`)
})