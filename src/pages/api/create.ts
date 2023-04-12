import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  title: string;
  author: string;
  link_url: string;
  image_url: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { author, image_url, link_url, name, title }: Data = req.body;

  try {
    await prisma.book.create({
      data: {
        author,
        image_url,
        link_url,
        name,
        title,
      },
    });
    res.status(200).json({ message: "Livro adicionado!" });
  } catch (error) {}
}
