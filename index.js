const express = require("express")
const cors = require("cors")
require("dotenv").config()
const port = process.env.PORT || 8080
const app = express()
const getdatabase = require("./common/helpers/connect")

app.use(express.json())
app.use(cors())
getdatabase()

app.get("/", (req, res) => {
    res.send("hello world!")
})

app.listen(port, () => {
    console.log("app is listening on port:", port)
})