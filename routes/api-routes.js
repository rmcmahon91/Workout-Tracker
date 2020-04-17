var db = require("../models")
var mongoose = require("mongoose")
function apiRoutes(app) {
app.get("/api/workouts",function(req,res){
    db.Workout.find({}).then(function(data){
        res.json(data)
    })
})
app.post("/api/workouts",function(req,res){
    var newWorkout = req.body
    console.log(newWorkout)
    db.Workout.create({}).then(function(data){
        res.json(data)
    })
})
app.put("/api/workouts/:id",function(req,res){
  var id = req.params.id
  id= mongoose.Types.ObjectId(id)
  var newWorkout = req.body

    db.Workout.findOneAndUpdate(
        { _id:id}, 
        { $push: { excerises: newWorkout } },
       function (error, success) {
             if (error) {
                 console.log(error);
             } else {
                 console.log(success);
                 res.json(success)
             }
         });
})
}

module.exports = apiRoutes