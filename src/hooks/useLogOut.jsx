import { useDispatch } from "react-redux";
import { clearToken } from "../service/storageService";
import { authActions } from "../store/authSlice";
const useLogOut = () => {
  const dispatch = useDispatch();
  clearToken();
  dispatch(authActions.logout());
};
export default useLogOut;
