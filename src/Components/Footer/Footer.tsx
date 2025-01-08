import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { FiSend } from "react-icons/fi";

const navlinks = [
  {
    title: "Company",
    links: ["About us", "Blogs", "Contact us", "Princing", "Testimonials"],
  },
];

const services = [
  {
    title: "Support",
    links: [
      "Help center",
      "Terms of service",
      "Legal",
      "Privacy policy",
      "Status",
    ],
  },
];
const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-black text-white p-4 md:p-10 ">
        <div className="flex-1 my-5 ">
          <p className="text-4xl text-bold">Nexcent</p>
          <p className="mt-4 text-gray-400 ">Copyright © 2024 Jan ltd. </p>
          <p className="text-gray-400">All rights not reserved.</p>
          <div className="flex flex-row gap-5 my-5 text-2xl">
            <button className="">
              <FaInstagram />
            </button>
            <button>
              <FaTelegram />
            </button>
            <button>
              <FaTwitter />
            </button>
            <button>
              <FaYoutube />
            </button>
          </div>
        </div>
        <div style={{ flex: 1.5 }} className="grid grid-cols-2 md:grid-cols-3">
          <div className="my-5">
            {navlinks.map(({ title, links }, index) => {
              return (
                <div key={index}>
                  <p className="text-xl pb-3 font-bold">{title}</p>
                  {links.map((link, index) => {
                    return (
                      <p className="text-md py-1" key={index}>
                        {link}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="my-5">
            {services.map(({ title, links }, index) => {
              return (
                <div key={index}>
                  <p className="text-xl pb-3 font-bold">{title}</p>
                  {links.map((link, index) => {
                    return (
                      <p className="text-md py-1 text-slate-200" key={index}>
                        {link}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="my-5">
            <p className="text-xl pb-3 font-bold">Stay up to date</p>
            <div className="relative w-full">
              <Input
                placeholder="Your email address"
                className=" my-4 placeholder-white bg-gray-800 opacity-20 border-none"
              />
              <FiSend className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
