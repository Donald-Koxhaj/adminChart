import React from "react";

const Button = ({ icon, bgColor, color, size, text, borderRadius }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text} {icon}
    </button>
  );
};

export default Button;
