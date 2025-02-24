import { FaArrowRightLong } from "react-icons/fa6";
import trigger from "../../assets/9.jpg";
import airPod from "../../assets/10.jpg";
const GetOff = () => {
  return (
    <div className="max-w-7xl mx-auto p-2 my-10 lg:my-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-20">
        <div className="lg:col-span-2">
          <div className="absolute text-white z-20 ml-5 lg:ml-10 lg:mt-18">
            <p className="text-lg font-semibold lg:my-2 mt-1">Get 50% Off</p>
            <h1 className="text-2xl lg:text-4xl font-semibold ">
              SMART PHONE <br /> WITH PEN
            </h1>
            <button className="border cursor-pointer hover:bg-white hover:text-black bg-[#e73c17] border-none transform duration-500 uppercase py-3 px-5 lg:px-6 my-2 lg:my-5 lg:mt-10 font-semibold flex items-center gap-2">
              shop now <FaArrowRightLong size={20} />
            </button>
          </div>
          <div className="">
            <img src={trigger} alt="" />
          </div>
        </div>
        <div className="lg:col-span-1 ">
          <div>
            <div className="absolute text-white z-20 ml-5 lg:ml-10 mt-38">
              <p className=" font-semibold lg:my-2 mt-1">Get 50% Off</p>
              <h1 className="text-2xl lg:text-3xl font-semibold ">
                AIRPOD PRO
              </h1>
              <button className="border cursor-pointer bg-white text-black hover:bg-[#e73c17] hover:text-white border-none transform duration-500 uppercase py-3 px-5 lg:px-6 my-2 lg:my-5  font-semibold flex items-center gap-2">
                shop now <FaArrowRightLong size={20} />
              </button>
            </div>
            <div className="">
              <img src={airPod} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetOff;
