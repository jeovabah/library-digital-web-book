import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // POST - UPDATE BOOK BY ID - /api/book/aluguel/:id
  if (req.method === "GET") {
    return getAllBooksAluguel(res);
  }
}

const getAllBooksAluguel = async (res: NextApiResponse) => {
  try {
    const books = await prisma?.aluguel?.findMany();
    return res.status(200).json({ data: books });
  } catch (error: any) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};
