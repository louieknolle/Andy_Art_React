import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram } from "@fortawesome/free-solid-svg-icons";

const mystyle = {
  alignSelf: "center",
};

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div>
          <p style={mystyle}>
            Portfolio currently under development, please view recent work on my
            Instagram.
          </p>
          {/* <FontAwesomeIcon icon={faInstagram} /> */}
          <a
            href="https://www.instagram.com/turning_granular/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i> @turning_granular
          </a>
        </div>
        <Outlet />
      </div>
    </>
  );
};
export default SharedLayout;
