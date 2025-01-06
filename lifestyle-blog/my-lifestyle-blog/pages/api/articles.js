import { NextApiRequest, NextApiResponse } from "next";
import { Article } from "../models/Article";

const articles = async (req: NextApiRequest, res: NextApiResponse) => {
  const articles = await Article.find().sort({ createdAt: -1 });
  return res.json(articles);
};

export default articles;
