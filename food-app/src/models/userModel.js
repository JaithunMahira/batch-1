const mongoose = require("mongoose");
const { Schema } = mongoose;

const addressSchema = {
  houseno: { type: Number },
  street: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: Number },
};

const UserSchema = new Schema({
  username: { type: String, lowercase: true, unique: true },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  address: addressSchema,
});


module.exports = UserSchema;