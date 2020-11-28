const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('mongoose-type-email');
const bcrypt = require("bcrypt")

const userSchema = new Schema({
  email: {type: mongoose.SchemaTypes.Email, required: true},
  password: {type: String, required: true},
  membership: {type: String, required: true}
});
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  // checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  

const Stock = mongoose.model("Stock", userSchema);

module.exports = Book;