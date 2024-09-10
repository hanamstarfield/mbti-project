import { Navigate } from "react-router-dom";
import { useUserStore } from "../zustand/useUserStore";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserStore();
  if (!user) {
    alert("먼저 로그인 해주세요!");
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
