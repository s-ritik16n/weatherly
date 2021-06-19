const express = require("express");
import { getWeather } from "./weather";
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/weather", (req, res) => {
    getWeather("gwalior").then((data) => {
        res.json({success: true, data})
    }).catch((err) => res.json({success: false, err}))
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});