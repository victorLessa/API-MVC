module.exports = {
  "development": {
  dialect: "postgres",
  host: "*****",
  username: "****",
  password: "****",
  database: "****",
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
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  }
}
