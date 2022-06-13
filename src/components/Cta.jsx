import React from "react";
import Button from "./Button";
const icon4 = require("../assets/images/icon4.png");
const icon5 = require("../assets/images/icon5.png");

const Cta = () => {
  return (
    <div className="cta mt-[100px] bg-[#EEDCDC] p-10 ">
      <div class="w-full max-w-[1200px] m-auto grid grid-cols-1 gap-20 md:grid-cols-2 ">
        <img
          src={require("../assets/images/image4.png")}
          alt=""
          class="w-1/2 m-auto  animate-fade-in-right lg:animate-fade-in-left"
        />
        <div class="flex flex-col items-center md:items-start md:justify-center animate-fade-in-left lg:animate-fade-in-right">
          <h4 class="text-center text-[#F54748] uppercase md:text-left">
            Download our app
          </h4>
          <h2 class="text-2xl text-center capitalize md:text-left">
            Get the Groceries app order more easily.
          </h2>
          <p class="mt-6 text-md text-center text-[#676767] md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
          <div class="flex gap-3 mt-[60px]">
            <Button
              name="App Store"
              rounded={true}
              icon={icon4}
              borderColor="#EEDCDC"
            />
            <Button
              name="Play Store"
              rounded={true}
              icon={icon5}
              borderColor="#EEDCDC"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
