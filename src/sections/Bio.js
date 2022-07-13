import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import BioJSON from "../json/Bio/index.json"

const HomeImage6 = `https://i.ibb.co/r5HsNRW/Copy-of-Adobe-Scan-May-24-2022-52-1.jpg`;
const HomeImage4 = `https://i.ibb.co/xYtx7WL/image9.jpg`;
const HomeImage2 = `https://i.ibb.co/Dz7Y9Zs/Adobe-Scan-May-24-2022-38-1.jpg`;
const HomeImage3 = `https://i.ibb.co/71RHGMc/Adobe-Scan-May-09-2022-29-1.jpg`;
const HomeImage5 = `https://i.ibb.co/gZg5m8y/Adobe-Scan-May-09-2022-16-1.jpg`;
const HomeImage1 = `https://i.ibb.co/TKV4mHf/1524634848193.jpg`;



const Home = () => {
  return (
    <section className="w-screen lg:w-full h-fit bg-bone overflow-x-hidden flex flex-col lg:flex-row">
      <main className="w-full min-h-screen px-6 lg:px-8 flex-1">
        <nav className="h-fit pt-12 lg:h-36 flex items-center space-x-8 lg:px-2 w-full">
          <button className="box-border transition-all duration-75 hover:border-b-2 border-b-black cursor-pointer uppercase font-lato text-lg">
            Bio
          </button>
          <button className="box-border transition-all duration-75 hover:border-b-2 border-b-black cursor-pointer uppercase font-lato text-lg">
            Honors
          </button>
          <button className="box-border transition-all duration-75 hover:border-b-2 border-b-black cursor-pointer uppercase font-lato text-lg">
            Books
          </button>
          <button className="box-border transition-all duration-75 hover:border-b-2 border-b-black cursor-pointer uppercase font-lato text-lg">
            Courses
          </button>
        </nav>

        <h1 className="font-playfair text-6xl font-medium mt-12">
          Dr. G R Karpagam
        </h1>
        <h2 className="text-lg ont-lato mt-4 uppercase">
          Professor - CSE, HEAD - Library
        </h2>

        <div className="mt-12 flex items-center space-x-6 ">
          <button>
            <FaLinkedinIn
              className={`h-8 w-8 transition-all duration-75 delay-100 hover:-translate-y-1 ease-in-out`}
            />
          </button>
          <button>
            <SiGmail
              className={`h-8 w-8 transition-all duration-75 delay-100  hover:-translate-y-1 ease-in-out`}
            />
          </button>
          <button>
            <BsFillTelephoneFill
              className={`h-6 w-6 transition-all duration-75 delay-100  hover:-translate-y-1 ease-in-out`}
            />
          </button>
        </div>

        <div className="pt-36 pb-24 items-center w-full">
          <h2 className="font-playfair text-4xl font-medium">
            {BioJSON?.title}
          </h2>

          <p className="font-lato  lg:pr-16 text-justify mt-12 w-full">
            &emsp;&emsp;&emsp;{BioJSON?.body}
          </p>
        </div>
      </main>
      <div className="w-full lg:w-[50vw] h-screen hidden lg:block">
        <ImageSection />
      </div>
    </section>
  );
};

export default Home;

const ImageSection = () => {
  return (
    <React.Fragment>
      <div className="h-3/4 w-full flex">
        <div className="w-2/3 h-full">
          <div
            className="h-full w-full filter grayscale"
            style={{
              background: `url(${HomeImage1})`,
              backgroundSize: "cover",
              backgroundPosition: "0% 50%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="w-1/3 h-full">
          <div
            className="h-1/2 w-full filter grayscale"
            style={{
              background: `url(${HomeImage2})`,
              backgroundSize: "cover",
              backgroundPosition: "0% 50%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className="h-1/2 w-full filter grayscale"
            style={{
              background: `url(${HomeImage3})`,
              backgroundSize: "cover",
              backgroundPosition: "30% 50%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
      <div className="h-1/4 flex w-full">
        <div
          className="w-5/12 filter grayscale"
          style={{
            background: `url(${HomeImage4})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 20%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-4/12 filter grayscale"
          style={{
            background: `url(${HomeImage5})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-3/12 filter grayscale"
          style={{
            background: `url(${HomeImage6})`,
            backgroundSize: "cover",
            backgroundPosition: "100% 50%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </React.Fragment>
  );
};
