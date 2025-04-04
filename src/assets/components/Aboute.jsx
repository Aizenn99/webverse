import React from "react";
import { motion } from "framer-motion";

const Aboute = () => {
  return (
    <div>
      {/* First section */}
      <div className="mt-10">
        <h1 className="text-xl lg:text-3xl ml-3 font-bold flex justify-center text-blue-500 ">
          Welcome To Industrail Painter
        </h1>
        <div className="lg:flex justify-between items-center mt-5">
          <div className="lg:w-[50%] w-full mb-5 lg:mb-0">
            <motion.img
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              src="/paint.jpg"
              className="w-full h-[350px] object-cover rounded-lg"
              alt=""
            />
          </div>
          <div className="lg:w-[50%] w-full">
            <p className="text-lg text-gray-500 p-4 ml-5 mt-5 tracking-tighter ">
              Industrial Painter, is a nationwide industrial painting and
              commercial painting contractor, comprised of surface preparation
              specialists and experienced protective coating applicators. The
              management and production crews collectively provide over hundreds
              of years in the painting business. Our commercial painters are
              pledged to provide the most efficient and highest quality services
              available, known as perfection!
            </p>
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className="mt-10">
        <h1 className="text-xl lg:text-3xl ml-3 font-bold flex justify-center text-blue-500 ">
          Industrial Painters & Commercial Painters Perfection
        </h1>
        <div className="lg:flex justify-between items-center mt-5">
          <div className="lg:w-[50%] w-full">
            <p className="text-lg text-gray-500 p-4 ml-5 mt-5 tracking-tighter ">
              Industrial Painters strives to provide customers zero defect
              performance and on-time completions, for any industrial painting
              or commercial painting project. The very best paint manufacturers
              represent the backbone of expertise in our product engineering
              section. We can take on any worst case scenarios with confidence
              and produce perfection. Do you have an industrial painting or
              commercial painting project coming up? Commercial Painter offers
              what you want most, choices! The fact is, we will offer you more
              ideas and better solutions than many other painting companies. We
              provide a no obligation, on-site inspection, consulting service
              with free quotes. Get your best quote within our industry. Please
              include Industrial Painter to your list of bidders for any
              industrial painting or commercial painting job requiring
              perfection.
            </p>
          </div>
          <div className="lg:w-[50%] w-full mb-5 lg:mb-0">
            <motion.img
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              src="/paint2.jpg"
              className="w-full h-[350px] object-cover rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Third section */}
      <div className="mt-10">
        <h1 className="text-xl lg:text-3xl ml-3 font-bold flex justify-center text-blue-500 ">
          Single Source Commercial Painter
        </h1>
        <div className="lg:flex justify-between items-center mt-5">
          <div className="lg:w-[50%] w-full mb-5 lg:mb-0">
            <motion.img
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              src="/paint3.jpg"
              className="w-full h-[350px] object-cover rounded-lg"
              alt=""
            />
          </div>
          <div className="lg:w-[50%] w-full">
            <p className="text-lg text-gray-500 p-4 ml-5 mt-5 tracking-tighter ">
              Commercial Painter is a single source painting company responsible
              for industrial painting and commercial painting, sandblasting,
              water blasting, deep cleaning and lead abatement projects. Looking
              for a total industrial painting or commercial painting package,
              Our commercial painters deliver!
            </p>
          </div>
        </div>
      </div>
    </div>
  )}

  export default Aboute