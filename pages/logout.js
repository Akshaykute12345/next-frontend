import { destroyCookie } from "nookies";

import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter()
  destroyCookie(null, "jwt");
  router.push("/login");
};

export default Logout;
