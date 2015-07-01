var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var swig = require("swig");
var sass = require("node-sass-middleware");
var path = require("path");

var app = express();
var routes = require(path.join(__dirname, "/routes/"));
app.listen(3000);

swig.setDefaults({ cache: false });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.set("view cache", false);
app.engine("html", swig.renderFile);

app.use(logger("dev"));

app.use(bodyParser.urlencoded());


app.use("/bower_components", express.static(path.join(__dirname, "/bower_components")));

app.use("/", routes);

app.use( 
	sass({
		src: path.join(__dirname, "/assets/stylesheets"),
		dest: path.join(__dirname, "/public/stylesheets"),
		debug: true
	})
);

app.use(express.static(path.join(__dirname, "/public")));

// catch 404 (ie, no route was hit) and forward to error handler
app.use(function (req, res, next) {
	var err = new Error("Not Found");
	err.status = 404;
	next(err);
});

app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.send(err);
	// res.render("error", {
	// 	message: err.message,
	// 	error: {}
	// });
});


module.exports = app;
