const mongoose = require("mongoose");
const Offer = mongoose.model("offers");
const constructionTypes = mongoose.model("constructionTypes")
const userModel = mongoose.model('User')

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

module.exports = (app) => {
  app.post('/add-types', (req, res, next) => {
    console.log(req.body)
    constructionTypes.create(req.body, (err, types) => {
      console.log(types)
      res.send(types)
    })
  })
}

module.exports = (app) => {
  app.post('/register', (req, res, next) => {
    userModel.create(req.body, (err, userDetails) => {
      console.log(userDetails)
      res.send(userDetails)
    })
  })
}
