import { NextApiRequest, NextApiResponse } from "next";
import { Update } from "../models/Update";

const updates = async (req: NextApiRequest, res: NextApiResponse) => {
  const updates = await Update.find().sort({ createdAt: -1 });
  return res.json(updates);
};

export default updates;
