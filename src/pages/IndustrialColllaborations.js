import React, { useState } from "react";
import PageTemplate from "./PageTemplate";
import CollaborationsJSON from "../json/Collaborations/index.json";

const IndustrialColllaborations = () => {
  return (
    <PageTemplate heading="Industrial Collaborations">
      <div className="flex flex-col space-y-6">
        {CollaborationsJSON.map((item, index) => (
          <ICItem
            key={index}
            name={item.name}
            body={item.body}
            role={item?.role}
            date={item?.date}
            image={item?.image}
          />
        ))}
      </div>
    </PageTemplate>
  );
};

export default IndustrialColllaborations;

const ICItem = ({ name, body, role = "", date = "", image = "" }) => {
  const [isOnReadMore, setIsOnReadMore] = useState(false);

  return (
    <div className="w-full bg-black flex flex-col lg:flex-row items-start justify-start">
      <div
        className="h-48 lg:h-56 lg:w-[20rem] w-full"
        style={{
          background: `url(${image})`,
          backgroundOrigin: "center",
          backgroundSize: "cover",
          filter: "grayscale(100%)",
        }}
      ></div>
      <div className="flex flex-col text-white h-full p-4 flex-1 space-y-2">
        <p className="font-playfair font-semibold text-xl">{name}</p>
        <div className="flex justify-between items-center w-full">
          <p className="font-lato italic text-sm">{role}</p>
          <p className="font-lato italic text-sm">{date}</p>
        </div>
        <p className="font-lato text-base text-white w-full text-justify">&emsp;&emsp;&emsp;{body}</p>
      </div>
    </div>
  );
};
