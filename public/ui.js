/**
 * @file user interface
 * @author azmisahin@outlook.com
 * @description Creating Node Js api using MongoDB.
 * @see https://medium.com/@azmisahin/nodejs-mongodb-1cbf2cd8071c
 * @see https://www.mongodb.com/features/mongodb-rest-api
 * */

// Prepare application data
function init() {
    fetchPararlel().then(([cities, needs]) => {
        log("info", { cities })
        log("info", { needs })
    })
}

// cancel any request
function abort() {
    if (aborter) {
        aborter.abort()
    }
}
