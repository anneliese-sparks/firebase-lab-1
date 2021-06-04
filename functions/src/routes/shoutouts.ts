import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import ShoutOut from "../model/Shoutout";
import { getClient } from "../db";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
    try {
      const client = await getClient();
      const results = await client.db().collection<ShoutOut>('shoutOuts').find().toArray();
      res.json(results); // send JSON results
    } catch (err) {
      console.error("FAIL", err);
      res.status(500).json({message: "Internal Server Error"});
    }
  });

 app.post( "/", async ( req, res ) => {
    const shout = req.body as ShoutOut;
    try {
        const client = await getClient();
        const result = await client.db().collection<ShoutOut>( 'shoutOuts' ).insertOne( shout );
        shout._id = result.insertedId;
        res.status( 201 ).json( shout );
    } catch ( err ) {
        console.error( "FAIL", err );
        res.status( 500 ).json( { message: "Internal Server Error" } );
    }
} ); 


export default functions.https.onRequest(app);