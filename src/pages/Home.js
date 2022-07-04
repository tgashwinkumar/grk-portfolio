import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";

const HomeImage1 = `https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`;
const HomeImage2 = `https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`;
const HomeImage3 = `https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`;
const HomeImage4 = `https://images.unsplash.com/photo-1519124040388-0c8421105fe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80`;
const HomeImage5 = `https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`;
const HomeImage6 = `https://images.unsplash.com/photo-1630332458166-1c3bdde17665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`;

const Home = () => {
  const [hoverId, setHoverId] = useState(0);

  return (
    <section className="w-full h-fit bg-bone overflow-x-hidden flex flex-row">
      <main className="w-full min-h-screen px-8 flex-1">
        <nav className="h-36 flex items-center space-x-8 px-2">
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
          Professor & Associate Head - CSE
        </h2>

        <div className="mt-12 flex items-center space-x-6 ">
          <button
            onMouseOver={(e) => {
              e.preventDefault();
              setHoverId(1);
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              setHoverId(0);
            }}
          >
            <FaLinkedinIn
              className={`h-8 w-8 transition-all duration-75 delay-100 ${
                hoverId === 0 || hoverId === 1 ? "text-black" : "text-smoke"
              }`}
            />
          </button>
          <button
            onMouseOver={(e) => {
              e.preventDefault();
              setHoverId(2);
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              setHoverId(0);
            }}
          >
            <SiGmail
              className={`h-8 w-8 transition-all duration-75 delay-100 ${
                hoverId === 0 || hoverId === 2 ? "text-black" : "text-smoke"
              }`}
            />
          </button>
          <button
            onMouseOver={(e) => {
              e.preventDefault();
              setHoverId(3);
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              setHoverId(0);
            }}
          >
            <BsFillTelephoneFill
              className={`h-6 w-6 transition-all duration-75 delay-100 ${
                hoverId === 0 || hoverId === 3 ? "text-black" : "text-smoke"
              }`}
            />
          </button>
        </div>

        <div className="pt-36 pb-24 items-center">
          <h2 className="font-playfair text-4xl font-medium">
            Biographical Sketch
          </h2>

          <p className="font-lato  pr-16 text-justify mt-12">
            &emsp;&emsp;&emsp;<b>G R Karpagam is a Professor</b> with 25 years
            of experience in Department of Computer Science and Engineering at
            PSG College of Technology. Karpagam received her Bachelors, Masters
            and PhD degree in Computer Science and Engineering. Her research
            interest includes areas related to Artificial Intelligence, Machine
            Learning, Service Oriented Architecture and Blockchain. She has
            established 6 state of Art Laboratories in her research field
            through Government and private industry funding. She is a recipient
            of{" "}
            <b>
              CMI level 5 award (Management and Leadership) and PSG & Sons
              Teacher of the Year Award
            </b>
            . She is a{" "}
            <b>
              conferred with senior membership in IEEE, Women in Engineering,
              Consultant and Computer Society
            </b>
            . She also holds her professional membership in ACM, Indian Society
            for Technical Education and IE Institution of Engineers. She was
            instrumental in bringing the new Programme<b> BE CSE (AI and ML)</b>
            .
          </p>
        </div>
      </main>
      <div className="w-[50vw] h-screen">
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
              backgroundPosition: "50% 20%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="w-1/3 h-full">
          <div
            className="h-1/2 w-full filter grayscale"
            style={{
              background: `url(${HomeImage4})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className="h-1/2 w-full filter grayscale"
            style={{
              background: `url(${HomeImage6})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
      <div className="h-1/4 flex w-full">
        <div
          className="w-5/12 filter grayscale"
          style={{
            background: `url(${HomeImage2})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-4/12 filter grayscale"
          style={{
            background: `url(${HomeImage3})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-3/12 filter grayscale"
          style={{
            background: `url(${HomeImage5})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </React.Fragment>
  );
};
