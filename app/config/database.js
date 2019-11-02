module.exports = {
  "development": {
    dialect: "postgres",
    host: "tuffi.db.elephantsql.com",
    username: "zalgovvb",
    password: "Hzy1d3GUnduNAPSarK1Fn91RF10a14Lo",
    database: "zalgovvb",
    define: {
      timestamps: true, // toda tabela deve conter um created_at e um updated_at
      underscored: true // usa o formato snake_case
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    dialect: "postgres",
    host: "tuffi.db.elephantsql.com",
    username: "zalgovvb",
    password: "Hzy1d3GUnduNAPSarK1Fn91RF10a14Lo",
    database: "zalgovvb",
    define: {
      timestamps: true, // toda tabela deve conter um created_at e um updated_at
      underscored: true // usa o formato snake_case
    }
  }
}
