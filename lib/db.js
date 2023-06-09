// this will help us to establish a connwction to db

import { MongoClient } from "mongodb";

async function connectToDb() {

    const uri = "mongodb+srv://muhammed:P006108PyP3FKFaV@cluster0.a5aacwn.mongodb.net/?retryWrites=true&w=majority";

    const client = await MongoClient.connect(uri)

    return client;
}

export default connectToDb;

// P006108PyP3FKFaV 