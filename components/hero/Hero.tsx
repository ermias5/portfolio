"use client";

import React from "react";
import Image from "next/image";
import ToggleTheme from "../theme-toggle/toggle-theme";
import SocialLinks from "./social-links";
import useHeroData from "../../hooks/useHeroData";

const Hero = () => {
  const { data, isLoading, error } = useHeroData();
  return (
    <>
      <div className="fixed flex items-center justify-center top-[7rem] left-[1rem] cursor-pointer tablet:top-[20rem] tablet:left-[10rem]">
        <ToggleTheme />
      </div>
      <div
        id="hero"
        className={`flex flex-col-reverse items-center justify-center px-[5%] gap-10 font- dark:text-white tablet:flex-row tablet:gap-[140px] tablet:px-[10%] desktop:px-[20%] pt-[100px]`}
      >
        <div className="w-full flex flex-col tablet:min-w-[450px] ">
          <div className="flex flex-col desktop:gap-[40px] desktop:max-w-full ">
            <div className=" flex flex-col items-start justify-start gap-1.5 desktop:max-w-full desktop:self-stretch">
              <div className="flex items-start justify-start desktop:px-[7px] ">
                <div className="tracking-[0.03em] font-semibold inline-block  desktop:min-w-[90px]">{`Hi I am `}</div>
              </div>
              <div className="flex flex-col items-start justify-start max-w-full desktop:text-3xl">
                <div className="flex items-start justify-start box-border max-w-full">
                  <h3 className="m-0 tracking-[0.03em] font-semibold font-[inherit]  text-darkorange-100">{`Ephrem Mekuria `}</h3>
                </div>
                <div className="flex items-start justify-start gap-2 desktop:mt-[-13px] desktop:text-5xl desktop:flex-col">
                  <h1 className="text-inherit tracking-[0.03em] font-bold font-[inherit] desktop:inline-block desktop:max-w-full desktop:w-[500px] desktop:m-0">{`Flutter`}</h1>
                  <div className=" flex justify-end desktop:mt-[-25px] desktop:self-stretch">
                    <h1 className="text-inherit tracking-[0.03em] font-bold font-[inherit] desktop:m-0 ">{`Developer`}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[27px] max-w-full text-justify">
              <div className="tablet:text-xl">
                {data.map((descriptionData) => descriptionData.description)}
              </div>

              <button className=" bg-orange-400 rounded text-lg px-[1rem] py-[.5rem] text-white desktop:text-4xl ">
                hire me
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-full overflow-hidden h-[300px] w-[250px] relative  desktop:h-[400px] desktop:w-[400px]  ">
            {isLoading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>Error: {error}</div>
            ) : (
              data.map((image, index) => (
                <Image
                  src={image.imageUrl}
                  alt={`Image of ${index}`}
                  key={index}
                  className="object-cover"
                  fill
                />
              ))
            )}
          </div>
          <div className="hidden tablet:flex">
            <div className="flex items-center justify-center gap-5 my-8 w-full">
              <div className="rounded-full cursor-pointer">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
