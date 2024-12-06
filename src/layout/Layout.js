import { useLocation } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import AppRoutes from "./AppRoutes";
import { SEO } from "../helpers/SEO";
const Layout = () => {
  const location = useLocation();

  const { pathname } = location;
  let titleData = {};

  if (pathname === "/") {
    titleData = {
      title: "Blog Client. Home",
      metaDescription: "This is the home page of the blog client",
    };
  } else if (pathname === "/blogs") {
    titleData = {
      title: "Blog Client. Blogs",
      metaDescription: "This is the blogs page of the blog client",
    };
  } else if (pathname === "/about") {
    titleData = {
      title: "Blog Client. Home",
      metaDescription: "This is the home page of the blog client",
    };
  } else if (pathname === "/get-started") {
    titleData = {
      title: "Blog Client. Get Started",
      metaDescription: "This is the get started page of the blog client",
    };
  }

  SEO(titleData);
  return (
    <>
      <header className="Fixed-top">
        <NavigationBar />
      </header>
      <main styles={{ mrginTop: "150px" }}>
        <AppRoutes />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
