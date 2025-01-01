import { Link } from "react-router-dom";
import myLogo from "/c.svg";
import SocialMedia from "../socialMedia";

export const Footer = () => {
  return (
    <div className="bg-background w-full text-poppins flex justify-center content-center pt-10 pb-6 px-5 md:px-10">
      <div className="container m-auto">
        {/* Top Divider Line */}
        <hr className="border-t-1 border-primary opacity-20 w-full mb-10" />
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-10">
          <div>
            <div className="w-full pl-0 md:pl-5 lg:pl-20">
              <h2 className="text-primary text-base font-medium pb-1">About Me</h2>
              <hr className="border-t-1 border-primary opacity-20 w-[50px] pb-2" />
              <h3 className="text-text text-base font-normal pb-2">Biography</h3>
              <h3 className="text-text text-base font-normal pb-2">Skills</h3>
              <h3 className="text-text text-base font-normal pb-2">Experience</h3>
              <h3 className="text-text text-base font-normal pb-2">Education</h3>
            </div>
          </div>
          <div>
            <div className="w-full pl-0 md:pl-5 lg:pl-20">
              <h2 className="text-primary text-base font-medium pb-1">Services</h2>
              <hr className="border-t-1 border-primary opacity-20 w-[50px] pb-2" />
              <h3 className="text-text text-base font-normal pb-2">Web Development</h3>
              <h3 className="text-text text-base font-normal pb-2">Mobile Development</h3>
              <h3 className="text-text text-base font-normal pb-2">Desktop Application Development</h3>
              <h3 className="text-text text-base font-normal pb-2">UI UX Design</h3>
            </div>
          </div>
          <div>
            <div className="w-full pl-0 md:pl-5 lg:pl-20">
              <h2 className="text-primary text-base font-medium pb-1">Projects</h2>
              <hr className="border-t-1 border-primary opacity-20 w-[50px] pb-2" />
              <h3 className="text-text text-base font-normal pb-2">S24012</h3>
              <h3 className="text-text text-base font-normal pb-2">S24011</h3>
              <h3 className="text-text text-base font-normal pb-2">S24010</h3>
              <h3 className="text-text text-base font-normal pb-2">View All Projects</h3>
            </div>
          </div>
        </div>
        <hr className="border-t-1 border-primary opacity-20 w-full my-6 pb-2 mb-10" />
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-6 h-20 mb-10 md:mb-0">
          <div className="md:col-span-2 sm:col-span-1 md:relative">
            <div className="w-full pl-0 md:pl-5 lg:pl-20">
              <div className="md:absolute md:bottom-0">
                <h3 className="text-text text-base font-medium pb-1">
                  E: chiranjonline@gmail.com
                </h3>
                <h3 className="text-text text-base font-medium">
                  T: +94 77 9980 990
                </h3>
                <h3 className="text-text text-sm font-normal pb-1">
                  Copyright © {new Date().getFullYear()} Chiran Jeewantha
                </h3>
                <h3 className="text-text text-sm font-normal cursor-pointer hover:text-primary">
                  Terms of Use - Privacy Policy
                </h3>
              </div>
            </div>
          </div>
          <div className="pl-0 md:pl-5 lg:pl-20">
            <div className="w-full flex items-center justify-start">
              <Link to="/" className="flex items-center">
                <img
                  className="md:h-18 h-14 lg:h-20 sm:h-40 w-auto -ml-3 md:-ml-4 lg:-ml-5 lg:translate-y-5 md:translate-y-7 sm:translate-y-10"
                  src={myLogo}
                  alt="Chiran Jeewantha"
                  style={{ mixBlendMode: 'normal' }} // Set mix-blend mode to normal for better visibility
                />
                <h1 className="ml-1 text-text text-lg font-bold lg:text-xl md:text-lg sm:text-md">
                  Chiran J
                </h1>
              </Link>
            </div>
          </div>
        </div>
        <br className="block sm:hidden" />
        <hr className="border-t-1 border-primary opacity-20 w-full my-6 translate-y-2" />
        <div>
          <div className="pl-0 md:pl-5 lg:pl-20 pb-5 pt-3">
          <SocialMedia className="md:w-5 w-4 hover:opacity-100 hover:scale-110 transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};
