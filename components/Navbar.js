/* eslint-disable @next/next/no-img-element */
import React from "react";

function Navbar() {
  return (
    <div className="flex items-center lg:h-32 px-6 lg:px-[96px] lg:py-[40px] font-poppins">
      <div>
        <img src="/logo.svg" className="h-20 w-20" alt="" />
      </div>
      <ul className="ml-[132px] hidden lg:flex items-center space-x-14 text-[#555]">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact us</li>
      </ul>
      <div className="ml-auto flex items-center">
        <button className="bg-[#7A0A2B] text-white w-[168px] h-[48px] hidden lg:flex items-center justify-center rounded">
          Contact us
        </button>
        <button className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
