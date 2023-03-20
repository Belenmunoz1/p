const express = require("express");
const cors = require("cors");
const dotEnv= require("dotenv");
const morgan = require("morgan");

const assetsRouter = require ("./routes/assetsRoutes");
const employeesRouter = require ("./routes/employeesRoutes");

// declaro varibles
const app = express();
const port = process.env.API_PORT || 3000;

app.use(morgan("dev"));
// middleware para resolver error cors
app.use(cors());

//middleware para recibir en formato jsno
app.use(express.json({limit:"50mb"}));

// end point inicial 
app.use("/api/assets", assetsRouter); 
app.use("/api/employees", employeesRouter); 

// ruta no enontrada
app.set("title", "page not found, Error 404");
app.get("/*", (req, res) => {
  res.send(app.get("title"));
});





app.listen(port, ()=>{
    console.log(`SERVER CORRIENDO EN PUERTO ${port}`)
})

