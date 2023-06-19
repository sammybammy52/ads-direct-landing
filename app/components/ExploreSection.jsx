// "use client";
// import { Container } from "@chakra-ui/react";
// import { GiCommercialAirplane, GiStreetLight, GiTv } from "react-icons/gi";
// import { MdMovie } from "react-icons/md";
// import { HiDesktopComputer } from "react-icons/hi";
// import { MdNewspaper } from "react-icons/md";
// import { BsFillCarFrontFill, BsTagsFill } from "react-icons/bs";
// import { IoMdRadio } from "react-icons/io";
// import Fade from "react-reveal/Fade";

// import ExploreCard from "./cards/ExploreCard";
// const ExploreSection = () => {
//   return (
//     <Container maxW={"7xl"}>
//       <h3 className="text-center text-3xl font-semibold mb-10">
//         <span className="text-primary">Explore Ad Boards by genre</span>
//       </h3>
//       <Fade left delay={300} duration={1700}>
//         <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
//           <ExploreCard
//             icon={<MdNewspaper size={30} />}
//             text="Newspaper"
//             className="cursor-pointer"
//             style={{
//               backgroundImage:
//                 "url(https://mdbcdn.b-cdn.net/img/new/slides/146.webp)",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//             }}
//           />
//           <ExploreCard icon={<IoMdRadio size={30} />} text="Radio" />
//           <ExploreCard icon={<GiTv size={30} />} text="TV" />
//           <ExploreCard icon={<HiDesktopComputer size={30} />} text="Digital" />
//           <ExploreCard icon={<GiStreetLight size={30} />} text="Outdoor" />
//           {/* <ExploreCard
//             icon={<BsFillCarFrontFill size={30}  />}
//             text="Non Traditional"
//           /> */}
//           <ExploreCard
//             icon={<BsFillCarFrontFill size={30} />}
//             text="Mobile and bus"
//           />
//           <ExploreCard icon={<MdMovie size={30} />} text="Cinema" />
//           <ExploreCard
//             icon={<GiCommercialAirplane size={30} />}
//             text="Airplane Adverts"
//           />
//           {/* <ExploreCard icon={<MdPersonSearch size={30}  />} text="Tv" /> */}
//         </div>
//       </Fade>
//     </Container>
//   );
// };

// export default ExploreSection;

"use client";

import React from "react";
import { Container } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import newsPaper from "../assets/images/newspaper.jpg";
import tv from "../assets/images/new-tv.jpg";
import radioo from "../assets/images/radioo.jpg";
import digital from "../assets/images/african_presenter.jpg";
import outdoor from "../assets/images/outdoor-advert.jpg";
import cinema from "../assets/images/cinema.jpg";
import bus from "../assets/images/bus.jpg";
import airplane from "../assets/images/airplanee.jpg";

const ExploreSection = () => {
  return (
    <Container maxW={"7xl"}>
      <Fade left delay={300} duration={1700}>
          <section className="mb-32 ">
        {/* <div className="container my-24 mx-auto md:px-6"> */}
        <div className="container my-24 mx-auto">
            <h3 className="text-center text-3xl font-semibold mb-10">
              <span className="text-primary">Explore Ad Boards by genre</span>
            </h3>

            <div className="grid gap-6 lg:grid-cols-4">
              {/* NEWSPAPER */}

              <div
                className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/25"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <Image
                  src={newsPaper}
                  className="w-full align-middle transition duration-300 ease-linear"
                />
                <a href="#">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                    <div className="flex h-full items-end justify-start">
                      <div className="m-6 text-white">
                        <h5 className="mb-3 text-lg font-bold">Newspaper</h5>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                </a>
              </div>

              {/* RADIO */}

              <div
                className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <Image
                  src={radioo}
                  className="w-full align-middle transition duration-300 ease-linear"
                />
                <a href="https://www.youtube.com/watch?v=8E4sDFNqkUk">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                    <div className="flex h-full items-end justify-start">
                      <div className="m-6 text-white">
                        <h2 className="mb-3 text-lg font-bold">Radio</h2>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                </a>
              </div>

              {/* TV */}

              <div
                className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <Image
                  src={tv}
                  className="w-full align-middle transition duration-300 ease-linear"
                />
                <a href="https://www.youtube.com/watch?v=VyAhBO0KdCY">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                    <div className="flex h-full items-end justify-start">
                      <div className="m-6 text-white">
                        <h2 className="mb-3 text-lg font-bold">Television</h2>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                </a>
              </div>

              {/* DIGITAL */}
              <div
                className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <Image
                  src={digital}
                  className="w-full align-middle transition duration-300 ease-linear"
                />
                <a href="https://www.youtube.com/watch?v=VyAhBO0KdCY">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                    <div className="flex h-full items-end justify-start">
                      <div className="m-6 text-white">
                        <h2 className="mb-3 text-lg font-bold">Digital</h2>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                </a>
              </div>

              {/* OUTDOOR */}
              <div
                className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <Image
                  src={outdoor}
                  className="w-full align-middle transition duration-300 ease-linear"
                />
                <a href="https://www.youtube.com/watch?v=VyAhBO0KdCY">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                    <div className="flex h-full items-end justify-start">
                      <div className="m-6 text-white">
                        <h2 className="mb-3 text-lg font-bold">Outdoor</h2>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                </a>
              </div>

              {/* MOBILE AND BUS */}
              <div
                className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <Image
                  src={bus}
                  className="w-full align-middle transition duration-300 ease-linear"
                />
                <a href="https://www.youtube.com/watch?v=VyAhBO0KdCY">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                    <div className="flex h-full items-end justify-start">
                      <div className="m-6 text-white">
                        <h2 className="mb-3 text-lg font-bold">
                          Mobile And Bus
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                </a>
              </div>

              {/* CINEMA */}
              <div
                className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <Image
                  src={bus}
                  className="w-full align-middle transition duration-300 ease-linear"
                />
                <a href="https://www.youtube.com/watch?v=VyAhBO0KdCY">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                    <div className="flex h-full items-end justify-start">
                      <div className="m-6 text-white">
                        <h2 className="mb-3 text-lg font-bold">Cinema</h2>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                </a>
              </div>

              {/* AIRPLANE */}
              <div
                className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <Image
                  src={airplane}
                  className="w-full align-middle transition duration-300 ease-linear"
                />
                <a href="https://www.youtube.com/watch?v=VyAhBO0KdCY">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                    <div className="flex h-full items-end justify-start">
                      <div className="m-6 text-white">
                        <h2 className="mb-3 text-lg font-bold">Airplane</h2>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                </a>
              </div>
            </div>
        </div>
          </section>
      </Fade>
    </Container>
  );
};

export default ExploreSection;
