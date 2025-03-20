let express = require("express")

let app = express()

let PORT = 8002

app.get('/', (req, res) => {
    res.send({ status: 1, msg: "Home page API" })
})

app.listen(PORT)

// 1 hour 12 min