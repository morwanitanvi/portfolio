// import React from "react";
import HeaderButton from "./header-button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { label: "Home", sectionId: "home" },
    { label: "About", sectionId: "about" },
    { label: "Projects", sectionId: "projects" },
    { label: "Skills", sectionId: "skills" },
    { label: "Contact", sectionId: "contact" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <span className="text-2xl font-bold bg-clip-text text-black">
            Tanvi Morwani
          </span>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex space-x-8 bg-transparent">
            {navItems.map((item) => (
              <HeaderButton item={item} scrollToSection={scrollToSection} />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          {/* <button className="md:hidden text-gray-700 hover:text-purple-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
