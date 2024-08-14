"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // handle create

  function handleCreateBtn() {}

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {["Pages", "Contact us", "Help", "Docs"].map((text) => (
        <li key={text} className="p-1 font-normal">
          <Link
            href="#"
            className="text-blue-gray-700 hover:text-blue-gray-900"
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-none">
      <nav className="sticky top-0 z-10 bg-white shadow-lg px-4 py-2 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="text-lg font-medium text-blue-gray-900">
            MyApp
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">{navList}</div>
            <div className="hidden lg:flex items-center gap-x-1">
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded"
              >
                Log in
              </Link>
            </div>
            <button
              className="lg:hidden text-blue-gray-900 focus:outline-none"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {openNav && (
          <div className="lg:hidden">
            {navList}
            <div className="flex flex-col gap-2">
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded"
              >
                Log in
              </Link>
            </div>
          </div>
        )}
      </nav>
      <div className=" w-full  py-1">
        <div
          className="relative h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url('https://media.istockphoto.com/id/2062480307/photo/ai-data-and-big-data-technology-business-people-calculate-analyze-and-visualize-complex.jpg?s=2048x2048&w=is&k=20&c=YHoBvDh1q062lcatbaKYySV9ghTt8bQv4lL9fCS3fo8=')`,
          }}
        >
          <div className="w-64 flex items-center justify-center h-screen ">
            <div className="  text-white px-16">
              <h1 className="text-5xl  font-bold">Welcome to My App</h1>
              <p className="mt-4 text-lg">Your tagline goes here</p>
              <button
                onClick={handleCreateBtn}
                className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
              >
                Creat
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-semibold text-blue-gray-900 mb-4">
        build any thing
      </h2>
      <p className="text-blue-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
        exercitationem vitae delectus esse earum veniam voluptatum veritatis
        cupiditate, atque qui deserunt nam itaque dolor consequatur harum
        deleniti, magnam nostrum saepe. Aut libero laboriosam ea sed odio
        dolorem dicta facere! Perspiciatis aliquam, earum rem vitae veritatis
        ullam laborum. Id, officia quasi!
      </p>
    </div>
  );
}
