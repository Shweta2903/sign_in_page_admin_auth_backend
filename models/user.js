const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      require: true,
      maxlength: 20,
    },
    lastname: {
      type: String,
      require: true,
      maxlength: 30,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
