import React from "react";
import img1 from "./Images/image 18.png";
import img2 from "./Images/image 19.png";
import img3 from "./Images/image 20.png";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const marketingimg = [img1, img2, img3];

const cardDetails = [
  {
    content: "Creating Streamlined Safeguarding Processes with OneRen",
    fullcontent:
      "At OneRen, ensuring the safety and well-being of our community members is at the core of our mission. By streamlining safeguarding processes, we aim to create a secure, transparent, and efficient environment that protects individuals while enabling staff to respond promptly and effectively to concerns.",
  },
  {
    content:
      "What are your safeguarding responsibilities and how can you manage them?",
    fullcontent:
      "At OneRen, ensuring the safety and well-being of our community members is at the core of our mission. By streamlining safeguarding processes, we aim to create a secure, transparent, and efficient environment that protects individuals while enabling staff to respond promptly and effectively to concerns.",
  },
  {
    content: "Revamping the Membership Model with Triathlon Australia to them",
    fullcontent:
      "At OneRen, ensuring the safety and well-being of our community members is at the core of our mission. By streamlining safeguarding processes, we aim to create a secure, transparent, and efficient environment that protects individuals while enabling staff to respond promptly and effectively to concerns.",
  },
];
const Marketing = () => {
  return (
    <>
      <div className="text-center">
        <p className="mx-4 text-3xl font-semibold">
          Caring is the new marketing
        </p>
        <p className="m-6 lg:mx-96">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.​
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-lg px-3 m-auto gap-5">
        {marketingimg.map((bgimg, i) => (
          <div key={i}>
            <img className="w-full aspect-square" src={bgimg} />
          </div>
        ))}
        {cardDetails.map(({ content, fullcontent }, index) => {
          return (
            <div
              key={index}
              className="bg-slate-100 -mt-28 rounded-lg py-3 mx-5 my-4 "
            >
              <p className="text-center px-6 text-md font-semibold text-gray-800">
                {content}
              </p>
              <HoverCard>
                <HoverCardTrigger className="flex flex-row mt-2 items-center justify-center text-green-800 font-semibold">
                  Readmore <FaArrowRightLong className="text-sm mx-2 my-2" />
                </HoverCardTrigger>
                <HoverCardContent>{fullcontent}</HoverCardContent>
              </HoverCard>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Marketing;
