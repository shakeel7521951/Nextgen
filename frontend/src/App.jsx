import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
