import type { VercelRequest, VercelResponse } from "@vercel/node";

type SpoonacularResponse = {
  results: any[];
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { query = "", number = "10" } = req.query;

  const apiKey = process.env.SPOONACULAR_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Missing API key" });
  }

  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=${number}&addRecipeInformation=true&addRecipeInstructions=true&query=${encodeURIComponent(
    query as string
  )}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return res.status(response.status).json({ error: "Spoonacular error" });
    }

    const data: SpoonacularResponse = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
}
