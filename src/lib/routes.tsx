import AuthPage from "@pages/AuthPage/AuthPage";
import MainPage from "@pages/MainPage/MainPage";

const routes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
];

export default routes;
