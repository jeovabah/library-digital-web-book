import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
  id?: number;
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
  const bookId = req.query.id;
  const { author, image_url, link_url, name, title, id }: Data = req.body;
  // DELETE
  if (req.method === "DELETE") {
    const book = await prisma.book.delete({
      where: { id: Number(bookId) },
    });
    res.json(book);
  }
  // UPDATE
  else if (req.method === "PUT") {
    const book = await prisma.book.update({
      where: { id: Number(bookId) },
      data: {
        author,
        image_url,
        link_url,
        name,
        title,
      } as Data,
    });
    res.status(200).json({ message: "Livro foi atualizado" });
  } else {
    console.log("Note could not be modified");
    res.status(400).json({ message: "Livro não foi atualizado" });
  }
}
