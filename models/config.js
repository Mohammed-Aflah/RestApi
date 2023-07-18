const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://asdf:asdf123@cluster0.dn7ozkx.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connection.on("connected", () => console.log("Conntected"));
mongoose.connection.on("disconnected", () => console.log("Disconnected"));
