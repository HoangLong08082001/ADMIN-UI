import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const WebRoute = [
  { path: "/", component: Login, layout: null },
  { path: "/home", component: Home },
];

export { WebRoute };
