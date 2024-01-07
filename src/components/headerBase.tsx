"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HeaderBase = () => {
  const [navBar, setNavBar] = useState(false);

  return (
      <nav className="fixed bg-grey-500 top-0 left-0 right-0 z-10 border-b-2 border-primary-900 ">
        <div>
          <nav>
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
              <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                  <h1 className="text-grey-100 text-lg">Bruno</h1>
                  <div className="md:hidden">
                    <button
                      className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                      onClick={() => setNavBar(!navBar)}
                    >
                      {navBar ? (
                        <Image
                          src="/close.svg"
                          width={35}
                          height={35}
                          priority
                          alt="logo"
                        />
                      ) : (
                        <Image
                          src="/hamburger-menu.svg"
                          width={35}
                          height={35}
                          alt="logo"
                          priority
                          className="focus:border-none active:border-none"
                        />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navBar ? "p-12 md:p-0 block" : "hidden"
                  }`}
                >
                  <ul className="h-screen md:h-auto items-center justify-center md:flex">
                    <li className="pb-6 text-xl text-white py-2 md:px-6 md:py-0 text-center border-b-2 md:border-b-0  hover:bg-primary-900 border-primary-900  md:hover:text-primary-500 md:hover:bg-transparent">
                      <Link href="#about" onClick={() => setNavBar(!navBar)}>
                        About
                      </Link>
                    </li>
                    <li className="pb-6 text-xl text-white py-2 px-6 text-center md:py-0 border-b-2 md:border-b-0  hover:bg-primary-500  border-primary-900  md:hover:text-primary-500 md:hover:bg-transparent">
                      <Link href="#projects" onClick={() => setNavBar(!navBar)}>
                        Projects
                      </Link>
                    </li>
                    <li className="pb-6 text-xl text-white py-2 px-6 text-center md:py-0 border-b-2 md:border-b-0  hover:bg-primary-500  border-primary-900  md:hover:text-primary-500 md:hover:bg-transparent">
                      <Link href="#contacts" onClick={() => setNavBar(!navBar)}>
                        Contacts
                      </Link>
                    </li>
                    <li className="pb-6 text-xl text-white py-2 px-6 text-center md:py-0 border-b-2 md:border-b-0  hover:bg-primary-500  border-primary-900  md:hover:text-primary-500 md:hover:bg-transparent">
                      <Link href="#socialMedia" onClick={() => setNavBar(!navBar)}>
                        Social Medias
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </nav>
  );
};

export default HeaderBase;
