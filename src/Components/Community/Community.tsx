import icon from "./Images/Icon.png";
import icon2 from "./Images/Icon (1).png";
import icon3 from "./Images/Icon (2).png";

const Details = [
  {
    images: icon,
    title1: "Membership",
    title2: "Organisations",
    detail:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    images: icon2,
    title1: "National ",
    title2: "Associations",
    detail:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    images: icon3,
    title1: "Clubs And",
    title2: "Groups",
    detail:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];
const Community = () => {
  return (
    <>
      <div className="text-center">
        <p className="text-4xl font-semibold font-sans">
          Manage your entire community
        </p>
        <p className="text-4xl font-semibold font-sans my-1">
          in a single system
        </p>
        <p className="text-sm text-gray-600 my-3">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full">
        {Details.map(({ images, title1, title2, detail }, index) => {
          return (
            <div
              key={index}
              className="text-center my-5 mx-10 flex flex-col items-center py-6  bg-green-100"
            >
              <img src={images} className="flex mx-auto my-2" alt="images" />
              <p className="font-bold font-sans text-3xl w-full my-1">
                {title1}
              </p>
              <p className="font-bold font-sans text-3xl w-full">{title2}</p>
              <p className="text-center mx-16 my-2">{detail}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Community;
