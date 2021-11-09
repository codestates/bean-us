require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: proccess.env.DATABASE_PASSWORD,
    database: "bean-us",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "bean-us_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "bean-us_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
