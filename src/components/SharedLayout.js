import { Outlet } from "react-router-dom";
import NavBar from './NavBar';

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
export default SharedLayout;