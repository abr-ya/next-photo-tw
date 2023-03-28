import React, { useState } from "react";
import Image from "next/image";
import { ISlaid } from "@/interfaces";

interface ISlaider {
  data: ISlaid[];
}

const Slider = ({ data }: ISlaider) => {
  const [current] = useState(0);

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
      <div className="relative flex justify-center p-4">
        {data.map((slide, index) => (
          <div key={index} className={index === current ? "opacity-[1] ease-in duration-1000" : "opacity-0"}>
            {index === current && <Image src={slide.image} alt="/" width="1440" height="600" objectFit="cover" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
