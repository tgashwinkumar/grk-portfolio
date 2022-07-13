import React from "react";

const AcademicBackground = () => {
  return (
    <section className="w-full h-full overflow-x-hidden bg-bone px-8 py-12 flex flex-col lg:flex-row m-0">
      <h2 className="font-playfair text-4xl font-medium lg:w-1/3 mb-12">
        Academic Background
      </h2>
      <main className="flex flex-col lg:flex-row lg:w-2/3">
        {/* <div className="w-1/4"></div> */}
        <div className="w-full  grid grid-cols-1 lg:grid-cols-3 space-y-6 lg:space-y-0 lg:space-x-6">
          <AlmamaterText
            text={"Bachelor of Engineering (Computer Science and Engineering)"}
            subtext="Kongu Engineering College, Bharathiar University"
            subtitle="Year 1996"
          />
          <AlmamaterText
            text={"Masters of Engineering (Computer Science and Engineering)"}
            subtext="PSG College of Technology, Bharathiar University"
            subtitle="Year 2001"
          />
          <AlmamaterText
            text={"Doctor of Philosophy"}
            subtext="PSG College of Technology, Anna University"
            subtitle="Year 2008"
          />
        </div>
      </main>
    </section>
  );
};

export default AcademicBackground;


export const AlmamaterText = ({text="", subtext="", subtitle=""}) => {
  return (
    <div className="flex flex-col space-y-2">
        <p className="font-bold font-lato text-lg">
            {text}
        </p>
        <div className="text-sm font-lato">
            {subtext}
        </div>
        <p className="text font-semibold font-lato italic">
            {subtitle}
        </p>
    </div>
  )
}
