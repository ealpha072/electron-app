import express from "express";

const app = express()

app.get('/api/hello-world', (req, res) => {
    res.json('Hello world')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})