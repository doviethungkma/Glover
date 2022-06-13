import React from "react";

const Footer = () => {
  return (
    <div className="footer mt-10 px-3 py-10 md:px-10 animate-fade-in-bottom">
      <div class="w-full max-w-[1200px] m-auto grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div className="footer-item">
          <img src={require("../assets/images/logo.png")} alt="" />
          <p class="mt-6 text-sm text-[#676767] max-w-[80%]">
            Fast delivery, which is active all over the world, serves with many
            transportation vehicles.
          </p>
        </div>
        <div className="footer-item">
          <ul>
            <li class="py-6 cursor-pointer lg: pt-0">Company</li>
            <li class="text-sm text-[#676767] py-1 cursor-pointer">About us</li>
            <li class="text-sm text-[#676767] py-1 cursor-pointer">Blog</li>
            <li class="text-sm text-[#676767] py-1 cursor-pointer">
              All Products
            </li>
            <li class="text-sm text-[#676767] py-1 cursor-pointer">
              Locations Map
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <ul>
            <li class="py-6 cursor-pointer lg: pt-0">Service</li>
            <li class="text-sm text-[#676767] py-1 cursor-pointer">
              Order tracking
            </li>
            <li class="text-sm text-[#676767] py-1 cursor-pointer">
              Wish List
            </li>
            <li class="text-sm text-[#676767] py-1 cursor-pointer">
              My account
            </li>
            <li class="text-sm text-[#676767] py-1 cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <ul>
            <li class="py-6 cursor-pointer lg: pt-0">Get in Touch</li>
            <li class="text-sm text-[#676767] py-1 cursor-pointer">
              Subscribe to our weekly Newsletter and receive updates via email.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
