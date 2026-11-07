const express = require("express")
const app = express();
const port = 3000

app.get("/", (req, res) => {
    res.send("back berjalan")
})

app.listen(port, () => {
    console.log(`PORT INI BERJALAN PADA  http://localhost:${port}`)
})