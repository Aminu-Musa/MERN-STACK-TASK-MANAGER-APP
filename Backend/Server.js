const express = require("express")
const app = express()

const PORT = process.env.PORT || 5000

app.get("/", (req, res)=>{
    res.send("From Backend")
})







app.listen(PORT, ()=>{
console.log(`server running on http://localhost:${PORT}`);
})



