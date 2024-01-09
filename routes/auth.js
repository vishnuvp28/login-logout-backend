const express = require("express");
const passport = require("passport");
const { isAuthenticated } = require("../middlewares/isAuthenticated");
const router = express.Router();


const successRedirectUrl = "http://localhost:3000/login/success";
const errorRedirectUrl = "http://localhost:3000/login/error";
const successfbRedirectUrl = "http://localhost:3000/login/fbsuccess";
const errorfbRedirectUrl = "http://localhost:3000/login/fberror";
const successghRedirectUrl = "http://localhost:3000/login/ghsuccess";
const errorghRedirectUrl = "http://localhost:3000/login/gherror";
router.get(
   "/login/google",
   passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
   "/auth/google/callback",
   passport.authenticate("google", {
      failureMessage: "Cannot login to Google, please try again later!",
      failureRedirect: errorRedirectUrl,
      successRedirect: successRedirectUrl,
   }),
   (req, res) => {
      console.log("User: ", req.user);
   }
);
router.get(
   "/login/facebook",
   passport.authenticate("facebook", { scope: ["fbprofile", "email"] })
);
router.get(
   "/auth/facebook/callback",
   passport.authenticate("facebook", {
      failureMessage: "Cannot login to Facebook, please try again later!",
      failureRedirect: errorfbRedirectUrl,
      successRedirect: successfbRedirectUrl,
   }),
   (req, res) => {
      console.log("User: ", req.user);
   }
);
router.get(
   "/login/github",
   passport.authenticate("github", { scope: ["ghprofile", "email"] })
);
router.get(
   "/auth/github/callback",
   passport.authenticate("github", {
      failureMessage: "Cannot login to github, please try again later!",
      failureRedirect: errorghRedirectUrl,
      successRedirect: successghRedirectUrl,
   }),
   (req, res) => {
      console.log("User: ", req.user);
   }
);
router.get("/logout", isAuthenticated, (req, res, next) => {
   req.session.destroy();
   // req.logOut();
   //return res.redirect("http://localhost:3000/login");
});
module.exports = router;