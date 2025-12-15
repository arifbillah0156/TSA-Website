"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img1 from "@/public/Images/SmallBanner1.jpeg";
import img2 from "@/public/Images/SmallBanner2.jpeg";
import img3 from "@/public/Images/SmallBanner3.jpeg";
import img4 from "@/public/Images/SmallBanner4.jpeg";
import Link from "next/link";

const HomeSection2 = () => {
  const [imgData, setImgData] = useState(null);

  useEffect(() => {
    const totalImg = [
      {
        imgUrl: img1,
        imgTxt: "আমাদের কথা",
        fullImgUrl: "/Images/SmallBanner1.jpeg",
        src: "/#our-words"
      },
      {
        imgUrl: img2,
        imgTxt: "কেন এ আয়োজন",
        fullImgUrl: "/Images/SmallBanner2.jpeg",
        src: "/#why-this-event"
      },
      {
        imgUrl: img3,
        imgTxt: "আমাদের স্বাতন্ত্র্য",
        fullImgUrl: "/Images/SmallBanner3.jpeg",
        src: "/#our-uniqueness"
      },
      {
        imgUrl: img4,
        imgTxt: "আমাদের বৈশিষ্ট্য",
        fullImgUrl: "/Images/SmallBanner4.jpeg",
        src: "/#our-specialty"
      }
    ];
    setImgData(totalImg);
  }, []);

  return (
    <div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 font-bold tiro-bangla-regular">
          {imgData
            ? imgData.map((img) => {
              return (
                <div
                  key={img.imgTxt}
                  className="bg-white text-lc underline underline-offset-4 rounded-lg shadow p-2 text-center textGradient relative hover:shadow-lg"
                >
                  <Image
                    src={img.imgUrl}
                    alt="Image"
                    placeholder="blur"
                    className="h-[300px] w-full object-cover rounded-md md:rounded-lg"
                  />
                  <div className="text-xl mt-4 mb-2">
                    <i className="fa-solid fa-arrow-right-to-bracket text-lc"></i>
                    <Link href={img.src} className="ml-2 galada-regular" >{img.imgTxt}</Link>
                  </div>
                  <div className="absolute top-0 left-1  text-gray-200 text-start text-lg md:text-2xl p-4">
                    <Link
                      href={img.fullImgUrl}
                    >
                      <i className="fa-solid fa-expand"></i>
                    </Link>
                  </div>
                </div>
              );
            })
            : (<div className="fixed inset-0 flex items-center justify-center bg-white text-lc z-50">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-lc"></div>
            </div>)}
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
