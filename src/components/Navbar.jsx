import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="main text-white bg-blue-950 p-5  flex justify-between item-center flex-wrap md:flex lg:flex sm:flex shadow-md sticky top-0">
        <div className="left item-center flex justify-center gap-4">
          <img
           className='w-10 ' src="https://movie-app-88kamal.vercel.app/clipart3105859.png"

            alt=""
          />
          <h2 className="mt-1 font-sans font-bold text-2xl">MovieWatch</h2>
        </div>

        <div className="right justify-center  ">
          <ul className="flex item-center gap-3 mt-2  justify-center">

            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>

          </ul>
        </div>
      </div>
    </>
  );
}
