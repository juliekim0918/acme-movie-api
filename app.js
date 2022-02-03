const express = require("express");
const app = express();
const {
  syncAndSeed,
  models: { Actor, Movie, Role },
} = require("./db");

app.get("/", (req, res, next) => {
  res.send("hello!");
});

app.get("/api/movies", async (req, res, next) => {
  const movies = await Movie.findAll();
  res.send(movies);
});

app.get("/api/actors", async (req, res, next) => {
  const actors = await Actor.findAll();
  res.send(actors);
});

module.exports = app;
