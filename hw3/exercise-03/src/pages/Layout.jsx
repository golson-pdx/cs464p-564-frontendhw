import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/search" className="nav-link">
                Search
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/houses" className="nav-link">
                Houses
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
