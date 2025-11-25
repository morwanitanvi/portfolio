// import React from "react";
import Header from "../components/header";

const downloadResume = () => {
  // Logic to download resume
  const link = document.createElement("a");
  link.href = "/resume.pdf"; // Place your resume.pdf in the public folder
  link.download = "Tanvi-Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div id="home" className="container mx-auto px-6 pt-24 ">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col items-center pt-50 pl-10">
            <span className="text-xl md:text-xl font-bold text-black mb-6 self-start text-left">
              Hello, I'm Tanvi,
            </span>

            <p className="text-8xl font-bold text-gray-700 mb-8">Copywriter</p>

            <button
              className="self-start px-8 py-3 my-20 bg text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => {
                downloadResume();
              }}
            >
              Resume
            </button>
          </div>

          <div className="w-120 h-120 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 mb-8 flex items-center justify-center"></div>
        </div>
      </div>

      {/* About Section */}
      <div
        id="about"
        className="w-full py-0"
        style={{
          background:
            "linear-gradient(to bottom, #fff 0%, #fff 23%, #DDF6D2 23%, #DDF6D2 100%)",
        }}
      >
        <div className="container px-6 pt-12 pb-12">
          <h2 className="text-8xl font-bold text-right mb-12 text-gray-800">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-4xl font-extrabold text-gray-600 mb-6">
              Hi, My name is Tanvi Morwani,
            </p>
            <p className="text-2xl text-gray-600 mb-6">
              I'm a passionate Full Stack Developer with expertise in building
              modern web applications. With a strong foundation in both frontend
              and backend technologies, I love creating seamless user
              experiences and robust solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="container mx-auto px-6 py-20">
        <h2 className="text-8xl font-bold text-left mb-12 text-gray-800">
          Contents
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Project {project}
                </h3>
                <p className="text-gray-600 mb-4">
                  A brief description of this amazing project and its key
                  features.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="container mx-auto px-6 py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Skills
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Next.js",
                "HTML/CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white rounded-lg shadow text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Backend
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white rounded-lg shadow text-gray-700"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Get In Touch
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-lg text-gray-600 text-center mb-8">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Send Message
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
