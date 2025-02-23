import { FaArrowRightLong } from "react-icons/fa6";
import hero from "../../assets/slider3.png";
import hero2 from "../../assets/slider3-shape1.png";
const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto lg:flex lg:justify-evenly lg:items-center p-2 lg:my-16">
      <div className=" text-center">
        <p className="uppercase font-bold text-lg mt-10 lg:mt-24">
          new Arrivals
        </p>
        <h1 className="text-5xl lg:text-7xl font-bold my-5 lg:my-7">
          Smart Products <br /> For Your Life
        </h1>
        <h3 className="text-2xl font-bold">
          Up To <span className="text-[#E73C17]">25% </span>
          Off
        </h3>
        <button className="border bg-white text-black hover:bg-[#e73c17] hover:text-white border-none transform duration-500 uppercase py-3 px-5 lg:px-6 my-5 lg:mt-10 font-semibold flex items-center gap-2">
          shop now <FaArrowRightLong size={20} />
        </button>
        <div className="hidden lg:block lg:mt-18">
          <img src={hero2} alt="" />
        </div>
      </div>
      <div className="mt-10">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
