import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from 'dns'
dns.setDefaultResultOrder('ipv4first')
const client = new MongoClient(process.env.AUTH_DB_URI);
const db = client.db('myAuthDB2');
export const auth = betterAuth({
  emailAndPassword: { 
    enabled: true,
    //requireEmailVerification: true, 
  }, 
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
});