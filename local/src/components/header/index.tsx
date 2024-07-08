import { Disclosure } from "@headlessui/react";
import React, { useEffect, useRef } from "react";
import { HiMiniBars3, HiMiniBars3CenterLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import myLogo from "/c.svg";

const navigation = [
  { name: "ABOUT ME", to: "/about", current: false },
  { name: "SERVICES", to: "/service", current: false },
  { name: "CONTACT ME", to: "/contact", current: false },
  { name: "TECHNOLOGIES", to: "#", current: false },
];

const Header: React.FC = () => {
  // Handle header show/hide animation depending on the scroll direction
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    // Handle scroll events
    const handleScroll = () => {
      const currScrollPos = window.scrollY;
      const currHeaderElement = headerRef.current;

      if (!currHeaderElement) return;

      if (prevScrollPos > currScrollPos)
        currHeaderElement.style.transform = "translateY(0)";
      else currHeaderElement.style.transform = "translateY(-200px)";

      prevScrollPos = currScrollPos;
    };

    // Set up listeners for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Remove listeners for the scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="!h-[56px] z-50 fixed top-0 left-0 right-0 translate-y-0 transform transition-transform duration-300 ease-in-out font-medium text-sm bg-[#E0F7FA]"
      ref={headerRef}
    >
      <Disclosure as="nav" className="bg-[#E0F7FA]">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-full p-1 text-gray-400 hover:bg-[#246CF7] hover:text-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? <HiMiniBars3CenterLeft /> : <HiMiniBars3 />}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link to="/">
                      <img
                        className="h-8 w-auto"
                        src={myLogo}
                        alt="ChiranJ"
                      />
                    </Link> <span className="font-bold text-blue-900 font-sans-serif tracking-wide text-2xl">HiRAnJ</span>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-7 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className={twMerge([
                            item.current
                              ? "text-[#01579B] text-white"
                              : "text-[#01579B] hover:text-[#246CF7]",
                            "rounded-md px-3 py-2 text-sm font-medium",
                          ])}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link to="/contact">
                    <button
                      type="button"
                      className="relative rounded-full ml-8 bg-[#01579B] px-5 py-1 text-blue-100 hover:text-white"
                    >
                      SEND MAIL
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.to}
                    className={twMerge([
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-900 hover:text-[#246CF7]",
                      "block rounded-md px-3 py-2 text-sm font-medium",
                    ])}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Header;