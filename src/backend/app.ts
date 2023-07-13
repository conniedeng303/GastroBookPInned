import dotenv from "dotenv";
import express from "express";

dotenv.config();

const port = process.env.SERVER_PORT || 3000;

const app = express();

app.get( "/", ( req, res ) => {
    res.render( "index" );
} );

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );