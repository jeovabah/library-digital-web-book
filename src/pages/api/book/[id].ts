import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prima";
type Data = {
  id?: string;
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
  const { author, image_url, link_url, title, id }: Data = req.body;
  // DELETE
  if (req.method === "DELETE") {
    try {
      const book = await prisma?.book.findUnique({
        where: { id: String(bookId) },
      });
      if (!book) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }
      const deletedBook = await prisma?.book.delete({
        where: { id: String(bookId) },
      });
      return res
        .status(200)
        .json({ message: "Livro foi deletado", data: deletedBook });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Livro não foi encontrado" });
    }
  }
  // UPDATE
  else if (req.method === "PUT") {
    try {
      const book = await prisma?.book.findUnique({
        where: { id: String(bookId) },
      });
      if (!book) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }
      const updatedBook = await prisma?.book.update({
        where: { id: String(bookId) },
        data: {
          author: author || book.author,
          image_url: image_url || book.image_url,
          link_url: link_url || book.link_url,
          title: title || book.title,
        },
      });
      return res
        .status(200)
        .json({ message: "Livro foi atualizado", data: updatedBook });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Livro não foi atualizado" });
    }
  } else if (req.method === "GET" && bookId) {
    try {
      const book = await prisma?.book.findUnique({
        where: { id: String(bookId) },
      });
      return res
        .status(200)
        .json({ message: "Livro foi encontrado", data: book });
    } catch (error) {
      console.log(error);

      return res.status(400).json({ message: "Livro não foi encontrado" });
    }
  } else if (req.method === "PATCH") {
    try {
      const book = await prisma?.book.findUnique({
        where: { id: String(bookId) },
      });
      if (!book) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }
      const updatedBook = await prisma?.book.update({
        where: { id: String(bookId) },
        data: {
          author: author || book.author,
          image_url: image_url || book.image_url,
          link_url: link_url || book.link_url,
          title: title || book.title,
        },
      });
      return res
        .status(200)
        .json({ message: "Livro foi atualizado", data: updatedBook });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Livro não foi atualizado" });
    }
  } else {
    console.log("Note could not be modified");
    res.status(400).json({ message: "Livro não foi atualizado" });
  }
}
