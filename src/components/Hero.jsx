import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="hero pt-16 grid grid-cols-1 md:grid-cols-2">
      <img
        src={require("../assets/images/image1.png")}
        alt=""
        class="md:order-2 animate-fade-in-left lg:animate-fade-in-right"
      />
      <div className="md:order-1 md:mt-14 animate-fade-in-right lg:animate-fade-in-left">
        <h1 class="ml-2 mt-4 text-3xl text-center lg:text-5xl lg:text-left lg:font-bold lg:leading-normal lg:ml-10">
          Groceries delivered in as little as
          <span class="text-[#F54748]"> 2 hours</span>
        </h1>
        <p class="text-center mt-4 ml-2 text-[#676767] lg:text-lg lg:text-left lg:leading-normal lg:ml-10">
          Grocen atssures fresh grocery every morning to your family without
          getting out in this pandemic.
        </p>
        <div className="button ml-2 mt-10 flex justify-center lg:ml-10 lg:justify-start">
          <Button name="Order Now" />
          <div className="flex items-center gap-3">
            <div class="h-14 w-14 ml-3 bg-white rounded-full flex justify-center items-center shadow-lg cursor-pointer hover:shadow-none transition-all">
              <box-icon name="play" class="fill-[#FDC55E]"></box-icon>
            </div>
            <span class="cursor-pointer hover:text-[#F54748] transition-all">
              Order Process
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
