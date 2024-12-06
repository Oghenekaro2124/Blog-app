import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ childern, user }) => {
  if (!user) {
    return <Navigate to="/get-started/login" replace />;
  }
  return childern;
};

export default ProtectedRoutes;
