import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Feature from "./components/Feature";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
const image2 = require("./assets/images/image2.png");
const image3 = require("./assets/images/image3.png");

const App = () => {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

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
    <div>
      <Navbar />
      <div class="w-full max-w-[1200px] m-auto">
        <Hero />
      </div>

      <Service />
      <div class="w-full max-w-[1200px] m-auto">
        <Feature
          subtitle="Why choose us"
          title="Find Favorites and Discover New Ones"
          content="At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis praesen voluptatum deleniti."
          subtitleColor="text-[#03A66B]"
          image={image2}
        />
      </div>
      <div class="w-full max-w-[1200px] m-auto">
        <Feature
          subtitle="HOME DELIVERY"
          title="Sit at Home We Will Take Care Your Order"
          content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos "
          subtitleColor="text-[#F9BA45]"
          image={image3}
          rounded={true}
          reverse={windowDimenion.winWidth > 768 ? true : false}
        />
      </div>
      <Cta />
      <div class="w-full max-w-[1200px] m-auto">
        <Footer />
      </div>
    </div>
  );
};

export default App;
