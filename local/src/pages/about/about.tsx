
export const About = () => {
  return (
    <div className="container mx-auto px-10 py-10 bg-background text-text">
      <h1 className="text-6xl font-bold text-white my-10 text-center">About Me</h1>

      {/* Introduction Section */}
      <section className="bg-primary py-10 mb-10 px-10 rounded-lg shadow-md">
        <h2 className="text-3xl font-extrabold text-secondary mb-4 text-center">Introduction</h2>
        <p className="text-lg text-text mb-4 leading-relaxed">
          Hello! I’m Chiran Jeewantha, a passionate web developer with a strong
          background in both frontend and backend technologies. I specialize in
          building scalable and efficient web applications that provide seamless
          user experiences. My goal is to combine creative designs with
          functional solutions.
        </p>
        <p className="text-lg text-text mb-4 leading-relaxed">
          I have a deep interest in solving complex problems with technology and
          believe in continuous learning to keep up with the evolving tech
          industry.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-background py-10 mb-10 px-10 rounded-lg shadow-md">
        <h2 className="text-3xl font-medium text-primary mb-4 text-center">Skills</h2>
        <ul className="list-disc list-inside text-lg text-text space-y-2 mx-auto max-w-lg">
          <li>Frontend: React, JavaScript, HTML, CSS, Tailwind CSS</li>
          <li>Backend: Node.js, Express, PHP, Laravel</li>
          <li>Database: MySQL, MongoDB</li>
          <li>Version Control: Git, GitHub</li>
          <li>Others: Docker, Firebase, GraphQL, REST APIs</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="bg-background-alt py-10 mb-10 px-10 rounded-lg">
        <h2 className="text-3xl font-medium text-primary mb-4 text-center">Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-primary">Web Developer</h3>
            <p className="text-lg text-text mb-2">ABC Solutions (2021 - Present)</p>
            <ul className="list-disc list-inside text-lg text-text space-y-2">
              <li>Developed and maintained web applications using React and Node.js.</li>
              <li>Implemented responsive designs and optimized web performance.</li>
              <li>Collaborated with cross-functional teams to build scalable solutions.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary">Junior Developer</h3>
            <p className="text-lg text-text mb-2">XYZ Technologies (2019 - 2021)</p>
            <ul className="list-disc list-inside text-lg text-text space-y-2">
              <li>Assisted in the development of client-facing applications using React and PHP.</li>
              <li>Worked on database integration and API development with Laravel and MySQL.</li>
              <li>Participated in code reviews and debugging sessions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-background py-10 mb-10 px-10 rounded-lg">
        <h2 className="text-3xl font-medium text-primary mb-4 text-center">Education</h2>
        <div>
          <h3 className="text-2xl font-semibold text-primary">Bachelor of Information Technology (BIT)</h3>
          <p className="text-lg text-text mb-2">University of Moratuwa (2024 - Present)</p>
          <p className="text-lg text-text mb-4">
            Currently pursuing a degree in Information Technology with a focus on software development and web technologies.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-primary">Diploma in Software Engineering</h3>
          <p className="text-lg text-text mb-2">ABC Institute (2018 - 2020)</p>
          <p className="text-lg text-text">
            Completed a diploma program specializing in software engineering, including modules on database systems, algorithms, and project management.
          </p>
        </div>
      </section>

      {/* Personal Information Section */}
      <section className="bg-background-alt py-10 mb-10 px-10 rounded-lg">
        <h2 className="text-3xl font-medium text-primary mb-4 text-center">Personal Information</h2>
        <ul className="list-disc list-inside text-lg text-text space-y-2 mx-auto max-w-lg">
          <li>Age: 26</li>
          <li>Location: Colombo, Sri Lanka</li>
          <li>Email: chiranjonline@gmail.com</li>
          <li>Phone: +94 77 9980 990</li>
        </ul>
      </section>

      {/* Closing Section */}
      <section className="bg-background py-10 mb-10 px-10 rounded-lg">
        <h2 className="text-3xl font-medium text-primary mb-4 text-center">Let’s Connect</h2>
        <p className="text-lg text-text mb-4 leading-relaxed text-center">
          I'm always open to collaborating on exciting projects, whether it's
          developing software or exploring new technologies. Feel free to reach
          out if you have any questions or if you'd like to work together.
        </p>
      </section>
    </div>
  );
};
