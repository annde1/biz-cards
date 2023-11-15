import { Route, Routes } from "react-router-dom";

import ROUTES from "./ROUTES";
import HomePage from "../pages/home/HomePage";
import RegisterPage from "../pages/register/RegisterPage";
import Error404Page from "../pages/404/Error404Page";
import LoginPage from "../pages/login/LoginPage";
import EditCardPage from "../pages/EditCardPage/EditCardPage";
import Css1Component from "../playground/l1/Css1Component";
import Effect1 from "../playground/l7/Effect1";
import Effect2 from "../playground/l7/Effect2";
import Effect3Page from "../playground/l7/Effect3Page";
import StateCompo from "../playground/l7/stateCompo";
import CounterPage from "../playground/l7/CustomHooks/CounterPage";
import RenderPage9 from "../playground/l9/memo/RenderPage9";
import AnimalComponent from "../playground/l9/useCallback/AnimalComponent";
import CounterL9Page from "../playground/l9/useCallback/CounterL9Page";
import UseMemoPage from "../playground/l9/useMemo/UseMemoPage";
import CarTargilPage from "../playground/l9/targil/CarTargilPage";
import CounterDisplay from "../playground/l11/CounterDisplay";
import CounterActionsPage from "../playground/l11/CounterActionsPage";
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
      <Route path="/l9">
        <Route path="render" element={<RenderPage9 />} />
        <Route path="callback" element={<AnimalComponent />} />
        <Route path="callback2" element={<CounterL9Page />} />
        <Route path="usememo" element={<UseMemoPage />} />
        <Route path="targil" element={<CarTargilPage />} />
      </Route>
      <Route path="/l11" element={<CounterDisplay />}>
        <Route path="action" element={<CounterActionsPage />} />
      </Route>
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
};
export default Router;
