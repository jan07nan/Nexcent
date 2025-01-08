import illution from "./Images/Illustration.png";
const HomeContent = () => {
  return (
    <div className="flex flex-col mt-28 md:flex-row">
      <div className=" flex-1">
        <img className="w-full px-20 object-contain" src={illution} />
      </div>
      <div className=" flex-1 my-28 px-10 ">
        <h1 className="text-5xl font-semibold font-sans">
          Lessons and insights
        </h1>
        <h1 className="text-5xl font-semibold font-sans text-green-700 my-2">
          from 8 years
        </h1>
        <p className="mt-4 text-slate-600">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="px-5 py-2 my-16 bg-green-700 text-slate-50 hover:bg-slate-50 hover:text-green-700">
          Register
        </button>
      </div>
    </div>
  );
};

export default HomeContent;
