// this will create  new user
import hashPassword from '../../../../lib/auth';
import {connectToDb} from '/lib/db';

async function handler(req, res) {

    const data = req.body;

    const {email, password} = data;

    if(!email || !email.includes('@') || !password ){
        res.status(422).json({message: 'invalid input'})
        return;
    }

  const client= await connectToDb();
  const db = client.db  // access the db

  const hashedPassword = hashPassword(password)

  // create a new user and store in db
    const result = await db.collection('users').insertOne({
        email: email,
        password: hashedPassword
    });

    res.status(201).json({message: 'created user!'})

}

export default handler