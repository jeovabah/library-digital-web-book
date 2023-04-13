import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prima";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const books = await prisma?.book?.findMany({});
    // console.log(books);
    // const books = ["a", "b", "c"];
    res.status(200).json({ data: books });
    return books;
  } catch (error) {
    console.log(error);
  }
}
