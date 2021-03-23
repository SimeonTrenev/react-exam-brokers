const mongoose = require("mongoose");
const Offer = mongoose.model("offers");

module.exports = (app) => {
  app.post("/add-offer", (req, res, next) => {
    console.log(req.body);
    // res.send(req.body);
    Offer.create(req.body, (err, newOffer) => {
      console.log(err);
      console.log(newOffer);
      res.send(newOffer);
    });
  });
};
