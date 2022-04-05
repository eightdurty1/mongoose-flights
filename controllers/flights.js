const Flight = require("../models/flight");

module.exports = {
  new: newFlight,
  show: showFlight,
  index,
  create,
};

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render("flights/index", { flights, title: "All Flights" });
  });
}




function create(req, res) {
  //   if (req.body.cast) req.body.case = req.body.cast.split(",");
  console.log(req.body);
  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.render("flights/new");
    console.log(flight);

    res.redirect("/flights");
  });
}




function newFlight(req, res) {
  res.render("flights/new", { title: "New Flight" });
}





function showFlight(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    // Flight.findById(req.params.id, function (err, flight){

    
    console.log(flight);
    res.render("flights/show", { flight });
  });
}






// Flight.find({}).sort([['departs', +1]]).exec(function(err, flights) {
//     res.render('flights/index', {
//     flights,
//     title: 'All Flights'
//     });
// });
// }
