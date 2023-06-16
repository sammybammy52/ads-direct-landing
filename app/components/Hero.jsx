"use client";
import { Container } from "@chakra-ui/react";
import Image from "next/image";
import HeroImg from "../assets/hero.png";
import Fade from "react-reveal/Fade";
const Hero = () => {
  return (
    // <section className="mb-20 hero-bg lg:h-[75vh]">
    //   <div className="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
    //     <div className="container mx-auto xl:px-32 ">
    //       <div className="grid lg:grid-cols-2 gap-12 flex items-center lg:pt-20">
    //         <Fade left delay={300} duration={1500}>
    //           <div className="mt-12 lg:mt-0 max-md:mt-20">
    //             <h1 className="text-4xl md:text-3xl xl:text-5xl font-bold tracking-tight mb-6 text-white">
    //               Find and buy the best advertising options <br />
    //               <span className=" text-[#EF4136]">on the go</span>
    //             </h1>
    //             <p className=" text-white mb-6 lg:text-lg my-3">
    //               Launch Ad Campaigns with ease that connect with your target
    //               audience on multiple media channels.
    //             </p>
    //             <a
    //               className="inline-block px-7 py-3 mt-4 mr-2 bg-[#EF4136] text-white font-semibold text-sm leading-snug uppercase rounded-lg shadow-md hover:scale-110  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition-all duration-150 ease-in-out"
    //               data-mdb-ripple="true"
    //               data-mdb-ripple-color="light"
    //               href="https://test.digitaladplanet.com/dashboard/login"
    //               role="button"
    //             >
    //               Get started
    //             </a>
    //           </div>
    //         </Fade>
    //         {/* <Fade bottom delay={600} duration={1500}>
    //           <div className="mb-12 lg:mb-0">
    //             <Image src={HeroImg} className="w-full rounded-lg drop-shadow-lg moving-div max-md:hidden" />
    //           </div>
    //         </Fade> */}
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <div class="relative hero-img overflow-hidden bg-cover bg-no-repeat" >
<div
  class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
  <div class="flex h-full items-center justify-center">
    <div class="px-6 text-center text-white md:px-12">
      <h1 class="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
        The best offer on the market <br /><span>for your business</span>
      </h1>
      <button type="button"
        class="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
        data-te-ripple-init data-te-ripple-color="light">
        Get started
      </button>
    </div>
  </div>
</div>
</div>


  );
};

export default Hero;
