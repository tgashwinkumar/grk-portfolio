import React from 'react'

const Courses = () => {
  return (
    <section className="w-full h-full overflow-x-hidden bg-bone px-8 py-12 flex flex-col lg:flex-row m-0">
      <div className="space-y-1 mb-12 lg:mb-4 lg:w-1/3">
        <h2 className="font-playfair text-4xl font-medium w-[50vw] ">
          Courses
        </h2>
        <p className="text- italic">Handled at UG, PG and PhD Level</p>
      </div>
      <main className="flex flex-col lg:flex-row lg:w-2/3">
        {/* <div className="lg:w-1/4"></div> */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:space-y-0 gap-y-1 lg:gap-x-6">
          <p className="font-lato text-lg h-fit px-6  py-2 bg-black text-white shadow-lg">Data Structures</p>
          <p className="font-lato text-lg h-fit px-6  py-2 bg-black text-white shadow-lg">System Software</p>
          <p className="font-lato text-lg h-fit px-6  py-2 bg-black text-white shadow-lg">Open Source Systems</p>
          <p className="font-lato text-lg h-fit px-6  py-2 bg-black text-white shadow-lg">Multi-Tier Computing</p>
          <p className="font-lato text-lg h-fit px-6  py-2 bg-black text-white shadow-lg">Database Technology</p>
          <p className="font-lato text-lg h-fit px-6  py-2 bg-black text-white shadow-lg">Cryptography</p>
          <p className="font-lato text-lg h-fit px-6  py-2 bg-black text-white shadow-lg">Network Security</p>
          <p className="font-lato text-lg h-fit px-6  py-2 bg-black text-white shadow-lg">Cloud Computing</p>
          <p className="font-lato text-lg h-fit px-6  py-2 bg-black text-white shadow-lg">Semantic Web Technology</p>
          <p className="font-lato text-lg h-fit px-6  py-2 bg-black text-white shadow-lg">Cognitive Computing</p>
          <p className="font-lato text-lg h-fit px-6  py-2 bg-black text-white shadow-lg">Database management Systems</p>
          <p className="font-lato text-lg h-fit px-6  py-2 bg-black text-white shadow-lg">
            Object Oriented Analysis and Design
          </p>
        </div>
      </main>
    </section>
  );
}

export default Courses