interface PropsValidateAluguel {
  userName: string;
  bookId: string;
}

export const validateAluguel = (request: PropsValidateAluguel, book: any) => {
  if (request?.userName === "") {
    throw new Error("Nome é obrigatório");
  } else if (request?.userName.length < 3) {
    throw new Error("Nome deve ter no mínimo 3 caracteres");
  } else if (request?.userName.length > 50) {
    throw new Error("Nome deve ter no máximo 50 caracteres");
  } else if (request?.bookId === "") {
    throw new Error("Livro é obrigatório");
  } else if (book?.quantity === 0) {
    throw new Error("Livro não está disponível");
  }
};

export const validateDevolution = (request: any, book: any) => {
  if (book?.id) {
    throw new Error("Id do livro é obrigatório");
  } else if (request?.id === "") {
    throw new Error("Id do aluguel é obrigatório");
  }
};
