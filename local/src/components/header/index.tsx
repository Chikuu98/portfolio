import { Disclosure } from "@headlessui/react";
import React from "react";
import { HiMiniBars3, HiMiniBars3CenterLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import myLogo from "/c.svg";

const navigation = [
  { name: "ABOUT ME", to: "/about", current: false },
  { name: "SERVICES", to: "/service", current: false },
  { name: "TECHNOLOGIES", to: "/technologies", current: false },
  { name: "PROJECTS", to: "/projects", current: false },
];

const Header: React.FC = () => {
  return (
    <div className="!h-[56px] z-50 fixed top-0 left-0 right-0 bg-secondary font-medium text-sm">
      <Disclosure as="nav" className="bg-secondary">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-full p-1 text-neutral hover:bg-primary-hover hover:text-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? <HiMiniBars3CenterLeft /> : <HiMiniBars3 />}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link to="/">
                      <div className="flex items-center">
                        <img className="h-8 w-auto" src={myLogo} alt="ChiranJ" />
                        <span className="font-bold text-text font-sans-serif tracking-wide text-2xl ml-2">
                          HiRaNJ
                        </span>
                      </div>
                    </Link>
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
                              ? "text-white"
                              : "text-text hover:text-primary-hover",
                            "rounded-md px-3 py-2 text-sm font-medium",
                          ])}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link to="/sendMail">
                    <button
                      type="button"
                      className="relative rounded-full ml-8 bg-primary px-5 py-1 text-blue-100 hover:bg-primary-hover hover:text-white"
                    >
                      SEND MAIL
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <Disclosure.Panel className="sm:hidden z-40 bg-secondary fixed inset-0 flex items-center justify-center shadow-lg">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {/* Home link visible only in mobile */}
                <Disclosure.Button
                  key="HOME"
                  as={Link}
                  to="/"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-text hover:text-primary-hover"
                >
                  HOME
                </Disclosure.Button>

                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.to}
                    className={twMerge([
                      item.current
                        ? "bg-primary text-white"
                        : "text-text hover:text-primary-hover",
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
