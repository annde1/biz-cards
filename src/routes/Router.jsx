import { Route, Routes } from "react-router-dom";
import ROUTES from "./ROUTES";
import HomePage from "../pages/home/HomePage";
import RegisterPage from "../pages/register/RegisterPage";
import Error404Page from "../pages/404/Error404Page";
import LoginPage from "../pages/login/LoginPage";
import EditCardPage from "../pages/EditCardPage/EditCardPage";
import CreateCardPage from "../pages/CreateCardPage/CreateCardPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import AdminPage from "../pages/CRM/AdminPage";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import AuthGuard from "../Guard/AuthGuard";
import BizGuard from "../Guard/BizGuard";
import AdminGuard from "../Guard/AdminGuard";
import MyCardsPage from "../pages/MyCardsPage/MyCardsPage";
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage";
import MyProfilePage from "../pages/MyProfilePage/MyProfilePage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route
        path={ROUTES.CREATECARD}
        element={
          <AuthGuard>
            <BizGuard>
              <CreateCardPage />
            </BizGuard>
          </AuthGuard>
        }
      />
      <Route
        path={ROUTES.CRM}
        element={
          <AuthGuard>
            <AdminGuard>
              <AdminPage />
            </AdminGuard>
          </AuthGuard>
        }
      />
      <Route path={`${ROUTES.EDITCARD}/:id`} element={<EditCardPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.FAVORITE} element={<FavoritesPage />} />
      <Route path={ROUTES.MYCARDS} element={<MyCardsPage />} />
      <Route path={ROUTES.EDITPROFILE} element={<EditProfilePage />} />
      <Route path={ROUTES.MYPROFILE} element={<MyProfilePage />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
};
export default Router;
