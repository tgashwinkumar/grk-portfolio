import React from "react";

const Books = () => {
  return (
    <section className="w-screen h-full overflow-x-hidden px-8 py-12 bg-bone m-0 flex flex-col lg:flex-row">
      
        <h2 className="font-playfair text-4xl font-medium w-full lg:w-1/3 mb-12">
          Books
        </h2>
        <main className="flex flex-col lg:flex-row w-full lg:w-2/3">
          <div className="w-full gap-y-8 grid grid-cols-1 lg:grid-cols-2 ">
            <BookItem
              link={
                "https://www.amazon.in/Smart-Cyber-Physical-Systems-Opportunities-ebook/dp/B08MW9YCMY"
              }
              heading={
                "Smart Cyber Physical Systems: Advances, Challenges and Opportunities (CRC Press - 2021)"
              }
              image="https://m.media-amazon.com/images/I/51HG9tTkGjL._SY346_.jpg"
            />
            <BookItem
              link={
                "https://www.amazon.in/Algorithms-Applications-Processing-Computational-Intelligence-ebook/dp/B082HFH86X"
              }
              heading={
                "Recent Advances on Memetic Algorithms and its Applications in Image Processing (Springer - Studies in Computational Intelligence Book 873) 1st ed. 2020 Edition"
              }
              image="https://m.media-amazon.com/images/I/51w75v6bmsL._SY346_.jpg"
            />
            <BookItem
              link={
                "https://www.amazon.com/Computing-Paradigms-Smart-Healthcare-Vinoth/dp/1536186198"
              }
              heading={
                "Computing Paradigms for Smart Healthcare (Nova Science Publishers)"
              }
              image="https://images-na.ssl-images-amazon.com/images/I/41KBJAbzEZL._SX314_BO1,204,203,200_.jpg"
            />
          </div>
        </main>
    </section>
  );
};

export default Books;

export const BookItem = ({ heading, link, image }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-start items-start lg:space-x-6 space-y-6 lg:space-y-0">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        alt=""
        className="h-72 w-48 "
      />
      <div className="space-y-2 w-full pr-24">
        <h2 className="text-lg font-bold">{heading}</h2>
        <p className="text-sm hover:underline">{link}</p>
      </div>
    </div>
  );
};
