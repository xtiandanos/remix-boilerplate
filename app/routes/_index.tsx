import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
// import { BsArrowLeftShort } from "react-icons/bs";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="flex">
      <div className={`bg-dark-purple h-screen p-5 pt-8  relative`}>
        <button
          className={`text-dark-purple bg-white text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
            isOpen ? "w-72" : "w-20"
          }`}
          onClick={() => {
            console.log("test", isOpen);
            setIsOpen(!isOpen);
          }}
        >
          click here
        </button>
      </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  );
}
