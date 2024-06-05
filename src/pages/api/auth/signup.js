// this will take request from form create  new user
import {hashPassword} from '../../../../lib/auth';
import {connectToDb} from '../../../../lib/db';


async function handler(req, res) {

  
    if(req.method !== 'POST'){
        res.status(400).json({ error: 'Invalid method request' });
        return;
    }
     
    const data = req.body;
    const {email, password} = data;

    // data validation
    if(!email || !email.includes('@') || !password ){
        res.status(422).json({message: 'invalid input'})
        return;
    }

    const encryptedPassword = await hashPassword(password)

    const newUserAccount = {
        email: email,
        password: encryptedPassword,
    }

    console.log('newUserAccount',newUserAccount)

    //connecting to db
    let client;
    try {
        console.log('client1',client)
        client = await connectToDb();
        console.log('client',client)
        if (!client) throw new Error('Database Connection Failed');
    }
    catch (error) {
        client?.close();
        res.status(503).json({ error: error.message });
        return;
    }

    //setting new user in db
    try{
        const db = client.db()  // access the db
        //check if the requested email already exists
        const existingUser = await db.collection('users').findOne({email: email})
        if(existingUser){
            res.status(422).json({message: 'User already exists'})
            client?.close()
            return;
        }
        const result = await db.collection('users').insertOne(newUserAccount);
        client.close();
        res.status(201).json({message: 'created user!'})    
    }
    catch(error){
        client.close();
        res.status(400).json({ error: 'Something went wrong', message: error.message })
    }
}

export default handler