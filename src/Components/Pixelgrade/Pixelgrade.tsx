import pixelimg from "./Images/rafiki.png";
const Pixelgrade = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <img src={pixelimg} className=" w-full object-contain" alt="image" />
        </div>
        <div className="flex-1 my-4 px-6 md:my-36">
          <p className="text-4xl md:text-5xl text-gray-900 font-semibold">
            The unseen of spending three years at Pixelgrade
          </p>
          <p className="text-md text-gray-600 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="my-4 px-4 py-2 rounded-md text-slate-50 bg-green-700 hover:text-green-700 hover:bg-slate-50">
            Learn more
          </button>
        </div>
      </div>
    </>
  );
};

export default Pixelgrade;
