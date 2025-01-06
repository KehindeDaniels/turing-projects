import { NextApiRequest, NextApiResponse } from "next";

const updates = [
  { id: 1, title: "Update 1", content: "This is update 1" },
  { id: 2, title: "Update 2", content: "This is update 2" },
  // ...
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    return res.json(updates);
  }
  return res.status(405).json({ error: "Method not allowed" });
}
