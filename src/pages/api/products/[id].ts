import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";
import { ProductType } from "../../../services/products";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const filePath = path.join(process.cwd(), "database.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const products: ProductType[] = JSON.parse(jsonData);

  const product = products.find((p) => p.id === Number(id));
  res.status(200).json(product);
}
