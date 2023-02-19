/**
 * @file Database
 * @author azmisahin@outlook.com
 * @description Creating Node Js api using MongoDB.
 * @see https://medium.com/@azmisahin/nodejs-mongodb-1cbf2cd8071c
 */

// import required modules
import { config } from "dotenv";
import { MongoClient } from "mongodb";
// load environment
config();

// database connection string
const uri = process.env.ARTICLE_CLUSTER_URL || "";

// database Name
const databaseName = process.env.ARTICLE_CLUSTER_DATABASE || "";

// defination
let connection;
let database;

// connection options
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

// connector
const client = new MongoClient(uri, options);

// we are trying to database connection
try {
    connection = await client.connect();
} catch (e) {
    console.error(e);
}

/**
 * Database connection module
 * @returns MongoClient.db
 */
export default database = connection.db(databaseName);
