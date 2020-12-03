const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcrypt");

//setting up a new schema with the items that will be entered in the sign-up component
const userSchema = new Schema({
  email: { type: String, required: true  },
  password: { type: String, required: true },
  first_name: { type: String },
  last_name: {type: String}
});

const User = mongoose.model('User', userSchema);


//uses bcrypt to hash the user password so it's not visible as plain text in the database

userSchema.methods = {
  checkPassword: function (inputPassword) {
return bcrypt.compareSync(inputPassword, this.password)

  },

  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }

}

//this defines hooks for pre-saving
userSchema.pre('save', function (next) {
  if(!this.password) {
    console.log("no password entered")
    next()
  }
else {
  this.password = this.hashPassword(this.password)
}
})

module.exports = User