// this will take request from form create  new user
import hashPassword from '../../../../lib/auth';
import connectToDb from '../../../../lib/db';


async function handler(req, res) {

  
    if(req.method !== 'POST'){
        return;
    }
     
    const data = req.body;

    const {email, password} = data;

    if(!email || !email.includes('@') || !password ){
        res.status(422).json({message: 'invalid input'})
        return;
    }

    let client;
    try {
        client = await connectToDb();
        if (!client) throw new Error('Database Connection Failed');
    }
    catch (error) {
        client?.close();
        res.status(503).json({ error: error.message });
        return;
    }

  const db = client.db()  // access the db

  //check if the requested email already exists

  const existingUser = await db.collection('users').findOne({email: email})

  if(existingUser){
    res.status(422).json({message: 'User already exists'})
    client?.close()
    return;
  }

  const hashedPassword = hashPassword(password)

  // create a new user and store in db
    const result = await db.collection('users').insertOne({
        email: email,
        password: hashedPassword
    });

    res.status(201).json({message: 'created user!'})

    // After the database operation, close the client connection
    client.close();

}

export default handler