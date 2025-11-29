// import React from "react";
import Header from "../components/header";
import ContentCard from "../components/content-card";
import VideoTile from "../components/video-tile";

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
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <div id="home" className="container mx-auto px-6 pt-24 ">
        <div className="flex md:flex-row flex-col-reverse items-center md:justify-between justify-center w-full">
          <div className="flex flex-col items-center md:pt-50 ">
            <span className="md:text-xl font-bold text-black mb-6 md:self-start text-center">
              Hello, I'm Tanvi,
            </span>

            <p className="md:text-8xl text-4xl font-bold text-gray-700 mb-8 text-center md:text-left">
              Copywriter
            </p>

            <button
              className="md:self-start md:px-8 md:py-3 md:my-20 bg text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => {
                downloadResume();
              }}
            >
              Resume
            </button>
          </div>

          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 mb-8 flex items-center justify-center md:w-120 md:h-120"></div>
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
          <h2 className="md:text-8xl text-4xl font-bold md:text-right text-center md:mb-12 mb-5 text-gray-800">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="md:text-4xl text-2xl md:text-left text-center font-extrabold text-gray-600 mb-6">
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

      {/* Contents Section */}
      <div id="projects" className="container mx-auto px-6 py-20">
        <h2 className="md:text-8xl text-4xl font-bold md:text-left text-center md:mb-12 mb-4 text-gray-800">
          Contents
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <ContentCard
              item={{
                key: project,
                title: `Project ${project} Title`,
                content: `Project ${project} description`,
                tags: ["Tag1", "Tag2", "Tag3"],
              }}
            />
          ))}
        </div>
      </div>

      {/* Intagram Management Section */}
      <div id="skills" className="container mx-auto px-6 py-20 bg-gray-50">
        <h2 className="md:text-6xl text-3xl font-bold md:text-right text-center md:mb-12 mb-5 text-gray-800">
          Instagram Management
        </h2>
        <div>
          <div>
            {[
              "DRmc_dygiqn",
              "TypeScript",
              "Tailwind CSS",
              "Next.js",
              "HTML/CSS",
            ].map((skill) => (
              <VideoTile
                key={skill}
                item={{
                  title: skill,
                  description: `Instagram Reel on ${skill}`,
                  content: `This reel showcases my expertise in ${skill} through engaging content and creative storytelling.`,
                  role: "Content Creator & Manager",
                  goal: "Increase engagement and followers",
                  videoUrl: `https://www.instagram.com/reel/${skill}/`,
                }}
              />
            ))}
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
