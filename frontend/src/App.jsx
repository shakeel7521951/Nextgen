import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./ScrollToTop";

// Lazy loading components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Loading ...</div>}>
        <ScrollToTop />
          <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/services", element: <Services /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
