module.exports = function _route(app, model, io) {
	app.get("/", function(req, res) {
		res.render("home");
	});
};