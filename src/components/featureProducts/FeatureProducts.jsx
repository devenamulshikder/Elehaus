import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import watch from "../../assets/d2.jpg";
import { FcRating } from "react-icons/fc";
import { PiShoppingCartThin } from "react-icons/pi";
const FeatureProducts = () => {
  return (
    <div className="max-w-7xl mx-auto p-2 flex flex-col lg:flex-row  gap-5 lg:gap-10">
      <div className="lg:w-2/7 lg:h-1/2 border-[#E73C17] border-2">
        <div className="bg-[#e73c17] text-white p-4 flex items-center justify-between">
          <h1 className="text-2xl lg:text-4xl font-semibold">Daily Deals!</h1>
          <div className="flex gap-5 text-2xl lg:text-3xl">
            <FaLessThan />
            <FaGreaterThan />
          </div>
        </div>

        <div className="flex flex-col justify-center  p-4 lg:p-10">
          <img src={watch} alt="" />
          <h1 className="text-xl font-semibold">
            Smart Watch New Samsung M-25
          </h1>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-[#E73C17] text-xl my-2">
                $256.00
              </p>
              <div className="flex gap-1 text-xl">
                <FcRating />
                <FcRating />
                <FcRating />
                <FcRating />
                <FcRating />
              </div>
            </div>
            <div>
              <button className="text-2xl lg:text-3xl hover:text-[#e73c17] hover:bg-gray-200 hover:cursor-pointer border rounded-2xl px-3 py-1 border-gray-300 transform duration-300">
                <PiShoppingCartThin />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-5/7">
        <h1 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-10">Featured Products!</h1>

        {/* card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          {/* card 1 */}
          <div className="flex flex-col justify-center  p-4 lg:p-10 border border-r-0 border-gray-200">
            <img src={watch} alt="" />
            <h1 className="text-xl font-semibold">
              Smart Watch New Samsung M-25
            </h1>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-[#E73C17] text-xl my-2">
                  $256.00
                </p>
                <div className="flex gap-1 text-xl">
                  <FcRating />
                  <FcRating />
                  <FcRating />
                  <FcRating />
                  <FcRating />
                </div>
              </div>
              <div>
                <button className="text-2xl lg:text-3xl hover:text-[#e73c17] hover:bg-gray-200 hover:cursor-pointer border rounded-2xl px-3 py-1 border-gray-300 transform duration-300">
                  <PiShoppingCartThin />
                </button>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="flex flex-col justify-center p-4 lg:p-10 border border-r-0 border-gray-200">
            <img src={watch} alt="" />
            <h1 className="text-xl font-semibold">
              Smart Watch New Samsung M-25
            </h1>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-[#E73C17] text-xl my-2">
                  $256.00
                </p>
                <div className="flex gap-1 text-xl">
                  <FcRating />
                  <FcRating />
                  <FcRating />
                  <FcRating />
                  <FcRating />
                </div>
              </div>
              <div>
                <button className="text-2xl lg:text-3xl hover:text-[#e73c17] hover:bg-gray-200 hover:cursor-pointer border rounded-2xl px-3 py-1 border-gray-300 transform duration-300">
                  <PiShoppingCartThin />
                </button>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="flex flex-col justify-center  p-4 lg:p-10 border  border-gray-200">
            <img src={watch} alt="" />
            <h1 className="text-xl font-semibold">
              Smart Watch New Samsung M-25
            </h1>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-[#E73C17] text-xl my-2">
                  $256.00
                </p>
                <div className="flex gap-1 text-xl">
                  <FcRating />
                  <FcRating />
                  <FcRating />
                  <FcRating />
                  <FcRating />
                </div>
              </div>
              <div>
                <button className="text-2xl lg:text-3xl hover:text-[#e73c17] hover:bg-gray-200 hover:cursor-pointer border rounded-2xl px-3 py-1 border-gray-300 transform duration-300">
                  <PiShoppingCartThin />
                </button>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div className="flex flex-col justify-center p-4 lg:p-10 border border-r-0 border-t-0 border-gray-200">
            <img src={watch} alt="" />
            <h1 className="text-xl font-semibold">
              Smart Watch New Samsung M-25
            </h1>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-[#E73C17] text-xl my-2">
                  $256.00
                </p>
                <div className="flex gap-1 text-xl">
                  <FcRating />
                  <FcRating />
                  <FcRating />
                  <FcRating />
                  <FcRating />
                </div>
              </div>
              <div>
                <button className="text-2xl lg:text-3xl hover:text-[#e73c17] hover:bg-gray-200 hover:cursor-pointer border rounded-2xl px-3 py-1 border-gray-300 transform duration-300">
                  <PiShoppingCartThin />
                </button>
              </div>
            </div>
          </div>
          {/* card 5 */}
          <div className="flex flex-col justify-center p-4 lg:p-10 border border-r-0 border-t-0 border-gray-200">
            <img src={watch} alt="" />
            <h1 className="text-xl font-semibold">
              Smart Watch New Samsung M-25
            </h1>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-[#E73C17] text-xl my-2">
                  $256.00
                </p>
                <div className="flex gap-1 text-xl">
                  <FcRating />
                  <FcRating />
                  <FcRating />
                  <FcRating />
                  <FcRating />
                </div>
              </div>
              <div>
                <button className="text-2xl lg:text-3xl hover:text-[#e73c17] hover:bg-gray-200 hover:cursor-pointer border rounded-2xl px-3 py-1 border-gray-300 transform duration-300">
                  <PiShoppingCartThin />
                </button>
              </div>
            </div>
          </div>
          {/* card 6 */}
          <div className="flex flex-col justify-center p-4 lg:p-10 border border-t-0 border-gray-200">
            <img src={watch} alt="" />
            <h1 className="text-xl font-semibold">
              Smart Watch New Samsung M-25
            </h1>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-[#E73C17] text-xl my-2">
                  $256.00
                </p>
                <div className="flex gap-1 text-xl">
                  <FcRating />
                  <FcRating />
                  <FcRating />
                  <FcRating />
                  <FcRating />
                </div>
              </div>
              <div>
                <button className="text-2xl lg:text-3xl hover:text-[#e73c17] hover:bg-gray-200 hover:cursor-pointer border rounded-2xl px-3 py-1 border-gray-300 transform duration-300">
                  <PiShoppingCartThin />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
