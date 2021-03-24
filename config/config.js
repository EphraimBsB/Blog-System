const keys = require("../utils/keys");

const config = {
  development: {
    username: "root",
    password: null,
    database: keys.DB_NAME,
    host: "127.0.0.1",
    port: keys.DB_PORT,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};

module.exports = { config };
