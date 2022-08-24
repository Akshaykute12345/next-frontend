import { destroyCookie } from "nookies";

import Router from "next/router";

const Logout = () => {
 
  destroyCookie(null, "jwt");
  Router.push("/login");
};

export default Logout;
