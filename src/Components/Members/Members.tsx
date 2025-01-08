import icon1 from "./Images/Icon (3).png";
import icon2 from "./Images/Icon (4).png";
import icon3 from "./Images/Icon (5).png";
import icon4 from "./Images/Icon (6).png";

const MemberDetails = [
  {
    image: icon1,
    count: "2,245,341",
    names: "Members",
  },
  {
    image: icon2,
    count: "46,328",
    names: "clubs",
  },
  {
    image: icon3,
    count: "828,867",
    names: "Event bookings",
  },
  {
    image: icon4,
    count: "1,925,341",
    names: "Payment",
  },
];
const Members = () => {
  return (
    <>
      <div className="my-4 px-6 py-5 bg-gray-100 flex flex-col lg:flex-row">
        <div className="mx-10 my-4 md:m-20">
          <p className="text-3xl md:text-5xl font-semibold">Helping a local </p>
          <p className="text-3xl md:text-5xl font-semibold text-green-800">
            business reinvent itself
          </p>
          <p className="text-md text-gray-900 mt-2">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 m-10 md:px-14">
          {MemberDetails.map(({ image, count, names }, index) => {
            return (
              <div key={index} className="flex flex-row m-4">
                <div>
                  <img className="w-10 h-10 my-2" src={image} alt="icons" />
                </div>
                <div className="mx-5">
                  <p className="text-3xl">{count}</p>
                  <p className="text-md text-gray-500">{names}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Members;
