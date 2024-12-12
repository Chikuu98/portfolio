import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/home";
import Header from "./components/header";
import { Footer } from "./components/footer/footer";
import { About } from "./pages/about/about";
import { Service } from "./pages/service/service";
import { Contact } from "./pages/contact/contact";
import { Technologies } from "./pages/technologies/technologies";
import { Projects } from "./pages/projects/projects";

function App() {
  const Layout = () => {
    return (
      <div className="main flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow pt-[56px]">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        { path: "/service",
          element: <Service />
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/technologies",
          element: <Technologies />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;