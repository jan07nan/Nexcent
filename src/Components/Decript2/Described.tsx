import pan from "./Images/pana.png";

const Described = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <img src={pan} className=" w-full object-contain" alt="image" />
        </div>
        <div className="flex-1 my-4 px-6 md:my-36">
          <p className="text-4xl md:text-5xl text-gray-900 font-semibold">
            How to design your site footer like we did
          </p>
          <p className="text-md text-gray-600 mt-6">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="my-4 px-4 py-2 rounded-md text-slate-50 bg-green-700 hover:text-green-700 hover:bg-slate-50">
            Learn more
          </button>
        </div>
      </div>
    </>
  );
};

export default Described;
