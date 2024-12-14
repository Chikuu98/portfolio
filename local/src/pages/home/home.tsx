import { Link } from "react-router-dom";
import DownloadCVButton from "../../components/Buttons/DownloadCVButton";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div className="bg-background min-h-screen text-text font-poppins">
      {/* Hero Section */}
      <section className="bg-primary-hover text-text py-20 px-10">
        <div className="container mx-auto text-center">
          {/* Image */}
          <div className="mb-8">
            <img
              src="/myPic.jpg"
              alt="Chiran Jeewantha"
              className="mx-auto rounded-full h-60 w-60 object-cover border-4 border-white shadow-lg animate-ripple"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            <span className="block md:hidden">WELCOME</span>{" "}
            {/* Visible only on mobile */}
            <span className="hidden md:block">
              Welcome to My Portfolio
            </span>{" "}
            {/* Visible on larger screens */}
          </h1>

          <p className="text-lg md:text-xl text-text my-10">
            I am <span className="font-extrabold">Chiran Jeewantha</span>, a
            passionate software engineer.
          </p>
          <motion.div
            animate={{ x: [-100, 100] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Link
              to="/about"
              className="text-primary hover:text-secondary-hover text-lg font-bold italic  pb-1 mt-2 inline-block"
            >
              {">>>"} Learn more about me {">>>"}
            </Link>
          </motion.div>
          <DownloadCVButton />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-background-alt py-20 px-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-primary">About Me</h2>
          <p className="text-lg text-text my-6 max-w-3xl mx-auto text-justify">
            &nbsp;&nbsp;&nbsp;&nbsp;I'm specialize in software development with
            a mainly focus on web applications, aiming to deliver seamless,
            scalable, and intuitive user experiences. With a strong foundation
            in Information Technology and hands-on experience with technologies
            like Laravel, React, NestJS, SQL and Mongo, I am passionate about
            creating innovative solutions. I am always eager to tackle new
            challenges and continuously enhance my skills in development, team
            collaboration, and system optimization.
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <Link
              to="/service"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-hover transition-colors animate-ripple"
            >
              My Services
            </Link>
            <Link
              to="/projects"
              className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent-hover transition-colors animate-ripple"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20  px-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-primary">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            <div className="bg-neutral text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <p>
                Creating responsive, scalable, and high-performance web
                applications using technologies like React, HTML, CSS, and SQL
                to meet modern web standards.
              </p>
            </div>
            <div className="bg-neutral text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Desktop Applications
              </h3>
              <p>
                Building cross-platform desktop applications using Electron.js
                to deliver seamless user experiences and high-performance
                solutions.
              </p>
            </div>
            <div className="bg-neutral text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">RESTful APIs</h3>
              <p>
                Designing and developing robust RESTful APIs using NestJS,
                focusing on scalability, performance, and ease of integration
                with frontend and third-party services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
