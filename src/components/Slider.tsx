import { ISlaid } from "@/interfaces";
import React from "react";

interface ISlaider {
  data: ISlaid[];
}

const Slider = ({ data }: ISlaider) => {
  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
      <div className="justify-center p-4">
        {data.map((slide, index) => (
          <img key={index} src={slide.image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Slider;
