import React, { useState, useEffect } from "react";
import "boxicons";

const Navbar = () => {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  const [isShowMenu, setIsShowMenu] = useState(
    windowDimenion.winWidth > 1024 ? true : false
  );

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  console.log(windowDimenion);

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);
  return (
    <div class="w-full h-16 bg-white fixed">
      <div class="w-full h-full max-w-[1200px] m-auto flex justify-between items-center bg-white relative">
        <div class="ml-3 flex items-center gap-1">
          <img
            src={require("../assets/images/logo.png")}
            alt=""
            class="w-15 h-9 cursor-pointer"
          />
        </div>
        {isShowMenu ? (
          <ul class="w-full h-[calc(100vh-64px)] fixed top-16 bg-white animate-fade-in-right lg:w-auto lg:h-[80%] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 lg:flex lg:animate-none">
            <li class="active px-6 py-3 cursor-pointer transition-all ">
              Home
            </li>
            <li class="px-6 py-3 cursor-pointer hover:text-[#F54748] transition-all">
              Menu
            </li>
            <li class="px-6 py-3 cursor-pointer hover:text-[#F54748] transition-all">
              Service
            </li>
            <li class="px-6 py-3 cursor-pointer hover:text-[#F54748] transition-all">
              Shop
            </li>
          </ul>
        ) : null}
        <box-icon
          name="menu"
          class="mr-3 cursor-pointer lg:hidden sm"
          onClick={() => setIsShowMenu(!isShowMenu)}
        ></box-icon>
      </div>
    </div>
  );
};

export default Navbar;
