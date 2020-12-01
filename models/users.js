const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('mongoose-type-email');
const bcrypt = require("bcrypt");
const passport = require("passport");

const userSchema = new Schema({
  username: { type: String, index: true },
  password: { type: String },
  email: { type: String },
  name: { type: String }
});

let User = module.exports = mongoose.model('User', userSchema);


//uses bcrypt to hash the user pasword so it's not visible as plain text in the database

userSchema.methods = {
  checkPassword: function (inputPassword) {
return bcrypt.compareSync(inputPassword, this.password)

  },

  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }

}

userSchema.pre('save', function (next) {
  if(!this.password) {
    console.log("no password entered")
    next()
  }
else {
  this.password = this.hashPassword(this.password)
}
})
