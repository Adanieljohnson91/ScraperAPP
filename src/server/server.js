var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
const port = 5000;

app.get('/', (req, res) => {
   res.send("Hit local host")
    
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
