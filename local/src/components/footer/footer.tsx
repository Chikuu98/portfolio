import { Link } from "react-router-dom";
import myLogo from "/c.svg";
import SocialMedia from "../socialMedia";

export const Footer = () => {
  return (
    <div className="bg-[#E0F7FA] w-full text-poppins flex justify-center content-center pt-10 pb-6 px-5 md:px-10">
      <div className="container m-auto">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-10">
          <div>
            <div className="w-full pl-0 md:pl-5 lg:pl-20">
              <h2 className="text-[#0277BD] text-base font-medium pb-1">About Me</h2>
              <hr className="border-t-1 border-[#0277BD] opacity-20 w-[50px] pb-2" />
              <h3 className="text-[#01579B] text-base font-normal pb-2">Biography</h3>
              <h3 className="text-[#01579B] text-base font-normal pb-2">Skills</h3>
              <h3 className="text-[#01579B] text-base font-normal pb-2">Experience</h3>
              <h3 className="text-[#01579B] text-base font-normal pb-2">Education</h3>
            </div>
          </div>
          <div>
            <div className="w-full pl-0 md:pl-5 lg:pl-20">
              <h2 className="text-[#0277BD] text-base font-medium pb-1">Services</h2>
              <hr className="border-t-1 border-[#0277BD] opacity-20 w-[50px] pb-2" />
              <h3 className="text-[#01579B] text-base font-normal pb-2">Web Development</h3>
              <h3 className="text-[#01579B] text-base font-normal pb-2">Mobile Development</h3>
              <h3 className="text-[#01579B] text-base font-normal pb-2">Software Testing</h3>
              <h3 className="text-[#01579B] text-base font-normal pb-2">Consulting</h3>
            </div>
          </div>
          <div>
            <div className="w-full pl-0 md:pl-5 lg:pl-20">
              <h2 className="text-[#0277BD] text-base font-medium pb-1">Projects</h2>
              <hr className="border-t-1 border-[#0277BD] opacity-20 w-[50px] pb-2" />
              <h3 className="text-[#01579B] text-base font-normal pb-2">Project A</h3>
              <h3 className="text-[#01579B] text-base font-normal pb-2">Project B</h3>
              <h3 className="text-[#01579B] text-base font-normal pb-2">Project C</h3>
              <h3 className="text-[#01579B] text-base font-normal pb-2">View All Projects</h3>
            </div>
          </div>
        </div>
        <hr className="border-t-1 border-[#0277BD] opacity-20 w-full my-6 pb-2 mb-10" />
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-6 h-20 mb-10 md:mb-0">
          <div className="md:col-span-2 sm:col-span-1 md:relative">
            <div className="w-full pl-0 md:pl-5 lg:pl-20">
              <div className="md:absolute md:bottom-0">
                <h3 className="text-[#01579B] text-base font-medium pb-1">
                  E: chiran.jeewantha@example.com
                </h3>
                <h3 className="text-[#01579B] text-base font-medium">
                  T: +94 758 43 7777
                </h3>
                <h3 className="text-[#01579B] text-sm font-normal pb-1">
                  Copyright © {new Date().getFullYear()} Chiran Jeewantha
                </h3>
                <h3 className="text-[#01579B] text-sm font-normal cursor-pointer hover:text-[#0277BD]">
                  Terms of Use - Privacy Policy
                </h3>
              </div>
            </div>
          </div>
          <div className="pl-0 md:pl-5 lg:pl-20">
  <div className="w-full flex items-center justify-start">
    <Link to="/" className="flex items-center">
      <img
        className="md:h-18 h-14 lg:h-20 sm:h-40 w-auto -ml-3 md:-ml-4 lg:-ml-5 lg:translate-y-5 md:translate-y-7 sm:translate-y-10 mix-blend-multiply"
        src={myLogo}
        alt="Chiran Jeewantha"
      />
      <h1 className="ml-1 text-[#01579B] text-lg font-bold lg:text-xl md:text-lg sm:text-md">
        Chiran J
      </h1>
    </Link>
  </div>
</div>
        </div>
        <br className="block sm:hidden" />
        <hr className="border-t-1 border-[#0277BD] opacity-20 w-full my-6 translate-y-2" />
        <div>
          <div className="pl-0 md:pl-5 lg:pl-20 pb-5 pt-3">
            <SocialMedia className="md:w-5 w-4 grayscale hover:cursor-pointer hover:mix-blend-multiply" />
          </div>
        </div>
      </div>
    </div>
  );
};
