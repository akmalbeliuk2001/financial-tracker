"use client";

import { useState } from "react";
import LoginPage from "@/app/login/page";
import ButtonBase from "@/components/atoms/ButtonBase";

export default function Home() {
  const [showLoginPage, setShowLoginPage] = useState(true);
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className={`absolute w-full h-screen bg-white text-[#333] flex items-center justify-center flex-col transition-all duration-700 ease-in-out ${showLoginPage ? 'translate-y-0' : '-translate-y-full'}`}>
        <p className="text-[40px] md:text-[60px] lg:text-[80px] text-center mx-4 leading-12 sm:leading-normal">"Your money, your move."</p>
        <ButtonBase onClick={() => setShowLoginPage(false)} className="bg-[#333] text-white rounded-full py-2 px-4 mt-5 cursor-pointer">Get Started</ButtonBase>
      </div>
      <LoginPage />
    </div>
  );
}