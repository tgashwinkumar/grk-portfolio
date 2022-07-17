import React from "react";
import BookList from "../json/Books/index.json";
const Books = () => {
  return (
    <section id="books" className="w-screen h-full overflow-x-hidden px-8 py-12 bg-bone m-0 flex flex-col lg:flex-row">
      <h2 className="font-playfair text-4xl font-medium w-full lg:w-1/3 mb-12">
        Books
      </h2>
      <main className="flex flex-col lg:flex-row w-full lg:w-2/3">
        <div className="w-full gap-y-8 grid grid-cols-1 lg:grid-cols-2 ">
          {BookList.map((book) => (
            <BookItem
              link={book.link}
              heading={book.title}
              image={book.image}
            />
          ))}
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
