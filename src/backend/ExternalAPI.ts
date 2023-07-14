import dotenv from "dotenv";
import axios from 'axios';

dotenv.config();

const edamamID = process.env.EDAMAM_ID || '';
const edamamKey = process.env.EDAMAM_KEY || '';

export async function fetchRecipes() {
    const baseUrl = 'https://api.edamam.com/api/recipes/v2';
    const params = {
        type: 'any',
        q: 'chicken',
        app_id: edamamID,
        app_key: edamamKey,
        random: 'true'
    }
    const url = `${baseUrl}?${new URLSearchParams(params).toString()}`;
    try {
      const response = await axios.get(url);
      for (let i = 0; i < response.data.hits.length; i++) {
        console.log(response.data.hits[i].recipe.label);
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
}