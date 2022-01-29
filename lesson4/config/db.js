const { connect } = require("mongoose");

const connectDB = async () => {
  const DB = await connect(process.env.MONGO_DB_URI);
  console.log(
    `MongoDB are connected on port: ${DB.connection.port}, DB_name: ${DB.connection.name}, host: ${DB.connection.host}`
      .cyan
  );
};

module.exports = connectDB;
