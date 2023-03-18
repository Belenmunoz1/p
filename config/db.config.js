const db = require ("mysql2-promise")();
const dotEnv = require("dotenv");

('dotEnv').config();

const config = {
    host : process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,

}

db.configure(config)

module.exports=db