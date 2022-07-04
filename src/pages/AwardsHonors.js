import React from "react";

const AwardsHonors = () => {
  return (
    <section className="w-full h-full overflow-x-hidden bg-bone px-8 py-12 flex flex-col m-0">
      <h2 className="font-playfair text-4xl font-medium w-[50vw] mb-12">
        Awards, Honors and Recognitions
      </h2>
      <main className="flex-1 font-lato flex space-x-12">
        <div className="w-1/4"></div>
        <div className="w-1/4 space-y-2 text-sm">
          <h3 className="font-bold pb-7 text-base">ACADEMIC</h3>
          <p className="">Teacher of the Year - 2015 Award </p>
          <p className="">Lead – Established 6 state of Art Laboratories </p>
          <p className="">
            University Nominee/Member/Subject Expert of Board of Studies in
            Government, Govt.aided and Private Engineering Colleges
          </p>
          <p className="">
            Coordinator for compiling Accreditation SAR from 2008 onwards{" "}
          </p>
          <p className="">Mobile App Development for AIR lab (Skylanot) </p>
          <p className="">
            Mobile App Development Library (Exordium) –available in Google play
            store{" "}
          </p>
          <p className="">Guide - Best Project awards</p>
          <p className="">
            Member of Finishing School and career Guidance committee
          </p>
          <p className="">
            Recommendations to Foreign universities for higher studies
          </p>
        </div>
        <div className="w-1/4 space-y-2 text-sm">
          <h3 className="font-bold pb-7 text-base">ADMINISTRATIVE</h3>
          <p className="">CMI level 5 award (Management and Leadership) </p>
          <p className="">Professor I/C GRD Library </p>
          <p className="">Programme Coordinator BE CSE </p>
          <p className="">Chief - Anna University Inspection Committee </p>
          <p className="">Faculty Advisor – Women Development Cell </p>
          <p className="">Vice President – CSE Alumni Association </p>
          <p className="">HP-Deputy Chair </p>
          <p className="">Advisor – SUN Club</p>
          <p className="">Faculty Advisor- Computer Technology Association </p>
          <p className="">ISO internal Auditor</p>
          <p className="">Academic Council Member</p>
        </div>
        <div className="w-1/4 space-y-2 text-sm">
          <h3 className="font-bold pb-7 text-base">RESEARCH</h3>
          <p className="">Senior Member IEEE and Women in Engineering </p>
          <p className="">Vice Chair -ACM PSG Chapter </p>
          <p className="">Supervisor for Research guidance in Anna University </p>
          <p className="">Reviewer of International Journals Member of Editorial Board - International Journals </p>
          <p className="">Expert - Panel of Examiners - TNPSC </p>
          <p className="">Doctoral Committee and Expert Member for PhD viva-Voce Examination </p>
          <p className="">Convener/Organizing Secretary of conferences and workshops in national and International level </p>
          <p className="">Digital initiatives @library for research</p>
        </div>
      </main>
    </section>
  );
};

export default AwardsHonors;
