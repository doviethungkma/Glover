import React from "react";

const Button = ({ icon, name, rounded, borderColor }) => {
  return (
    <>
      {rounded ? (
        <button
          class={`px-7 py-4 text-[${borderColor}] border-2 border-[${borderColor}] rounded-xl text-md hover:bg-[${borderColor}] hover:text-black transition-all`}
        >
          <div class="flex items-center gap-3">
            {icon ? <img src={icon} alt="" class="w-5 h-5" /> : ""} {name}
          </div>
        </button>
      ) : (
        <button class="px-7 py-4 bg-[#F86061] text-white rounded-xl text-md hover:opacity-80 transition-all">
          <img src={icon} alt="" /> {name}
        </button>
      )}
    </>
  );
};

export default Button;
