const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const UserSchema = new Schema(
//   {
//     local: {
//       email: { type: String, unique: true },
//       name: { type: String },
//       //  password: { type: String },
    
//     },
//     facebook: {
//       // id: String,
//       // token: String,
//       // email: String,
//       // name: String,
//       type: String,
//       unique: true,
//     },
//     google: { type: String, unique: true },
//     picture: {
//       type: String,
//     },
//   },
//   { timestamps: true }
// );
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    googleId: {
      type: String,
      unique: true,
    },
    facebookId:{
      type: String,
      unique: true,
    },
    githubId:{
      type: String,
      unique: true,
    },
    picture: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);


exports.User = mongoose.model("user", UserSchema);
