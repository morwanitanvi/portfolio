// import React from "react";

type HeaderButtonProps = {
  item: {
    sectionId: string;
    label: string;
  };
  scrollToSection: (id: string) => void;
};

const HeaderButton = (props: HeaderButtonProps) => {
  const item = props.item;
  return (
    <button
      key={item.sectionId}
      onClick={() => props.scrollToSection(item.sectionId)}
      className="!bg-transparent text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 relative group"
    >
      {item.label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
    </button>
  );
};

export default HeaderButton;
