const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: {
    type: String,
    trim: true,
    required: true,
  },
  pwd: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  roles: {
    User: {
      type: Number,
      default: 2001,
    },
    Admin: Number,
  },
  refreshToken: String
});

const user = new mongoose.model("user", userSchema);
module.exports = user;
