import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const SharedLayout = () => {
  return (
    <>
      <div className="navParent">
        <NavBar />
      </div>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
export default SharedLayout;
