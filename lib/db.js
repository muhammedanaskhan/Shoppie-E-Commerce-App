// this will help us to establish a connwction to db

import { MongoClient } from "mongodb";

import React from 'react'

async function connectToDb() {

    const uri = "mongodb+srv://muhammedanaskhan:Mongodb0786@@cluster0.l0a12gq.mongodb.net/?retryWrites=true&w=majority";
    const client = await MongoClient.connect(uri)

    return client;
}

export default connectToDb;