const http = require("https");
require('dotenv').config();

export const getWeather = async (query, res) => {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
    let p = new Promise((resolve, reject) => {
        try {
            const options = {
                "method": "GET",
                "hostname": "community-open-weather-map.p.rapidapi.com",
                "port": null,
                "path": `/find?q=${query}&cnt=50&mode=null&lon=0&type=link%2C%20like&lat=0&units=metric`,
                "headers": {
                    "x-rapidapi-key": process.env.XRAPIDAPIKEY.toString(),
                    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                    "useQueryString": true
                }
            };
        
            let req = http.request(options, function (res) {
                const chunks = [];
            
                res.on("data", function (chunk) {
                    chunks.push(chunk);
                });
            
                res.on("end", function () {
                    const body = Buffer.concat(chunks);
                    resolve(body.toString())
                });

                res.on("error", function() {
                    console.log("error");
                    resolve("error")
                })
            });
    
            req.end();
        } catch (error) {
            console.log("error in getWeather - ", error);
            reject(error);
        }
    })
    try {
        let result = await p;
        console.log("result - ", typeof JSON.parse(result));
        res.send({success: true, data: JSON.parse(result)})
    } catch (error) {
        res.send({success: false})
    }
}



