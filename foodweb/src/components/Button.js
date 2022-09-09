import React from "react";

const Button = ({ title }) => {
  return (
      <button
        type="button"
        className="bg-primary hover:bg-transparent hover:border-[3px] hover:border-primary hover:tracking-widest text-white py-3 px-6 rounded-md text-3xl font-bold mt-40"
      >
        {title}
      </button>
  );
};

export default Button;
