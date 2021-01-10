var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(request, response){
  response.render('rsvp', data);
};

exports.addRSVP = function(req, res){
  var email = req.body.rsvpEmail;
  console.log(email);

  data.rsvp.push(email);
  res.send(email);
}