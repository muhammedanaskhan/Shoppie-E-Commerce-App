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
    console.log("d",db)
  const hashedPassword = hashPassword(password)

  // create a new user and store in db
    const result = await db.collection('users').insertOne({
        email: email,
        password: hashedPassword
    });

    // After the database operation, close the client connection
    client.close();


    res.status(201).json({message: 'created user!'})

}

export default handler