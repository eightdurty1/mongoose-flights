const Flight = require("../models/flight");

module.exports = {
  new: newFlight,
  show: showFlight,
  index,
  create
//   show 
};

function index(req, res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', { flights });
    })
}

function create(req, res) {
//   if (req.body.cast) req.body.case = req.body.cast.split(",");
  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.render("flights/new");
    console.log(flight);

    res.redirect("/flights");
  });
}

function newFlight(req, res) {
  res.render("flights/new");
}

function showFlight(req, res) {
  res.render("flights/show");
}


// Flight.find({}).sort([['departs', +1]]).exec(function(err, flights) {
//     res.render('flights/index', {
//     flights, 
//     title: 'All Flights'
//     });
// });
// }