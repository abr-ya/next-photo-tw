import React from "react";

interface IHero {
  buttonLabel: string;
  title: string;
  text: string;
}

const Hero = ({ buttonLabel, title, text }: IHero) => (
  <div className="flex items-center justify-center h-screen mb-10 bg-fixed bg-center bg-cover custom-img">
    {/* Overlay */}
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
    <div className="p-5 text-white z-[2] mt-[-10rem]">
      <h2 className="text-5xl font-bold">{title}</h2>
      <p className="py-5 text-xl">{text}</p>
      <button className="px-8 py-2 border">{buttonLabel}</button>
    </div>
  </div>
);

export default Hero;
