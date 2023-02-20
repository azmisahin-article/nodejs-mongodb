/**
 * @file client site application
 * @author azmisahin@outlook.com
 * @description Creating Node Js api using MongoDB.
 * @see https://medium.com/@azmisahin/nodejs-mongodb-1cbf2cd8071c
 * @see https://www.mongodb.com/features/mongodb-rest-api
 * */

/**
 * Logger
 * */
async function log(type, data) {
    console[type](data)
}

// https://developer.mozilla.org/en-US/docs/Web/API/AbortController
let aborter;
async function take(resource, options = {}) {
    const { timeout = 8000 } = options;

    aborter = new AbortController();
    const id = setTimeout(() => aborter.abort(), timeout);
    let response = null

    try {
        response = await fetch(resource, {
            ...options,
            signal: aborter.signal
        });
    } catch (error) {
        log("error", error)
    }

    clearTimeout(id);
    return response;
}

/**
 * Get all ldata
 * */
async function fetchPararlel() {

    let cities;
    let needs;
    try {
        const [cityResponse, needResponse] = await Promise.all([
            take('/api/city'),
            take('/api/need')
        ]);

        cities = await cityResponse.json();
        needs = await needResponse.json();
    } catch (error) {
        log("error", error)
    }
    return [cities, needs];
}