import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="bg-background min-h-screen text-text font-poppins">
      {/* Hero Section */}
      <section className="bg-primary text-text py-20 px-10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg md:text-xl text-text my-10">
            I am <span className='font-extrabold'>Chiran Jeewantha</span>, a passionate software engineer.
          </p>
          <Link
            to="/about"
            className="text-secondary hover:text-secondary-hover text-lg font-medium border-b-2 border-primary pb-1 mt-2 inline-block"
          >
            Learn More About Me
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-background-alt py-20 px-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-primary">About Me</h2>
          <p className="text-lg text-text my-6 max-w-3xl mx-auto">
            I specialize in web and mobile development with a focus on creating seamless and intuitive user experiences. With a background in computer science and a passion for technology, I am always excited to take on new challenges and push the limits of what’s possible.
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <Link
              to="/service"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-hover transition-colors"
            >
              My Services
            </Link>
            <Link
              to="/projects"
              className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent-hover transition-colors"
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
              <p>Building responsive and interactive websites tailored to your needs.</p>
            </div>
            <div className="bg-neutral text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Mobile Development</h3>
              <p>Creating engaging mobile apps for both Android and iOS platforms.</p>
            </div>
            <div className="bg-neutral text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
              <p>Designing intuitive and user-friendly interfaces that engage users.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
