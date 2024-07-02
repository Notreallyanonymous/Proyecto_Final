const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
      unique: true,  // Ensure this is correctly defined
    },
    email_verified: {
      type: Boolean,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: 'member',
    },
    auth_time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
