module.exports = {
  client: "postgresql",
  connection: {
    host: "localhost",
    port: "5433",
    database: "TCC",
    user: "postgres",
    password: "123456",
  },
  pool: {
    min: 2,
    max: 10,
  },
};
