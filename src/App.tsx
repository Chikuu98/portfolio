import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import { Home } from "./pages/home/home";
import Header from "./components/header";
import { Footer } from "./components/footer/footer";
import { About } from "./pages/about/about";
import { Service } from "./pages/service/service";
import { SendMail } from "./pages/sendMail/sendMail";
import { Technologies } from "./pages/technologies/technologies";
import { Projects } from "./pages/projects/projects";
import { AgeProvider } from "./contexts/AgeProvider";
import ScrollToTop from "./components/ScrollToTop";
import CelebrationPage from "./pages/newYearWish/newYearWish";
import CelebrationBuilder from "./pages/celebrationBuilder/celebrationBuilder";

const Layout = () => {
  return (
    <div className="main flex flex-col min-h-screen">
      <AgeProvider>
        <Header />
        <div className="flex-grow pt-[72px]">
          <ScrollToTop />
          <AnimatedOutlet />
        </div>
        <Footer />
      </AgeProvider>
    </div>
  );
};

const AnimatedOutlet = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, duration: 0.5 }}
        className="h-full"
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
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
        { path: "/service", element: <Service /> },
        {
          path: "/sendMail",
          element: <SendMail />,
        },
        {
          path: "/technologies",
          element: <Technologies />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/celebration-builder",
          element: <CelebrationBuilder />,
        },
      ],
    },
    {
      path: "/newYearWish",
      element: (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CelebrationPage />
        </motion.div>
      ),
    },
    {
      // Birthday page route (same component, different occasion)
      path: "/birthday",
      element: (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CelebrationPage />
        </motion.div>
      ),
    },
  ],
  {
    basename: "/portfolio", // 👈 important for GitHub Pages
  }
);

  return <RouterProvider router={router} />;
}

export default App;
