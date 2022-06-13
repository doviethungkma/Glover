import React from "react";
import Button from "./Button";

const Feature = ({
  title,
  subtitle,
  subtitleColor,
  content,
  image,
  reverse,
  rounded,
}) => {
  return (
    <div className="feature mt-[90px] px-4 grid grid-cols-1 gap-6 md:grid-cols-2 md:px-10">
      <img
        src={image}
        alt="abc"
        class={`${
          reverse ? "order-2" : "order-1"
        }  animate-fade-in-right lg:animate-fade-in-left`}
      />
      <div
        class={`mt-10 flex flex-col items-center justify-center md:items-start ${
          reverse ? "order-1" : "order-2"
        }  animate-fade-in-left lg:animate-fade-in-right`}
      >
        <h4 class={`text-center ${subtitleColor} uppercase md: text-left`}>
          {subtitle}
        </h4>
        <h2 class="text-center text-2xl md:text-left">{title}</h2>
        <p class="mt-6 mb-12 text-md text-center text-[#676767] md:text-left">
          {content}
        </p>
        {rounded ? (
          <Button name="Explore Now" rounded={rounded} borderColor="#F86061" />
        ) : (
          <Button name="Explore Now" />
        )}
      </div>
    </div>
  );
};

export default Feature;
