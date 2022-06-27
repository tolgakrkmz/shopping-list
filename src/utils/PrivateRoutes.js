import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ isLogged, children }) => {
  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default PrivateRoutes;
