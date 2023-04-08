interface AuthContextType {
  user: DataLogin;
  handleLogin: (data: DataLogin) => void;
  handleLogout: () => void;
  loadingSpinner: boolean;
}
interface PropsChildren {
  children: React.ReactNode;
}
interface DataLogin {
  email: string;
  password: string;
}
