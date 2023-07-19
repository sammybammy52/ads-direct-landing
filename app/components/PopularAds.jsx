"use client";
import { Container } from "@chakra-ui/react";
import React from "react";
import { BsFillPersonVcardFill, BsBoxSeam } from "react-icons/bs";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaCross, FaHandsHelping } from "react-icons/fa";
import Image from "next/image";
import phone from "../assets/images/pngs/phone.png";
import Fade from "react-reveal/Fade";

const PopularAds = () => {
  return (
    <div className="bg-blue-50 pb-28">
      <Container maxW={"7xl"}>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
         
          <Fade left duration={1500} delay={300}>
            <div className="">
              <h3 className="text-center text-3xl font-semibold lg:mb-10 max-md:mb-8">
                <span className="text-primary">Popular AD <span className=" text-secondary">Categories</span> </span>
              </h3>

              <div className="lg:grid lg:grid-cols-2 gap-6 lg:mb-10">
                {/* ad 1 */}
                <div className="rounded-full group hover:bg-primary transition-all duration-300 flex justify-center items-center py-4 px-4 seye-shadow max-md:mb-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full px-2 py-2 bg-gray-100 group-hover:bg-opacity-25">
                      <BsFillPersonVcardFill
                        size={26}
                        className="text-red-400 group-hover:text-white"
                      />
                    </div>{" "}
                    <p className="group-hover:text-white">Change of Name</p>
                  </div>
                </div>

                <div className="rounded-full group hover:bg-primary transition-all duration-300 flex justify-center items-center py-4 px-4 seye-shadow max-md:mb-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full px-2 py-2 bg-gray-100 group-hover:bg-opacity-25">
                      <MdOutlineRealEstateAgent
                        size={26}
                        className="text-blue-400 group-hover:text-white"
                      />
                    </div>{" "}
                    <p className="group-hover:text-white">Real Estate</p>
                  </div>
                </div>

                <div className="rounded-full group hover:bg-primary transition-all duration-300 flex justify-center items-center py-4 px-4 seye-shadow max-md:mb-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full px-2 py-2 bg-gray-100 group-hover:bg-opacity-25">
                      <FaCross
                        size={26}
                        className="text-purple-400 group-hover:text-white"
                      />
                    </div>{" "}
                    <p className="group-hover:text-white">Memorial/Obituary</p>
                  </div>
                </div>

                {/* ad 1 */}
                <div className="rounded-full group hover:bg-primary transition-all duration-300 flex justify-center items-center py-4 px-4 seye-shadow max-md:mb-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full px-2 py-2 bg-gray-100 group-hover:bg-opacity-25">
                      <FaHandsHelping
                        size={26}
                        className=" text-green-400 group-hover:text-white"
                      />
                    </div>{" "}
                    <p className="group-hover:text-white">Vacancies</p>
                  </div>
                </div>

                <div className="rounded-full group hover:bg-primary transition-all duration-300 flex justify-center items-center py-4 px-4 seye-shadow max-md:mb-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full px-2 py-2 bg-gray-100 group-hover:bg-opacity-25">
                      <BsBoxSeam
                        size={26}
                        className=" text-pink-400 group-hover:text-white"
                      />
                    </div>{" "}
                    <p className="group-hover:text-white">Product ADs</p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          <Fade left duration={1500} delay={100}>
            <Image
              className="h-[505px] object-contain rounded-xl moving-div dark:block"
              src={phone}
              alt="dashboard image"
            />
          </Fade>
        </div>
      </Container>
    </div>
  );
};

export default PopularAds;
