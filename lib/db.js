// this will help us to establish a connwction to db

import { MongoClient } from "mongodb";

export async function connectToDb() {

    const password = process.env.NEXT_PUBLIC_MONGO_PSWD

    console.log('password', password)
    const uri = `mongodb+srv://muhammed:${password}@cluster0.a5aacwn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    console.log('uri', uri)
    const client = await MongoClient.connect(uri)

    return client;
}
