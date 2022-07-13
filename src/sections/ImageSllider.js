import React from "react";

const Images = [
  {
    link: "https://i.ibb.co/mFxJhsS/Adobe-Scan-May-09-2022-97-1.jpg",
    text: "Computer Technology Association - SOA",
  },
  {
    link: "https://i.ibb.co/g6x5RjP/Adobe-Scan-May-24-2022-30-1-2.jpg",
    text: "Cordy's MoU",
  },
  {
    link: "https://i.ibb.co/SsBxSr6/Adobe-Scan-May-25-2022-7-1.jpg",
    text: "5th National Conference on Advanced Computing",
  },
  {
    link: "https://i.ibb.co/K0bmYMV/image0.jpg",
    text: "CSE - Inaugural Meeting",
  },
];

const ImageSllider = () => {
  return (
    <div className="m-0 p-0 py-24 grid grid-cols-1 lg:grid-cols-4 bg-bone w-screen overflow-x-hidden gap-y-1">
      {Images.map((img) => (
        <ImageHolder image={img.link} text={img.text} />
      ))}
    </div>
  );
};

export default ImageSllider;

export const ImageHolder = ({ image, text }) => {
  return (
    <div
      className="h-64 w-96 relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPostion: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        filter: "grayscale(100%)",
      }}
    >
      <div className="absolute text-xs bottom-1 left-0 px-4 py-1 w-full bg-gradient-to-r text-white from-[rgba(0,0,0,.4)] ia-transparent to-[rgba(0,0,0,.4)]">
        {text}
      </div>
    </div>
  );
};
