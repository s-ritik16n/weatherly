const express = require("express");
import { getWeather } from "./weather";
import cors from "cors";

require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.get("/weather", (req, res) => {
    console.log("weather API called");
    try {
        getWeather("gwalior", res);
    } catch (error) {
        console.log("error - ", error);
        res.send({success: false, err})
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});