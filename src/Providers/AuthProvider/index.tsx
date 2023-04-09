import { APP_ROUTES } from "@/Routes";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: PropsChildren) => {
  const [user, setUser] = useState<DataLogin>({} as DataLogin);
  const [loadingSpinner, setLoadingSpinner] = useState<boolean>(true);
  const router = useRouter();

  const handleLogin = (data: DataLogin) => {
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("token", "12345");
    setUser(data);

    router.push("/Home");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({} as DataLogin);
  };

  const handleVerifyUser = (isRoute = false) => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
      // route to home page
      isRoute && router.push(APP_ROUTES.private.home.path);
    }
    setTimeout(() => {
      handleSplash();
    }, 1000);
  };

  const handleSplash = () => {
    setLoadingSpinner(false);
  };

  const setHeadersOnApi = () => {
    if (user) {
      // api.defaults.headers.Authorization = `Bearer ${user.token}`;
    }
  };

  useEffect(() => {
    handleVerifyUser();
    setHeadersOnApi();
  }, []);

  const value = useMemo(
    () => ({
      user,
      handleLogin,
      handleLogout,
      loadingSpinner,
      isAuntenticated: Object.keys(user).length > 0,
      handleVerifyUser,
    }),
    [user, handleLogin, handleLogout, loadingSpinner, handleVerifyUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
