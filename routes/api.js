  
const router = require("express").Router();
const Workout = require("../models/workout.js");

console.log("THis is workout", Workout);

// getting the workouts
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      console.log("All Workouts!!!", dbWorkout);
      // res.send(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Adding an exercise 
router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    {
    _id: req.params.id,
    },
    {
      $inc: { totalDuration: req.body.duration },
      $push: { exercises: req.body }
    },
    { new: true }

  ).then(dbWorkout => {
    console.log("THIS IS THE PUT DB WORKOUT", dbWorkout);
    res.json(dbWorkout);
  }).catch(err => {
    res.send(err);
  })
});

// new workout
router.post("/api/workouts", ({ body }, res) => {
  console.log("This is the body", body);
  Workout.create(body)
    .then((dbWorkout) => {
      console.log("Create a workout", dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// stats page
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      console.log("Get WORKOUTS", dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});









module.exports = router;