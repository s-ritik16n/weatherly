const express = require("express");
import { getWeather } from "./weather";
import cors from "cors";

require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.get("/weather/:location", (req, res) => {

    try {
        let location = req.params.location;
        if(location) {
            console.log("weather API called");
            getWeather(location, res);
        } else {
            res.send({success: false})
        }
    } catch (error) {
        console.log("error in weather[GET] - ", error);
        res.send({success: false, err})        
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});