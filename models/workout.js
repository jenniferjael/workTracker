const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

//THIS IS MONGOOSE SCHEMA
const workoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
        },
        name: {
          type: String,
          trim: true,
          
        },
        duration: {
          type: Number,
          trim: true,
          
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
    totalDuration: {
      type: Number,
    }
  });
  const Workout = mongoose.model("Workout", workoutSchema);
  module.exports = Workout;