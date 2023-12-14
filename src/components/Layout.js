import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="layout">
      <Outlet />
      <Footer/>
     </div>
  );
}

export default Layout;
