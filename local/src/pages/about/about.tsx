import { useAge } from "../../contexts/AgeProvider";
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaLaravel,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaBitbucket,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNestjs,
  SiMysql,
  SiMongodb,
  SiSpringboot,
  SiJira,
  SiPostman,
} from "react-icons/si";
import DownloadCVButton from "../../components/Buttons/DownloadCVButton";
import { Link } from "react-router-dom";

export const About = () => {
  const { age } = useAge();

  return (
    <div className="container mx-auto px-10 py-10 bg-background text-text">
      <h1 className="text-6xl font-bold text-white my-10 text-center">
        About Me
      </h1>

      {/* Introduction Section */}
      <section className="bg-secondary py-10 mb-10 px-10 rounded-lg text-center">
        <h2 className="text-4xl font-extrabold text-primary mb-10">
          Introduction
        </h2>
        <p className="text-lg text-text mb-4 leading-relaxed italic">
          &nbsp;&nbsp;&nbsp;&nbsp;" Hello there! I'm Chiran Jeewantha
          Vidanagamage, a dedicated Full Stack Developer based in Sri Lanka. At{" "}
          {age}, my journey in the world of technology has been driven by a
          profound passion for creating innovative solutions through code. As an
          Associate Software Engineer, I specialize in full-stack development,
          with expertise in Nest.js, React.js, Laravel, Vue.js, and TypeScript.
          My work revolves around turning ideas into reality by leveraging
          cutting-edge technologies and best coding practices.
        </p>
        <p className="text-lg text-text mb-4 leading-relaxed italic">
          I have a deep interest in solving complex problems with technology and
          believe in continuous learning to keep up with the evolving tech
          industry. "
        </p>
        <DownloadCVButton />
      </section>

      {/* Skills Section */}
      <section className="bg-background-alt py-12 px-8 mb-10 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-primary mb-6 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-5xl">
          {/* Frontend */}
          <div className="text-center">
            <h3 className="text-lg font-medium text-white mb-4">Frontend</h3>
            <div className="flex justify-center gap-5">
              <FaReact
                className="text-primary text-3xl hover:scale-110 transition-transform"
                title="React"
              />
              <FaVuejs
                className="text-green-500 text-3xl hover:scale-110 transition-transform"
                title="Vue.js"
              />
              <SiTailwindcss
                className="text-blue-400 text-3xl hover:scale-110 transition-transform"
                title="Tailwind CSS"
              />
            </div>
          </div>

          {/* Backend */}
          <div className="text-center">
            <h3 className="text-lg font-medium text-white mb-4">Backend</h3>
            <div className="flex justify-center gap-5">
              <SiNestjs
                className="text-red-500 text-3xl hover:scale-110 transition-transform"
                title="NestJS"
              />
              <FaNodeJs
                className="text-green-600 text-3xl hover:scale-110 transition-transform"
                title="Node.js"
              />
              <FaLaravel
                className="text-orange-500 text-3xl hover:scale-110 transition-transform"
                title="Laravel"
              />
              <SiSpringboot
                className="text-green-700 text-3xl hover:scale-110 transition-transform"
                title="Spring Boot"
              />
            </div>
          </div>

          {/* Database */}
          <div className="text-center">
            <h3 className="text-lg font-medium text-white mb-4">Database</h3>
            <div className="flex justify-center gap-5">
              <SiMysql
                className="text-blue-600 text-3xl hover:scale-110 transition-transform"
                title="MySQL"
              />
              <SiMongodb
                className="text-green-500 text-3xl hover:scale-110 transition-transform"
                title="MongoDB"
              />
            </div>
          </div>

          {/* Version Control */}
          <div className="text-center">
            <h3 className="text-lg font-medium text-white mb-4">
              Version Control
            </h3>
            <div className="flex justify-center gap-5">
              <FaGitAlt
                className="text-orange-600 text-3xl hover:scale-110 transition-transform"
                title="Git"
              />
              <FaGithub
                className="text-gray-700 text-3xl hover:scale-110 transition-transform"
                title="GitHub"
              />
              <FaGitlab
                className="text-orange-400 text-3xl hover:scale-110 transition-transform"
                title="GitLab"
              />
              <FaBitbucket
                className="text-blue-600 text-3xl hover:scale-110 transition-transform"
                title="Bitbucket"
              />
            </div>
          </div>
        </div>

        {/* Other Tools */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-medium text-white mb-4">Other Tools</h3>
          <div className="flex justify-center gap-5">
            <FaDocker
              className="text-blue-400 text-3xl hover:scale-110 transition-transform"
              title="Docker"
            />
            <SiPostman
              className="text-orange-600 text-3xl hover:scale-110 transition-transform"
              title="Postman"
            />
            <SiJira
              className="text-blue-500 text-3xl hover:scale-110 transition-transform"
              title="Jira"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-background py-12 px-10 rounded-lg">
        <h2 className="text-4xl font-extrabold text-primary mb-10 text-center">
          Experience
        </h2>
        <div className="space-y-8">
          {/* Cyber Concepts */}
          <div className="timeline-item relative pl-10">
            <div className="absolute left-2 top-5 w-2 h-2 bg-accent rounded-full"></div>
            <h3 className="text-2xl font-semibold text-primary mb-2">
              <span className="text-accent">Associate Software Engineer</span> @{" "}
              <span className="text-highlight font-medium italic">
                Cyber Concepts
              </span>
            </h3>
            <p className="text-lg text-text mb-4 italic">
              <span className="font-bold text-accent">Nov 2023 - Present</span>{" "}
              | Full-time - Remote
            </p>
            <ul className="list-disc list-inside text-lg text-text space-y-2">
              <li>
                Contributing to large-scale projects with a focus on version
                control and deployment.
              </li>
              <li>
                Actively collaborating in team settings, sharing knowledge, and
                proposing innovative ideas.
              </li>
            </ul>
          </div>

          {/* Waverista */}
          <div className="timeline-item relative pl-10">
            <div className="absolute left-2 top-5 w-2 h-2 bg-accent rounded-full"></div>
            <h3 className="text-2xl font-semibold text-primary mb-2">
              <span className="text-accent">Associate Software Engineer</span> @{" "}
              <span className="text-highlight font-medium">Waverista</span>
            </h3>
            <p className="text-lg text-text mb-4 italic">
              <span className="font-bold text-accent">Sep 2023 - Present</span>{" "}
              | Part-time - Remote
            </p>
            <ul className="list-disc list-inside text-lg text-text space-y-2">
              <li>
                Developing and delivering software solutions independently while
                managing client requirements and project timelines.
              </li>
            </ul>
          </div>

          {/* Sanmark Solutions (Full-time) */}
          <div className="timeline-item relative pl-10">
            <div className="absolute left-2 top-5 w-2 h-2 bg-accent rounded-full"></div>
            <h3 className="text-2xl font-semibold text-primary mb-2">
              <span className="text-accent">Associate Software Engineer</span> @{" "}
              <span className="text-highlight font-medium">
                Sanmark Solutions
              </span>
            </h3>
            <p className="text-lg text-text mb-4 italic">
              <span className="font-bold text-accent">Jan 2023 - Aug 2023</span>{" "}
              | Full-time - On-site
            </p>
            <ul className="list-disc list-inside text-lg text-text space-y-2">
              <li>
                Completed self-research on NestJS in a short period and
                implemented an API using NestJS.
              </li>
              <li>
                Contributed to the development of large-scale projects and
                managed version control as well as the deployment process.
              </li>
              <li>
                Worked actively in teams, proposing new ideas and sharing
                knowledge regularly.
              </li>
            </ul>
          </div>

          {/* Sanmark Solutions (Internship) */}
          <div className="timeline-item relative pl-10">
            <div className="absolute left-2 top-5 w-2 h-2 bg-accent rounded-full"></div>
            <h3 className="text-2xl font-semibold text-primary mb-2">
              <span className="text-accent">Software Engineer</span>{" "}
              (Internship) @{" "}
              <span className="text-highlight font-medium">
                Sanmark Solutions
              </span>
            </h3>
            <p className="text-lg text-text mb-4 italic">
              <span className="font-bold text-accent">Jun 2022 - Jan 2023</span>{" "}
              | Internship - On-site
            </p>
            <ul className="list-disc list-inside text-lg text-text space-y-2">
              <li>
                Successfully completed a six-month internship focused on
                full-stack development.
              </li>
              <li>
                Practically used Agile methodology with Laravel-based real-world
                projects and practiced version control, Docker, coding best
                practices, and teamwork.
              </li>
              <li>
                Gained hands-on experience with deployment and troubleshooting
                in production environments.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-background-alt py-10 mb-10 px-10 rounded-lg">
        <h2 className="text-4xl font-extrabold text-primary mb-10 text-center">
          Education
        </h2>
        <div className="space-y-8">
          {/* Bachelor of Information Technology (Final Year) */}
          <div className="timeline-item relative pl-10">
            <div className="absolute left-2 top-5 w-2 h-2 bg-accent rounded-full"></div>
            <h3 className="text-2xl font-semibold text-primary mb-2">
              <span className="text-accent">
                Bachelor of Information Technology
              </span>{" "}
              <span className="font-medium">
                (BIT) - Final Year Undergraduate
              </span>
            </h3>
            <p className="text-lg text-text mb-4 italic">
              <span className="font-bold text-accent">
                University of Moratuwa
              </span>{" "}
              <span className="font-medium">(2024 - Present)</span>
            </p>
            <p className="text-lg text-text">
              Currently pursuing a degree in Information Technology with a focus
              on software development and web technologies.
            </p>
          </div>

          {/* Higher National Diploma in Information Technology */}
          <div className="timeline-item relative pl-10">
            <div className="absolute left-2 top-5 w-2 h-2 bg-accent rounded-full"></div>
            <h3 className="text-2xl font-semibold text-primary mb-2">
              <span className="text-accent">
                Higher National Diploma in Information Technology
              </span>{" "}
              <span className="font-medium">(NVQ Level 6)</span>
            </h3>
            <p className="text-lg text-text mb-4 italic">
              <span className="font-bold text-accent">
                SLIATE - Sri Lanka Institute of Advanced Technological Education
              </span>{" "}
              (2019 - 2022)
            </p>
            <p className="text-lg text-text">
              Completed the Higher National Diploma program specializing in
              Information Technology.
            </p>
          </div>

          {/* Diploma in IT */}
          <div className="timeline-item relative pl-10">
            <div className="absolute left-2 top-5 w-2 h-2 bg-accent rounded-full"></div>
            <h3 className="text-2xl font-semibold text-primary mb-2">
              <span className="text-accent">Diploma in IT</span>
              <span className="font-medium">(D-TEC)</span>
            </h3>
            <p className="text-lg text-text mb-4 italic">
              <span className="font-bold text-accent">Esoft Metro Campus</span>{" "}
              (2018 - 2019)
            </p>
            <p className="text-lg text-text">
              Completed a diploma in IT (Pearson assured) with a focus on core
              IT skills.
            </p>
          </div>

          {/* A/L and O/L Education */}
          <div className="timeline-item relative pl-10">
            <div className="absolute left-2 top-5 w-2 h-2 bg-accent rounded-full"></div>
            <h3 className="text-2xl font-semibold text-primary mb-2">
              <span className="text-accent">
                A/L <span className="font-medium text-primary">(Maths)</span> &
                O/L
              </span>
            </h3>
            <p className="text-lg text-text mb-4 italic">
              <span className="font-bold text-accent">St. Thomas College</span>{" "}
              (2009 - 2018)
            </p>
            <p className="text-lg text-text">
              Successfully passed A/L (Mathematics) in 2018 and O/L in 2014.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Information Section */}
      <section className="bg-background py-10 mb-10 px-10 rounded-lg">
        <h2 className="text-4xl font-extrabold text-primary mb-10 text-center">
          Personal Information
        </h2>
        <ul className="list-disc list-inside text-lg text-text space-y-2 mx-auto max-w-lg">
          <li>Age: {age}</li>
          <li>Location: Matara, Sri Lanka</li>
          <li>Email: chiranjonline@gmail.com</li>
          <li>Phone: +94 77 9980 990</li>
        </ul>
      </section>

      {/* Closing Section */}
      <section className="bg-background-alt py-10 mb-10 px-10 rounded-lg text-center">
        <h2 className="text-4xl font-extrabold text-primary mb-10">
          Let’s Connect
        </h2>
        <p className="text-lg text-text mb-4 leading-relaxed">
          I'm always open to collaborating on exciting projects, whether it's
          developing software or exploring new technologies. Feel free to reach
          out if you have any questions or if you'd like to work together.
        </p>
        <div className="mt-5">
        <Link
              to="/sendMail"
              className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-primary transition-colors font-medium text-xl"
            >
              Contact Me
            </Link>
        </div>
      </section>
    </div>
  );
};
