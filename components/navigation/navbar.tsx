"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../public/subtract.png";
import NavLinks from "./nav-links";
import SideNav from "./side-navigation";
import useUploadCVData from "../../hooks/useUploadCVData";

const Navbar = () => {
  const { data, isLoading, error } = useUploadCVData();
  const [isScrolled, setIsScrolled] = useState(false);

  const desktopClassName =
    "[text-decoration:none] tracking-[0.03em] text-2xl font-poppins dark:text-white px-[12px] cursor-pointer hover:text-blue-600 text-nowrap";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cvUrl = data.length > 0 ? data[0]?.cvUrl : null;
  return (
    <header
      className={` w-full flex items-center justify-center desktop:gap-0 gap-[50px] ${
        isScrolled
          ? " bg-gainsboro-200 dark:bg-gray-100 pt-3 pb-2 z-50 fixed top-0 transition ease-in-out duration-700 "
          : " dark:text-white tablet:gap-[30px] tablet:px-5 desktop:px-0 "
      }`}
    >
      <div className="flex flex-col items-start justify-start">
        <div className=" flex items-center justify-center box-border gap-2 desktop:w-[400px] desktop:gap-5">
          <Image
            src={logo}
            alt="portfolio"
            priority
            className="h-[40px] w-[40px] desktop:w-[70px] desktop:h-[70px]"
          />
          <div className="flex-1 flex flex-col items-start justify-start">
            <a className="[text-decoration:none] text-xl inline-block whitespace-nowrap desktop:text-4xl">
              <b>E</b>
              <span>{`phrem `}</span>
            </a>
          </div>
        </div>
      </div>
      <nav className="hidden tablet:flex tablet:flex-col tablet:items-start tablet:justify-start">
        <nav className=" flex items-start justify-start">
          <div className="flex items-center justify-start cursor-pointer">
            <NavLinks desktopClassName={desktopClassName} />
          </div>
        </nav>
      </nav>
      <div className="flex flex-col items-start justify-start bg-darkorange-100 rounded-md desktop:ml-4">
        <button className="cursor-pointer [border:none] px-[4px]  rounded-md bg-darkorange-100 flex flex-row items-start justify-start whitespace-nowrap hover:bg-orangered desktop:p-[10px]">
          <a
            href={cvUrl || "#"}
            download
            className="[text-decoration:none] relative text-2xl font-poppins tracking-[0.03em] text-white inline-block z-[1]"
          >
            Downlaod CV
          </a>
        </button>
      </div>
      <SideNav />
    </header>
  );
};

export default Navbar;
