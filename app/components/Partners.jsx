"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { SVGs } from "../assets/svgs/SVGs";
import thePunch from "../assets/punch-logo.png";
import theSun from "../assets/images/pngs/the_sun.png";
import ariseNews from "../assets/images/pngs/arise-news.jpg";
import foxChannel from "../assets/images/pngs/fox-channel-removebg.png";
import vanguard from "../assets/images/pngs/Vanguard-removebg.png";
import channels from "../assets/images/pngs/channels-TV.png";
import guardian from "../assets/images/pngs/the-guardian-removebg.png";
import jumiaLogo from "../assets/images/pngs/Jumia-Logo.png";
import cnn from "../assets/images/pngs/CNN.png";
import { Container } from "@chakra-ui/react";

const Partners = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    
    <div className="py-20">
      <div className="2xl:mx-auto 2xl:container py-12 lg:px-20 md:px-6 px-4 ">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center space-y-4">
            {/* <h1 className="text-3xl lg:text-4xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800">
              
            </h1> */}
            <h3 className="text-center text-3xl font-semibold ">
              <span className="text-primary">Our Trusted Partners And Clients</span>
            </h3>
            <p className="text-base leading-6 text-center text-gray-600 w-full md:w-10/12">
              We just got featured in the following magazines and it has been
              the most incredible journey. We work with the best fashion
              magazines across the world
            </p>
          </div>
            <Container maxW={"7xl"}>

            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                <div className="embla__slide flex items-center space-x-4">
                  <Image src={foxChannel} className="" height="100" width="100" />
                  <Image src={vanguard} className="" height="100" width="100" />
                  <Image src={ariseNews} className="" height="100" width="100" />
                  {/* <Image src={channels} className="" height="100" width="100" /> */}
                  <Image src={jumiaLogo} className="" height="100" width="100" />
                  <Image src={thePunch} className="" height="120" width="120" />
                  <Image src={theSun} className="" height="120" width="120" />
                </div>
                <div className="embla__slide flex items-center space-x-4 embla-margin">
                  <Image src={SVGs.threeM} className="" height="100" width="100" />
                  <Image src={cnn} className="" height="100" width="100" />
                  <Image src={SVGs.budweiser} className="" height="100" width="100" />
                  <Image src={guardian} className="" height="100" width="100" />
                  <Image src={SVGs.forbes} className="" height="100" width="100" />
                  <Image src={vanguard} className="" height="100" width="100" />


                </div>
                <div className="embla__slide flex items-center space-x-4">
                    <Image src={theSun} className="" height="120" width="120" />
                    <Image src={SVGs.mensHealth} className="" height="100" width="100" />
                    <Image src={ariseNews} className="" height="100" width="100" />
                    <Image src={SVGs.threeM} className="" height="100" width="100" />
                    <Image src={SVGs.budweiser} className="" height="100" width="100" />
                    <Image src={thePunch} className="" height="120" width="120" />
                    <Image src={vanguard} className="" height="100" width="100" />



                </div>
              </div>
            </div>
            </Container>
        </div>
      </div>
    </div>
  );
};

export default Partners;

// const Partners = () => {

//   return (
//     <div className="2xl:mx-auto 2xl:container py-12 lg:px-20 md:px-6 px-4 ">
//       <div className="w-full flex flex-col justify-center items-center">
//         <div className="flex flex-col justify-center items-center text-center space-y-4">
//           <h1 className="text-3xl lg:text-4xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800">
//             Our Trusted Partners And Clients
//           </h1>
//           <p className="text-base leading-6 text-center text-gray-600 w-full md:w-10/12">
//             We just got featured in the following magazines and it has been the
//             most incredible journey. We work with the best fashion magazines
//             across the world
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3  justify-items-around gap-x-6 gap-y-6 xl:gap-x-8 mt-10">
//           <div className="slider">
//             <div className="slide-track">
//               <div className="slide">
//                 <Image src={HeroImg} className="" height="100" width="100" />
//               </div>
//               <div className="slide">
//                 <Image src={HeroImg} className=""  height="100" width="100"/>
//               </div>
//               <div className="slide">
//                 <Image src={HeroImg} className=""  height="100" width="100"/>
//               </div>
//               <div className="slide">
//                 <Image src={HeroImg} className="" height="100" width="100" />
//               </div>
//               <div className="slide">
//                 <Image src={HeroImg} className=""  height="100" width="100"/>
//               </div>
//             </div>
//           </div>

//           {/* <div class="logos">
//             <div class="logos-slide">
//               <Image src={HeroImg} className="" height="100" width="100" />
//               <Image src={HeroImg} className="" height="100" width="100" />
//               <Image src={HeroImg} className="" height="100" width="100" />
//               <Image src={HeroImg} className="" height="100" width="100" />
//               <Image src={HeroImg} className="" height="100" width="100" />
//               <Image src={HeroImg} className="" height="100" width="100" />
//               <Image src={HeroImg} className="" height="100" width="100" />
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Partners;
