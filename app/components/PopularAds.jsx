"use client";
import { Container } from "@chakra-ui/react";
import React from "react";
import { BsFillPersonVcardFill, BsBoxSeam } from "react-icons/bs";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaCross, FaHandsHelping } from 'react-icons/fa';

const PopularAds = () => {
  return (
    <div className="pb-48">
      <Container maxW={"7xl"}>
        <div className="">
          <h3 className="text-center text-3xl font-semibold lg:mb-10 max-md:mb-8">
            <span className="text-primary">Popular AD Categories</span>
          </h3>

          <div className="lg:grid lg:grid-cols-3 gap-6 lg:mb-10">
            {/* ad 1 */}
            <div className="rounded-full group hover:bg-primary transition-all duration-300 flex justify-center items-center py-4 px-4 seye-shadow max-md:mb-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full px-2 py-2 bg-gray-100 group-hover:bg-opacity-25">
                  <BsFillPersonVcardFill size={26} className="text-red-400 group-hover:text-white" />
                </div>{" "}
                <p className="group-hover:text-white">Change of Name</p>
              </div>
            </div>

            <div className="rounded-full group hover:bg-primary transition-all duration-300 flex justify-center items-center py-4 px-4 seye-shadow max-md:mb-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full px-2 py-2 bg-gray-100 group-hover:bg-opacity-25">
                  <MdOutlineRealEstateAgent size={26} className="text-blue-400 group-hover:text-white" />
                </div>{" "}
                <p className="group-hover:text-white">Real Estate</p>
              </div>
            </div>

            <div className="rounded-full group hover:bg-primary transition-all duration-300 flex justify-center items-center py-4 px-4 seye-shadow max-md:mb-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full px-2 py-2 bg-gray-100 group-hover:bg-opacity-25">
                  <FaCross size={26} className="text-purple-400 group-hover:text-white" />
                </div>{" "}
                <p className="group-hover:text-white">Memorial/Obituary</p>
              </div>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 gap-6 lg:px-60">
            {/* ad 1 */}
            <div className="rounded-full group hover:bg-primary transition-all duration-300 flex justify-center items-center py-4 px-4 seye-shadow max-md:mb-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full px-2 py-2 bg-gray-100 group-hover:bg-opacity-25">
                  <FaHandsHelping size={26} className=" text-green-400 group-hover:text-white" />
                </div>{" "}
                <p className="group-hover:text-white">Vacancies</p>
              </div>
            </div>

            <div className="rounded-full group hover:bg-primary transition-all duration-300 flex justify-center items-center py-4 px-4 seye-shadow max-md:mb-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full px-2 py-2 bg-gray-100 group-hover:bg-opacity-25">
                  <BsBoxSeam size={26} className=" text-pink-400 group-hover:text-white" />
                </div>{" "}
                <p className="group-hover:text-white">Product ADs</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PopularAds;