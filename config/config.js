module.exports = {
  development: {
    username: "postgres",
    password: "123",
    database: "portal_apps",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "postgres",
    password: "password_db_kamu",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "postgres",
    password: "password_db_kamu",
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres"
  }
};
