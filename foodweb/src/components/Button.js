import React from "react";

const Button = ({ title }) => {
  return (
      <button
        type="button"
        className="bg-primary hover:bg-transparent hover:border-[3px] hover:border-primary text-white py-1 px-4 rounded-md text-xl font-bold mt-40"
      >
        {title}
      </button>
  );
};

export default Button;
