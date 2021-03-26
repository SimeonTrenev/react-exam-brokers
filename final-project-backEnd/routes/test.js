const mongoose = require("mongoose");
const Offer = mongoose.model("offers");
const constructionTypes = mongoose.model("constructionTypes");
const userModel = mongoose.model("User");
const {  COOKIE_NAME } = require("../config");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const authService = require("../authService");

function test(app) {
    app.post("/add-types", (req, res, next) => {
        constructionTypes.create(req.body, (err, types) => {
          console.log(types);
          res.send(types);
        });
      });

  app.post("/register", (req, res, next) => {
    userModel.create(req.body, (err, userDetails) => {
      console.log(userDetails);
      res.send(userDetails);
    });
  });

  app.post("/login", (req, res, next) => {
    const { email, password } = req.body;
    authService
      .login(email, password)
      .then((token) => {
        //   res.cookie(COOKIE_NAME, token, { httpOnly: true });
        // next()
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        res.cookie(COOKIE_NAME, token, {
          maxAge: 9000000000,
          httpOnly: true,
          secure: true,
        });
        // res.append('Set-Cookie', COOKIE_NAME + token + ';');
        res.json(token);
        // next()
      })
      .catch((err) => {
        next(err);
      });
  });

  app.post("/add-offer", (req, res, next) => {
    console.log(req.body);
    // res.send(req.body);
    Offer.create(req.body, (err, newOffer) => {
      console.log(err);
      console.log(newOffer);
      res.send(newOffer);
    });
  });

  app.get('/clearCookie', (req, res, next) => {
      res.clearCookie(COOKIE_NAME)
      next();
  })
}

module.exports = test;