/**
 * @file Pages
 * @author azmisahin@outlook.com
 * @description Creating Node Js api using MongoDB.
 * @see https://medium.com/@azmisahin/nodejs-mongodb-1cbf2cd8071c
 * @see https://www.mongodb.com/features/mongodb-rest-api
 * */

// import required modules
import express from "express";

// define
const page = express.Router();

// Get api/city
page.get("/api/city", async (req, res) => {

    // get all
    let results = []

    // reponse result
    if (!results) res.send("Not found").status(404);
    else res.send(results).status(200);
});

// Get api/need
page.get("/api/need", async (req, res) => {
    // get all
    let results = []

    // reponse result
    if (!results) res.send("Not found").status(404);
    else res.send(results).status(200);
});

// Get api/request
page.get("/api/request", async (req, res) => {
    // get all
    let results = []

    // reponse result
    if (!results) res.send("Not found").status(404);
    else res.send(results).status(200);
});

// Get api/volunteer
page.get("/api/volunteer", async (req, res) => {
    // get all
    let results = []

    // reponse result
    if (!results) res.send("Not found").status(404);
    else res.send(results).status(200);
});

// Get api/participant
page.get("/api/participant", async (req, res) => {
    // get all
    let results = []

    // reponse result
    if (!results) res.send("Not found").status(404);
    else res.send(results).status(200);
});

// Get api
page.get("/api", async (req, res) => {
    // get all
    let results = []

    // reponse result
    if (!results) res.send("Not found").status(404);
    else res.send(results).status(200);
});

// Post api/request
page.post("/api/request", async (req, res) => {

    // pre logic
    let document = req.body
    if (!document) res.send("Bad request").status(400)

    // process
    let result = {}

    // after logic
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(204);
});

// Post api/volunteer
page.post("/api/volunteer", async (req, res) => {

    // pre logic
    let document = req.body
    if (!document) res.send("Bad request").status(400)

    // process
    let result = {}

    // after logic
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(204);
});

// Post api/participant
page.post("/api/participant", async (req, res) => {

    // pre logic
    let document = req.body
    if (!document) res.send("Bad request").status(400)

    // process
    let result = {}

    // after logic
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(204);
});

/**
 * Express pages
 */
export default page;