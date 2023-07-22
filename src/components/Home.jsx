import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container  */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-green-600">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Divyansh Kumar
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Front End Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Hi, I'm a web dev enthusiast who enjoys creating beautiful websites
          with HTML, CSS, JS and React. I also have some experience with Java
          and data structures. I'm a final year BTech student, looking for
          opportunities to learn and grow.
        </p>

        <div>
          {/* group is used in tailwind to group actions, eg: when we hover over view work, arrow rotates, bcoz the button is grouped with arrow. Otherwise the arrow would rotate only when we hover on the arrow and not the button */}

          <button className="text-white group border-2 px-6 py-3 my-2  flex items-center hover:bg-green-600 hover:border-green-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
