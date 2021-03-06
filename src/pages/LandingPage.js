import React from 'react'
import AcademicBackground from '../sections/AcademicBackground';
import AwardsHonors from '../sections/AwardsHonors';
import Books from '../sections/Books';
import Courses from '../sections/Courses';
import Footer from '../sections/Footer';
import Bio from '../sections/Bio';
import ImageSllider from '../sections/ImageSllider';

const LandingPage = () => {
  return (
    <div className="w-fit h-fit overflow-hidden p-0 m-0 flex flex-col justify-start items-start">
      <Bio />
      <AwardsHonors />
      <ImageSllider />
      <AcademicBackground />
      <Courses />
      <Books />
      <Footer />
    </div>
  );
};

export default LandingPage