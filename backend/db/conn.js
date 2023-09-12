const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://bruno:loaQHCdQnXTXC4FH@cluster0.jywmbus.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("Conectado ao banco");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

module.exports = main;
