/**
 * @file Controllers
 * @author azmisahin@outlook.com
 * @description Creating Node Js api using MongoDB.
 * @see https://medium.com/@azmisahin/nodejs-mongodb-1cbf2cd8071c
 * @see https://www.mongodb.com/features/mongodb-rest-api
 * */

// import required modules
import db from "./database.js";

/**
 * get document collection
 * @param {string} collactionName collaction name
 * @returns DB.collection<Document>
 */
async function getCollection(collactionName) {
    // get collection
    return await db.collection(collactionName);
}

/**
 * get all city
 * @returns [city]
 */
export async function getCity() {

    // get collection
    let collection = await getCollection("city");

    // find them
    let results = await collection.find({})
        // asc
        .sort({ cityName: 1 })
        //
        .toArray();

    // response
    return results;
}

/**
 * get all need
 * @returns [need]
 */
export async function getNeed() {
    // get collection
    let collection = await getCollection("need");

    // find them
    let results = await collection.find({})
        // asc
        .sort({ kind: 1 })
        //
        .toArray();

    // response
    return results;
}

/**
 * get all request
 * @returns [request]
 */
export async function getRequest() {
    // get collection
    let collection = await getCollection("request");

    // find them
    let results = await collection.find({})
        // last record
        .sort({ $natural: -1 })
        //
        .limit(50)
        //
        .toArray();

    // response
    return results;
}

/**
 * get all volunteer
 * @returns [volunteer]
 */
export async function getVolunteer() {
    // get collection
    let collection = await getCollection("volunteer");

    // find them
    let results = await collection.find({})
        // last record
        .sort({ $natural: -1 })
        //
        .limit(50)
        //
        .toArray();

    // response
    return results;
}

/**
 * get all participant
 * @returns [participant]
 */
export async function getParticipant() {
    // get collection
    let collection = await getCollection("participant");

    // find them
    let results = await collection.find({})
        // last record
        .sort({ $natural: -1 })
        //
        .limit(50)
        //
        .toArray();

    // response
    return results;
}


/**
 * add request
 * @param {request} document model
 * @returns Document<request>
 */
export async function addRequest(document) {

    // pre logic
    document.calendar = new Date();

    // get collection
    let collection = await getCollection("request");

    // add document
    let response = await collection.insertOne(document);

    // after logic
    if (response && response.acknowledged) {
        document._id = response.insertedId
        return document;
    } else return null;
}

/**
 * add volunteer
 * @param {request} document model
 * @returns Document<volunteer>
 */
export async function addVolunteer(document) {

    // pre logic
    document.calendar = new Date();

    // get collection
    let collection = await getCollection("volunteer");

    // add document
    let response = await collection.insertOne(document);

    // after logic
    if (response && response.acknowledged) {
        document._id = response.insertedId
        return document;
    } else return null;
}

/**
 * add participant
 * @param {participant} document model
 * @returns Document<participant>
 */
export async function addParticipant(document) {

    // pre logic
    document.calendar = new Date();

    // get collection
    let collection = await getCollection("participant");

    // add document
    let response = await collection.insertOne(document);

    // after logic
    if (response && response.acknowledged) {
        document._id = response.insertedId
        return document;
    } else return null;
}

/**
 * Overview of requests and volunteer participation
 * @returns [rvp]
 */
export async function getRVP() {
    // get collection
    let collection = await getCollection("request");

    // find them
    let results = await collection.find({})
        // last record
        .sort({ $natural: -1 })
        //
        .limit(50)
        //
        .toArray();

    // response
    return results;
}
