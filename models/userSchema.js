const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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

const user = mongoose.model("user", UserSchema);
module.exports = user;
