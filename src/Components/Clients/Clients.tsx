import logo1 from "./Images/Logo (1).png";
import logo2 from "./Images/Logo (2).png";
import logo3 from "./Images/Logo (3).png";
import logo4 from "./Images/Logo (4).png";
import logo5 from "./Images/Logo (5).png";
import logo6 from "./Images/Logo (6).png";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const logo = [logo1, logo2, logo3, logo4, logo5, logo6];
const Clients = () => {
  return (
    <div className="w-full bg-gray-100 py-5 my-5">
      <div className="flex flex-col  text-center ">
        <p className="text-4xl">Our Clients</p>
        <p className="text-lg my-3 text-slate-600">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="flex flex-row justify-between items-center my-5">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full mx-20"
        >
          <CarouselContent>
            {logo.map((image) => (
              <CarouselItem key={image} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 flex justify-center">
                  <span className="text-3xl font-semibold">
                    <img src={image} />
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Clients;
