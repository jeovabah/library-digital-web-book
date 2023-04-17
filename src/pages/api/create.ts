import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prima";

type Data = {
  title: string;
  author: string;
  link_url: string;
  image_url: string;
  isPdf: boolean;
  quantity: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { author, image_url, link_url, title, isPdf, quantity }: Data = req.body;

  try {
    if (!author || !image_url || !link_url || !title) {
      throw new Error("Preencha todos os campos");
    }
    await prisma?.book?.create({
      data: {
        author,
        image_url,
        link_url,
        title,
        isPdf,
        quantity,
      },
    });
    res.status(200).json({ message: "Livro adicionado!", data: req.body });
    return title;
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "Livro não foi adicionado", data: req.body });
  }
}
