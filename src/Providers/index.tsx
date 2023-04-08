import { AuthProvider } from "./AuthProvider";

interface Props {
  children: React.ReactNode;
}
export const Providers = ({ children }: Props) => {
  return <AuthProvider>{children}</AuthProvider>;
};
