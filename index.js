const express = require("express");
const userRouter = require("./src/router/user.router");
const barangRouter = require("./src/router/barang.router");
const app = express();
const port = 3000
app.use(express.json())
require("dotenv").config()
app.get("/", (req, res) => {
    res.send("back berjalan")
})

// users
app.use("/api", userRouter)
app.use("/api", barangRouter)

app.listen(port, () => {
    console.log(`PORT INI BERJALAN PADA  http://localhost:${port}`)
})