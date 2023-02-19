/**
 * @file index
 * @author azmisahin@outlook.com
 * @description Creating Node Js api using MongoDB.
 * @see https://medium.com/@azmisahin/nodejs-mongodb-1cbf2cd8071c
 * @see https://github.com/azmisahin-article/nodejs-mongodb
 */

// import required modules
import express from "express";
import cors from "cors";

// define
const PORT = process.env.PORT || 3000;
const app = express();

// use express
app.use(express.static('public'))
app.use(cors());
app.use(express.json());

/**
 * Server module
 */
export default {
    /**
     * Start web server
     */
    start: () => {
        // start the Express server
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    }
}