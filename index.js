require('dotenv').config()
const express = require('express')

const PORT = process.env.PORT || 4000

const app = express()

app.get('/helo', (req, res)=>{
    res.json({
        message: `helo world = ${process.env.MY_NAME}`
    })
})

app.listen(PORT, ()=>{
    console.log(`server running in port ${PORT}`);
})

