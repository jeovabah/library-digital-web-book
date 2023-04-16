import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../lib/prima";
import {
  validateAluguel,
  validateDevolution,
} from "@/Constants/api/validateAluguel";
import { Book } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bookId = req.query.id;

  const request = req.body;

  // POST - UPDATE BOOK BY ID - /api/book/aluguel/:id
  if (req.method === "POST") {
    return await postAluguel(res, bookId, request);
  }
  if (req.method === "GET") {
    return await getAluguel(res, bookId);
  }
  if (req.method === "PUT") {
    return await updateAluguel(res, request?.id, bookId, request);
  }
}

const postAluguel = async (
  res: NextApiResponse,
  bookId?: any,
  request?: any
) => {
  try {
    const book = await prisma?.book.findUnique({
      where: { id: String(bookId) },
    });
    if (!book) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }
    validateAluguel(request, book);

    const createLineOnAluguel = await prisma?.aluguel.create({
      data: {
        bookId: String(bookId),
        userName: request?.userName,
      },
    });
    // Update book, quantity -1
    await prisma?.book?.update({
      where: { id: String(bookId) },
      data: {
        quantity: book?.quantity - 1,
        available: book?.quantity - 1 > 0 ? true : false,
      },
    });
    return res.status(200).json({
      message: "Livro foi alugado com sucesso por " + request?.userName,
      data: createLineOnAluguel,
    });
  } catch (error: any) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

const getAluguel = async (res: NextApiResponse, bookId?: any) => {
  try {
    const book = await prisma?.book.findUnique({
      where: { id: String(bookId) },
    });
    if (!book) {
      return res.status(404).json({ message: "Livro não encontrado" });
    }
    return res.status(200).json({ data: book });
  } catch (error: any) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

const updateAluguel = async (
  res: NextApiResponse,
  idAluguel?: any,
  bookId?: any,
  request?: any
) => {
  try {
    const book = await prisma?.aluguel?.findUnique({
      where: { id: String(idAluguel) },
    });

    const bookGeneric: Book | any = await prisma?.book?.findUnique({
      where: { id: String(bookId) },
    });

    // return res.status(200).json({ data: bookGeneric });
    if (!book) {
      return res
        .status(404)
        .json({ message: "Aluguel de livro não encontrado" });
    }

    validateDevolution(request, bookGeneric);

    const updateLineOnAluguel = await putStatusAluguel(
      idAluguel,
      request?.status
    );
    // Update book, quantity +1
    await prisma?.book?.update({
      where: { id: String(bookId) },
      data: {
        quantity: bookGeneric?.quantity + 1,
        available: bookGeneric?.quantity + 1 > 0 ? true : false,
      },
    });

    return res.status(200).json({
      message: "Aluguel de livro foi atualizado com sucesso",
      data: updateLineOnAluguel,
    });
  } catch (error: any) {
    console.log(error);
    return res.status(400).json({ message: error?.message });
  }
};

export const putStatusAluguel = async (
  idAluguel: any,
  status: any = "PENDING"
) => {
  const updateLineOnAluguel = await prisma?.aluguel?.update({
    where: { id: String(idAluguel) },
    data: {
      status: status,
    },
  });

  return updateLineOnAluguel;
};
