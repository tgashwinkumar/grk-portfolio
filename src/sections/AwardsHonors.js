import React from "react";

const AwardsHonors = () => {
  return (
    <section className="w-full h-full overflow-x-hidden bg-bone px-6 lg:px-8 py-12 flex flex-col lg:flex-row m-0">
      <h2 className="font-playfair text-4xl font-medium w-full lg:w-1/3 mb-12">
        Awards, Honors and Recognitions
      </h2>
      <main className="flex-1 font-lato lg:w-2/3 lg:flex-row grid grid-cols-1 lg:grid-cols-3 gap-x-6 ">
        {/* <div className="hidden lg:block lg:w-1/4"></div> */}
        <div className="w-full  space-y-2 text-sm">
          <h3 className="font-bold pb-7 text-base">ACADEMIC</h3>
          <p className="text-lg">Teacher of the Year - 2015 Award </p>
          <p className="text-lg">Lead – Established 6 state of Art Laboratories </p>
          <p className="text-lg">
            University Nominee/Member/Subject Expert of Board of Studies in
            Government, Govt.aided and Private Engineering Colleges
          </p>
          <p className="text-lg">
            Coordinator for compiling Accreditation SAR from 2008 onwards{" "}
          </p>
          <p className="text-lg">Mobile App Development for AIR lab (Skylanot) </p>
          <p className="text-lg">
            Mobile App Development Library (Exordium) –available in Google play
            store{" "}
          </p>
          <p className="text-lg">Guide - Best Project awards</p>
          <p className="text-lg">
            Member of Finishing School and career Guidance committee
          </p>
          <p className="text-lg">
            Recommendations to Foreign universities for higher studies
          </p>
        </div>
        <div className="w-full  space-y-2 text-sm">
          <h3 className="font-bold pb-7 text-base">ADMINISTRATIVE</h3>
          <p className="text-lg">CMI level 5 award (Management and Leadership) </p>
          <p className="text-lg">Professor I/C GRD Library </p>
          <p className="text-lg">Programme Coordinator BE CSE </p>
          <p className="text-lg">Chief - Anna University Inspection Committee </p>
          <p className="text-lg">Faculty Advisor – Women Development Cell </p>
          <p className="text-lg">Vice President – CSE Alumni Association </p>
          <p className="text-lg">HP-Deputy Chair </p>
          <p className="text-lg">Advisor – SUN Club</p>
          <p className="text-lg">Faculty Advisor- Computer Technology Association </p>
          <p className="text-lg">ISO internal Auditor</p>
          <p className="text-lg">Academic Council Member</p>
        </div>
        <div className="w-full space-y-2 text-sm">
          <h3 className="font-bold pb-7 text-base">RESEARCH</h3>
          <p className="text-lg">Senior Member IEEE and Women in Engineering </p>
          <p className="text-lg">Vice Chair -ACM PSG Chapter </p>
          <p className="text-lg">Supervisor for Research guidance in Anna University </p>
          <p className="text-lg">Reviewer of International Journals Member of Editorial Board - International Journals </p>
          <p className="text-lg">Expert - Panel of Examiners - TNPSC </p>
          <p className="text-lg">Doctoral Committee and Expert Member for PhD viva-Voce Examination </p>
          <p className="text-lg">Convener/Organizing Secretary of conferences and workshops in national and International level </p>
          <p className="text-lg">Digital initiatives @library for research</p>
        </div>
      </main>
    </section>
  );
};

export default AwardsHonors;
