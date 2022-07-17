import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import Footer from "../sections/Footer";
const PageTemplate = ({ heading, children }) => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY >= 150 ? setIsAtTop(false) : setIsAtTop(true)
    );
  });

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden p-0 m-0 flex flex-col justify-start items-start">
      <header
        className={`${
          isAtTop ? "h-48 items-end" : "h-16 items-center"
        } duration-500 ease-in-out flex justify-start fixed top-0 w-full px-6 lg:px-[calc(100vw/12)] bg-black py-6 text-white transition-all`}
      >
        <div
          className={`h-16 absolute top-0 left-0 lg:px-[calc(100vw/12)] flex w-full justify-between items-center`}
        >
          <p
            className={`${
              isAtTop ? "opacity-100" : "opacity-0 "
            } transition-all duration-500 ease-in-out text-white font-playfair text-2xl`}
          >
            Dr. G R Karpagam
          </p>
          <Link to="/">
            <button className="font-lao flex items-center justify-center space-x-2 text-white text-base transition-all hover:border-b border-dashed border-white pb-1">
              <AiFillHome className="text-lg"/>
              <p className="text-sm">Back To Home</p>
            </button>{" "}
          </Link>
        </div>

        <p
          className={`${
            isAtTop ? "text-4xl" : "text-2xl"
          } duration-500 ease-in-out transition-all font-playfair font-semibold`}
        >
          {heading}
        </p>
      </header>
      <main
        className={`${
          isAtTop ? "mt-48" : "mt-16"
        } duration-500 ease-in-out transition-all min-h-[calc(100vh-12rem)] h-fit px-6 lg:px-[calc(100vw/12)] bg-bone py-6 w-full text-black`}
      >
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default PageTemplate;
