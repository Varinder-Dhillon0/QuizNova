const mongoose = require("mongoose");
const dns = require("node:dns/promises");

const connectDb = async () => {
  dns.setServers(["1.1.1.1"]);

  //wI2eqxrd89OBiZHy
  // mongodb+srv://virenderdhillon104:Z8d7rRnxEq7TaCLh@cluster0.d3nhn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
  try {
    await mongoose
      .connect(
        "mongodb+srv://virenderdhillon104:IDMJfPKaAvSBNdB3@cluster0.d3nhn.mongodb.net/?appName=Cluster0",
      )
      .then(() => {
        console.log("Db connected");
      });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connectDb };
