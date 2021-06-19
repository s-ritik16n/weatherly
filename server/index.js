const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/weather", (req, res) => {
    res.json({success: true, data: "done"});
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});