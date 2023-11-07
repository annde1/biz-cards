import { useDispatch } from "react-redux";
import { clearToken } from "../service/storageService";
import { authActions } from "../store/authSlice";
const useLogOut = () => {
  const dispatch = useDispatch();
  //1. Clear token form local/session storage:
  clearToken();
  //2.Update redux store:
  dispatch(authActions.logout());
};
export default useLogOut;
