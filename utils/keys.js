require('dotenv').config();

const {DB_NAME, DB_PORT} = process.env;

module.exports = {
    DB_NAME,
    DB_PORT
}