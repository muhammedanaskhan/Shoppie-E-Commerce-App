import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import { verifyPassword } from "../../../../lib/auth";
import { connectToDb } from "../../../../lib/db";

export default NextAuth({
    session:{
        jwt: true
    },
    providers: [
        CredentialsProvider({   
          async authorize(credentials) {
           const client = await connectToDb();
           console.log("client",client)

            if(!client){
              throw new Error('Could not connect to database');
            }else{
              console.log('connect to database');
            }

           const userDb = client.db()

           const usersCollection = client.db().collection('users')

           const user = await usersCollection.findOne({email: credentials.email})
           if(!user){
            throw new Error('No user found!');
           }

           const isValid = await verifyPassword(credentials.password, user.password)
           if(!isValid){
            throw new Error('Wrong Password')
           }
           client.close()
           return { email: user.email }
           
          }
        })
      ],
      secret: process.env.NEXT_PUBLIC_SECRET,
})

