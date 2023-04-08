import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Box,
  Button,
  FormControl,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useAuth } from "@/Providers/AuthProvider";
import { useState } from "react";
import { SpinnerFull } from "@/Components/SpinnerFull";

export default function Login() {
  const { handleLogin, loadingSpinner } = useAuth();

  const [user, setUser] = useState<DataLogin>({} as DataLogin);
  return (
    <div className="w-full h-full flex items-center justify-center sm:flex-col  px-8">
      <div className="lg:w-1/2 max-sm:w-full max-sm:h-full max-sm:items-center max-sm:justify-center max-sm:flex max-sm:flex-col sm:w-full">
        <Text
          fontSize="4xl"
          fontWeight="bold"
          color="gray.900"
          className="text-center"
        >
          Bem-vindo!
        </Text>
        <Text
          fontSize="xl"
          fontWeight="normal"
          color="gray.900"
          className="text-center"
        >
          Faça login para continuar
        </Text>
        {loadingSpinner && <SpinnerFull />}

        <FormControl mt="2rem">
          <Input
            mt="1rem"
            onChange={(e) =>
              setUser({
                ...user,
                email: e.target.value,
              })
            }
            placeholder="E-mail"
          />
          <Input
            mt="1rem"
            onChange={(e) =>
              setUser({
                ...user,
                password: e.target.value,
              })
            }
            placeholder="Senha"
          />

          <Button
            mt="1rem"
            colorScheme="blue"
            className="w-full"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin(user);
            }}
            onClick={() => handleLogin(user)}
          >
            Entrar
          </Button>
        </FormControl>
      </div>
    </div>
  );
}
