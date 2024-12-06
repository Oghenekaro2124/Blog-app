import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useGetCurrentUserMutation } from "../lib/APIs/userApis";
import { useLogoutUserMutation } from "../lib/APIs/authApis";

const NavigationBar = () => {
  const [getCurrentUser, { isSuccess }] = useGetCurrentUserMutation();

  const [logOutUser] = useLogoutUserMutation();
  const { user } = useSelector((state) => state.userState);
  useEffect(() => {
    getCurrentUser();
  }, []);

  const onLogoutUser = async () => {
    await logOutUser();
  };

  return (
    <nav className="navbar navbar-expand-md bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Blog Client
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 me-auto mb-lg-0"></ul>
          <ul className="navbar-nav  mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/blogs">
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            {user && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="" onClick={onLogoutUser}>
                    Logout
                  </NavLink>
                </li>
              </>
            )}
            {!user && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/get-started/login">
                  Get Started
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
