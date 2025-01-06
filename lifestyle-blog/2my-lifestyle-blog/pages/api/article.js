import { NextApiRequest, NextApiResponse } from "next";

const articles = [
  { id: 1, title: "Article 1", content: "This is article 1" },
  { id: 2, title: "Article 2", content: "This is article 2" },
  // ...
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    return res.json(articles);
  }
  return res.status(405).json({ error: "Method not allowed" });
}
