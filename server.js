import express from "express";

const app = express()

app.get('/api/hello-world', (req, res) => {
    res.json('Hello world')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Server listeniong on port ${PORT}`)
})