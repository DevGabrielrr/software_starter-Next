import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";

const MobileNav = () => {
  return (
    <div>
      {/* Overlay */}
      <div className="fixed inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-svh"></div>

      {/* NavLinks */}
      <div className="text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-blue-900 space-y-6 z-[1050]">
        {NavLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                {link.Label}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;
