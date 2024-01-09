const express = require("express");
require("dotenv").config();
const session = require('express-session');
// const sessions = require("./utils/sessions");
const cors = require("cors");
const passport = require("passport");
const authRoute = require("./routes/auth");
const profileRoute = require("./routes/profile");
// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const { User } = require("../models/user");
require("./db/mongoose")();
require("./utils/passportGoogleLogin");
// const express = require('express');
// const app1 = express();

// app.use((req, res, next) => {
//   // Set Cross-Origin-Opener-Policy header
//   res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
//   next();
// }); 
const app = express();
app.use((req, res, next) => {
   // Set Cross-Origin-Opener-Policy header
   res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
   next();
 });
app.use(express.json());

app.use(
   express.urlencoded({
      extended: true,
   })
);
app.use(
   cors({
      origin: "http://localhost:3000",
      credentials: true,
   })
);
// app.use(express-session);
app.use(session({
   secret: 'your_session_secret_here',
   resave: false,
   saveUninitialized: true
 }));
// app.use(sessionMiddleware());

app.use(passport.initialize());
app.use(passport.session());


 
app.get("/", (req, res) => {
   res.send({
      message: "Hii there",
   });
});
app.use("/", authRoute);
app.use("/", profileRoute);

app.listen(process.env.PORT, () => {
   console.log(`Server is Up on ${process.env.PORT}`);
});