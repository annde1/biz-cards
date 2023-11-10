import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
const AdminGuard = ({ children }) => {
  const isAdmin = useSelector((store) => store.authSlice.userData?.isAdmin);
  if (isAdmin) {
    return children;
  } else {
    return <Navigate to={ROUTES.LOGIN} replace={true} />;
  }
};
export default AdminGuard;
