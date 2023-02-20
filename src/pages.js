/**
 * @file Pages
 * @author azmisahin@outlook.com
 * @description Creating Node Js api using MongoDB.
 * @see https://medium.com/@azmisahin/nodejs-mongodb-1cbf2cd8071c
 * @see https://www.mongodb.com/features/mongodb-rest-api
 * */

// import required modules
import express from "express";
import { addParticipant, addRequest, addVolunteer, getCity, getNeed, getParticipant, getRequest, getRVP, getVolunteer } from "./controller.js"

// define
const page = express.Router();

// Get api/city
page.get("/api/city", async (req, res) => {

    // get all
    let results = await getCity();

    // reponse result
    if (!results) res.send("Not found").status(404);
    else res.send(results).status(200);
});

// Get api/need
page.get("/api/need", async (req, res) => {
    // get all
    let results = await getNeed();

    // reponse result
    if (!results) res.send("Not found").status(404);
    else res.send(results).status(200);
});

// Get api/request
page.get("/api/request", async (req, res) => {
    // get all
    let results = await getRequest();

    // reponse result
    if (!results) res.send("Not found").status(404);
    else res.send(results).status(200);
});

// Get api/volunteer
page.get("/api/volunteer", async (req, res) => {
    // get all
    let results = await getVolunteer();

    // reponse result
    if (!results) res.send("Not found").status(404);
    else res.send(results).status(200);
});

// Get api/participant
page.get("/api/participant", async (req, res) => {
    // get all
    let results = await getParticipant();

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
    let result = await addRequest(document);

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
    let result = await addVolunteer(document);

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
    let result = await addParticipant(document);

    // after logic
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(204);
});

// Get api
// Overview of requests and volunteer participation [RVP]
page.get("/api", async (req, res) => {
    // get all
    let results = await getRVP();

    // reponse result
    if (!results) res.send("Not found").status(404);
    else res.send(results).status(200);
});

/**
 * Express pages
 */
export default page;