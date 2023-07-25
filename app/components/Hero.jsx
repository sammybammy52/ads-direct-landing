"use client";
import { Container } from "@chakra-ui/react";
import Image from "next/image";
import HeroImg from "../assets/hero.png";
import WomanSpeaker from "../assets/images/pngs/woman_head_speaker.png";
import AfricanMan from "../assets/images/pngs/african-man.png";
import BusinessMan from "../assets/images/pngs/herobg.png";
import Fade from "react-reveal/Fade";
import NavBar from "./NavBar";
import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";



const Hero = () => {

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section className="  lg:h-screen">
      {/* <div class="relative hero-img overflow-hidden bg-cover bg-no-repeat"> */}

      <div class="relative overflow-hidden bg-cover bg-blue-50 bg-no-repeat lg:h-screen">
        <NavBar />
        <div className=" items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-10 sm:py-16 lg:px-6 lg:h-screen">
          {/* <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed"> */}

          <Fade left delay={300} duration={1500}>
            <div className="mt-12 lg:mt-0 max-md:mt-20 md:col-span-5 xl:ms-14 xl:mr-[-56px]">
              <h1 className="text-3xl md:text-3xl xl:text-3xl font-bold tracking-tight mb-6 text-gray">
                Launch AD Campaigns that connect with your target audience on<br />
                <span className=" text-primary">multiple media channels with ease</span>
              </h1>
              <p className=" text-gray mb-6 lg:text-lg my-3">
                Advertising has never been easier!.
              </p>
              <a
                className="inline-block px-7 py-3 mt-4 mr-2 bg-primary text-white font-semibold text-sm leading-snug uppercase rounded-lg shadow-md hover:scale-110  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition-all duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="https://test.digitaladplanet.com/dashboard/login"
                role="button"
              >
                Get started
              </a>
            </div>
          </Fade>
{/* 
          <Fade left duration={1500} delay={100}>
            <Image
              className="h-[450px] object-contain rounded-xl moving-div dark:block"
              src={Desktop}
              alt="dashboard image"
            />
          </Fade> */}
           {/* <Container maxW={"7xl"}> */}

            <div className="embla col-span-5" ref={emblaRef}>
              <div className="embla__container">
                <div className="embla__slidee flex">
                  <Image src={WomanSpeaker} className="w-full object-contain  rounded-xl moving-div dark:block"  />
                </div>
                <div className="embla__slidee flex">
                  <Image src={AfricanMan} className="w-full object-contain  rounded-xl moving-div dark:block" height="120" width="120" />
                </div>
                <div className="embla__slidee flex ">
                    <Image src={BusinessMan} className="w-full object-contain  rounded-xl moving-div dark:block" height="120" width="120" />
                </div>
              </div>
            </div>
          {/* </Container> */}
          {/* <div class="flex h-full items-center justify-center">
            <div class="px-6 text-center text-white md:px-12">
              <Fade left delay={300} duration={1500}>
              <h1 className="text-4xl md:text-3xl xl:text-5xl font-bold tracking-tight mb-6 text-white">
                  Find and buy the best advertising options <br />
                  <span className=" text-secondary">on the go</span>
                </h1> 
                <p className=" text-white mb-6 lg:text-lg my-3">
                  Launch Ad Campaigns with ease that connect with your target
                  audience on multiple media channels.
                </p>
                </Fade>
                <button
                  type="button"
                  class="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  >
                  Get started
                </button>
            </div>
          </div> */}
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Hero;
