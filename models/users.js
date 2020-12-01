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
//uses https://medium.com/gomycode/authentication-with-passport-js-73ca65b25feb as guiding material
module.exports.createUser = function (newUser, callback) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, hash) {
      newUser.password = hash;
      newUser.save(callback);

    });

  });

}

module.exports.getUserByUsername = function (username, callback) {
  let query = { username: username };
  User.findOne(query.callback);
}

module.exports.getUserbyId = function (id, callback) {
  User.findById(id, callback);
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
    if (err) throw err;
    callback(null, isMatch)
  });
}

