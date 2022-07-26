import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const isLogged = useSelector((state) => state.user.isLogged);

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
export default PrivateRoute;
