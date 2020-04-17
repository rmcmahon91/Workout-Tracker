var express = require("express")
var logger = require("morgan")
var mongoose = require("mongoose")

var PORT = process.env.PORT || 3000;

var app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var htmlRoutes = require("./routes/html-routes")
htmlRoutes(app)
var apiRoutes = require("./routes/api-routes")
apiRoutes(app)
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
  
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });