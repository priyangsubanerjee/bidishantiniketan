/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function HeroSection() {
  return (
    <div className="lg:flex lg:items-center lg:pl-[96px] pt-10 lg:pt-5 pb-20">
      <div className="w-full px-4 overflow-hidden lg:hidden block h-fit">
        <img src="/hero_room.png" className="object-contain" alt="" />
      </div>
      <div className="mt-6 lg:mt-0 lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
        <h1 className="text-[32px] text-center w-fit lg:text-[64px] font-poppins text-[#264653] font-semibold">
          Unlock the door to <br /> your{" "}
          <span className="text-[#7A0A2B] relative">
            ideal home
            <span className="absolute inset-x-0 bottom-0 hidden lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="363"
                height="6"
                viewBox="0 0 363 6"
                fill="none"
              >
                <path
                  d="M2 2.11213C104.53 2.11194 265.991 1.30956 361 4"
                  stroke="#7A0A2B"
                  stroke-width="3.86538"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="absolute inset-x-0 -bottom-2  hidden lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="360"
                height="4"
                viewBox="0 0 360 4"
                fill="none"
              >
                <path
                  d="M2 2C100.578 2 227.137 2 358 2"
                  stroke="#7A0A2B"
                  stroke-width="3.86538"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="absolute inset-x-0 bottom-0 lg:hidden block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="198"
                height="4"
                viewBox="0 0 198 4"
                fill="none"
              >
                <path
                  d="M1.62646 1.4275C57.2106 1.4274 144.743 0.992409 196.25 2.45097"
                  stroke="#7A0A2B"
                  stroke-width="2.09553"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="absolute inset-x-0 -bottom-1 lg:hidden block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="196"
                height="3"
                viewBox="0 0 196 3"
                fill="none"
              >
                <path
                  d="M1.16846 1.24586C54.6103 1.24586 123.221 1.24586 194.166 1.24586"
                  stroke="#7A0A2B"
                  stroke-width="2.09553"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </span>
        </h1>
        <p className="text-[#1b1b1b] leading-[30px] mt-8 font-poppins text-center lg:text-left">
          Let us guide you through a seamless journey of finding the perfect{" "}
          <br className="hidden lg:block" />
          abode that truly reflects your aspirations and lifestyle.
        </p>
        <div className="grid grid-cols-1 w-[70%] lg:grid-cols-2 gap-4 mt-12 lg:mt-8 font-poppins lg:max-w-[500px]">
          <button className="bg-[#7A0A2B] rounded h-[48px] w-full flex items-center justify-center">
            <span className="text-white">See our case studies</span>
          </button>
          <button className="rounded h-[48px] border border-black w-full flex items-center justify-center">
            <span className="text-black">Contact us</span>
          </button>
        </div>
      </div>
      <div className="w-1/2 overflow-hidden hidden lg:block">
        <img
          src="/hero_room.png"
          className="h-[475px] object-contain translate-x-[30%]"
          alt=""
        />
      </div>
    </div>
  );
}
