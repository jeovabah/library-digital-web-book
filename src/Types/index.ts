interface AuthContextType {
  user: DataLogin;
  handleLogin: (data: DataLogin) => void;
  handleLogout: () => void;
  loadingSpinner: boolean;
  isAuntenticated: boolean;
  handleVerifyUser: (isRoutes?: boolean) => void;
}
interface PropsChildren {
  children: React.ReactNode;
}
interface DataLogin {
  email: string;
  password: string;
}
