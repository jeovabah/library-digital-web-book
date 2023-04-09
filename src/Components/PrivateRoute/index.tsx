import { getUserAuth } from "@/Constants/check-user-auth";
import { APP_ROUTES } from "@/Routes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const PrivateRoute = ({ children }: Props) => {
  const { push } = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    getUserAuth().then((res: boolean | any) => {
      setIsAuth(res);
      if (!res) {
        push(APP_ROUTES.public.login);
      }
    });
  }, [isAuth, push]);

  return (
    <>
      {!isAuth && null}
      {isAuth && children}
    </>
  );
};
