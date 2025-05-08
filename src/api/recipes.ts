import type { VercelRequest, VercelResponse } from "@vercel/node";

type SpoonacularResponse = {
  results: any[];
  totalResults: number;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { query = "", number = "10" } = req.query;

  const apiKey = process.env.SPOONACULAR_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Missing API key" });
  }

  const numberOfResults = parseInt(number as string, 10) || 10; // Gestione del parametro 'number'
  const encodedQuery = encodeURIComponent(query as string);

  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=${numberOfResults}&addRecipeInformation=true&addRecipeInstructions=true&query=${encodedQuery}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorData = await response.text();
      return res
        .status(response.status)
        .json({ error: `Spoonacular error: ${errorData}` });
    }

    const data: SpoonacularResponse = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
}
