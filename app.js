const express = require("express");
const cors = require("cors");
const dotEnv= require("dotenv");

const app = express();
const port = 3000;

app.use(cors());
app.listen(port, ()=>{
    console.log(`SERVER CORRIENDO EN PUERTO ${port}`)
})