import React from "react";
import {AiFillInstagram, AiFillLinkedin} from "react-icons/ai";
import { BsFillEnvelopeFill, BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="w-full h-full overflow-x-hidden bg-black px-8 pr-24 py-12 flex flex-col lg:flex-row lg:justify-between m-0">
      <h1 className="font-playfair text-3xl font-bold text-white w-full lg:w-1/4 mb-12">
        Dr. G R Karpagam
      </h1>
      <div className="lg:w-fit w-full">
        <h2 className="font-playfair text-white text-lg mb-6">Let's Connect</h2>
        <div className="grid grid-cols-1 dividey divide-white  gap-2 ">
          <div className="flex space-x-4 items-center justify-start text-white text-lg w-full px-4 py-2">
            <p className="text-2xl">
              <AiFillLinkedin />
            </p>
            <div className="">
              <p className="font-lato text-lg">
                Linkedin
              </p>
            </div>
          </div>
          <div className="flex space-x-4 items-center justify-start text-white text-lg w-full px-4 py-2">
            <p className="text-2xl">
              <AiFillInstagram />
            </p>
            <div className="">
              <p className="font-lato text-lg">Instagram</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-fit w-full">
        <h2 className="font-playfair text-white text-lg lg:mt-0 my-6">Get in Touch</h2>
        <div className="grid grid-cols-1 dividey divide-white  gap-2 ">
          <div className="flex space-x-4 items-center justify-start text-white text-lg w-full px-4 py-2">
            <p className="text-2xl">
              <BsFillEnvelopeFill />
            </p>
            <div className="">
              <a
                href="https://www.linkedin.com/in/g-r-karpagam-rangaraju-68ab8353/"
                className="font-lato text-sm"
              >
                Mail
              </a>
              <p className="font-bold font-lato text-lg">
                grk.cse@psgtech.ac.in
              </p>
            </div>
          </div>
          <div className="flex space-x-4 items-center justify-start text-white text-lg w-full px-4 py-2">
            <p className="text-2xl">
              <BsTelephone />
            </p>
            <div className="">
              <a
                href="https://www.linkedin.com/in/g-r-karpagam-rangaraju-68ab8353/"
                className="font-lato text-sm"
              >
                Phone
              </a>
              <p className="font-bold font-lato text-lg">+91 98948 64081</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
