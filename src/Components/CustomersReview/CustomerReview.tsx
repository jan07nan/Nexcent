import React from "react";
import image1 from "./Images/image 9.png";
import logo1 from "./Images/Logo (1).png";
import logo2 from "./Images/Logo (2).png";
import logo3 from "./Images/Logo (3).png";
import logo4 from "./Images/Logo (4).png";
import logo5 from "./Images/Logo (5).png";
import logo6 from "./Images/Logo (6).png";
import { FaArrowRightLong } from "react-icons/fa6";

const logoimg = [{ logos: { logo1, logo2, logo3, logo4, logo5, logo6 } }];
const CustomerReview = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row bg-gray-100  my-10 px-10 py-10">
        <img
          src={image1}
          className="  aspect-square w-full h-full"
          alt="image"
        />
        <div className="mx-4 lg:mx-10">
          <p className="text-lg">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <p className="text-green-700 text-xl my-3 font-bold">Tim Smith</p>
          <p className="text-gray-400">
            British Dragon Boat Racing Association
          </p>
          <div>
            <img src="" />
          </div>
          <div className="">
            {logoimg.map(({ logos }, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-10 my-5 "
                >
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-10">
                    {Object.values(logos).map((logo, i) => (
                      <div key={i} className="">
                        <img
                          src={logo}
                          className="w-12 h-12 object-contain"
                          alt="logoimages"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-row gap-4  text-lg font-semibold text-green-700">
                    <a className="my-2">Meet all customers</a>
                    <FaArrowRightLong className="my-3" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
