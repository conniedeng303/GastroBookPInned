import dotenv from "dotenv";
import express from "express";
import { fetchRecipes } from "./externalAPI";

dotenv.config();

const port = process.env.SERVER_PORT || 3000;

const app = express();

app.get("/", ( req, res ) => {
    res.render( "index" );
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
  fetchRecipes()
    .catch((error) => {
      console.error('Error fetching recipes:', error);
    });
});