import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineBook } from "react-icons/ai";
import { BsBookmarkHeart } from "react-icons/bs";
export const APP_ROUTES = {
  private: {
    home: {
      path: "/Home",
      name: "Home",
      icon: <BiHomeAlt2 size={"1.5rem"} />,
    },
    book: {
      path: "/Book",
      name: "Book",
      icon: <AiOutlineBook size={"1.5rem"} />,
    },
    bookmark: {
      path: "/Bookmark",
      name: "Bookmark",
      icon: <BsBookmarkHeart size={"1.5rem"} />,
    },
    unauthorized: {
      path: "/unauthorized",
      name: "Unauthorized",
      icon: "unauthorized",
    },
  },
  public: {
    login: "/",
    register: "/register",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
  },
};

export const checkIsPublicRoute = (pathname: string) => {
  const publicRoutes = Object.values(APP_ROUTES.public);
  return publicRoutes.includes(pathname);
};
