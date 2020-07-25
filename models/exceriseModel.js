var mongoose = require("mongoose");

var Schema = mongoose.Schema;


// day: new Date().setDate(new Date().getDate()-9),
// exercises: [
//   {
//     type: "resistance",
//     name: "Lateral Pull",
//     duration: 20,
//     weight: 300,
//     reps: 10,
//     sets: 4
//   }
// ]

var ExceriseSchema = new Schema({
  day: {
    type: Date,
    default: new Date().setDate(new Date().getDate())
  },
  exercises: {
    type: Array
  }
});

var Excerise = mongoose.model("Workout", ExceriseSchema);

module.exports = Excerise;