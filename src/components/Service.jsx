import React from "react";

const Service = () => {
  return (
    <div className="service px-4 py-[100px] w-full mt-16 bg-[#FEF5F5] lg:px-10 animate-fade-in-bottom">
      <p class="text-lg text-[#F54748] text-center capitalize">What we Serve</p>
      <h2 class="mt-2 text-2xl text-center capitalize">
        fruit and vegetable delivered to your home
      </h2>
      <div class="mt-[69px] grid grid-cols-1 gap-5 lg:grid-cols-3 max-w-[1200px] m-auto">
        <div class="p-12 flex flex-col items-center justify-between bg-white rounded-xl">
          <img src={require("../assets/images/icon1.png")} alt="" />
          <h3 class="text-xl text-center">Free shipping</h3>
          <p class="mt-4 text-center text-[#676767]">
            Enjoy Order in a hand using the fresness of groceries
          </p>
        </div>
        <div class="p-12 flex flex-col items-center justify-between bg-white rounded-xl">
          <img src={require("../assets/images/icon2.png")} alt="" />
          <h3 class="text-xl text-center">15 days returns</h3>
          <p class="mt-4 text-center text-[#676767]">
            Order in a handy way using the freshness of the groceries.
          </p>
        </div>
        <div class="p-12 flex flex-col items-center justify-between bg-white rounded-xl">
          <img src={require("../assets/images/icon3.png")} alt="" />
          <h3 class="text-xl text-center">Secure checkout</h3>
          <p class="mt-4 text-center text-[#676767]">
            If you get rotten items - return immediately to us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
