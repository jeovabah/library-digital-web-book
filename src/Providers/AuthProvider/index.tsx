import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: PropsChildren) => {
  const [user, setUser] = useState<DataLogin>({} as DataLogin);
  const [loadingSpinner, setLoadingSpinner] = useState<boolean>(true);
  const router = useRouter();

  const handleLogin = (data: DataLogin) => {
    localStorage.setItem("user", JSON.stringify(data));

    setUser(data);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({} as DataLogin);
  };

  const handleVerifyUser = () => {
    const user = localStorage.getItem("user");
    console.log(user);
    if (user) {
      setUser(JSON.parse(user));
      // route to home page
      router.push("/Home");
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
    () => ({ user, handleLogin, handleLogout, loadingSpinner }),
    [user, handleLogin, handleLogout, loadingSpinner]
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
