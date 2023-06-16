"use client";
import { Container } from "@chakra-ui/react";
import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Image from "next/image";
// import { SVGs } from "../assets/svgs/SVGs";
import adsDirect from "../assets/images/african_office.jpg";

const About = () => {
  return (
    // <section class="mb-32 about">
    //   {/* <!-- Jumbotron --> */}
    //   <div class="container mx-auto xl:px-32">
    //     <div class="grid items-center lg:grid-cols-2">
    //       <Fade left duration={1300}>
    //         <div class="mb-12 lg:mb-0">
    //           <div class="heroo-bg rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
    //             <h2 class="mb-6 pb-2 text-4xl font-bold text-white">
    //               Why Choose Ads Direct?
    //             </h2>
    //             <p class="mb-6 pb-2  text-neutral-500 text-white">
    //               Here at Ads Direct we focus on markets where technology,
    //               innovation, and capital can unlock long-term value and drive
    //               economic growth.
    //             </p>

    //             <div class="mb-6 flex flex-wrap">
    //               <div class="mb-4 w-full sm:w-1/2 flex flex-col gap-2">
    //                 <h4 class="flex text-white gap-2 text-xl">
    //                   <svg
    //                     className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 "
    //                     fill="currentColor"
    //                     viewBox="0 0 20 20"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                   >
    //                     <path
    //                       fillRule="evenodd"
    //                       d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
    //                       clipRule="evenodd"
    //                     />
    //                   </svg>
    //                   Marketing
    //                 </h4>
    //                 <p className="text-white mr-4">
    //                   Plan it, create it, launch it. Collaborate seamlessly with
    //                   all the organization and hit your marketing goals every
    //                   month with our marketing plan.
    //                 </p>
    //               </div>

    //               {/* <div class="mb-4 w-full sm:w-1/2"> */}
    //               <div class="mb-4 w-full sm:w-1/2 flex flex-col gap-2">
    //                 <h3 class="flex text-white gap-2 text-xl">
    //                   <svg
    //                     className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 "
    //                     fill="currentColor"
    //                     viewBox="0 0 20 20"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                   >
    //                     <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
    //                   </svg>
    //                   Legal
    //                 </h3>
    //                 <p className="text-white mr-4">
    //                   Protect your organization, devices and stay compliant with
    //                   our structured workflows and custom permissions made for
    //                   you.
    //                 </p>
    //               </div>

    //               <div class="mb-4 w-full sm:w-1/2 flex flex-col gap-2">
    //                 <p class="flex text-white gap-2 text-xl">
    //                   <svg
    //                     className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 "
    //                     fill="currentColor"
    //                     viewBox="0 0 20 20"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                   >
    //                     <path
    //                       fillRule="evenodd"
    //                       d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
    //                       clipRule="evenodd"
    //                     />
    //                   </svg>
    //                   Bussiness Automation
    //                 </p>
    //                 <p className="text-white mr-4">
    //                   Auto-assign tasks, send Slack messages, and much more. Now
    //                   power up with hundreds of new templates to help you get
    //                   started.
    //                 </p>
    //               </div>

    //               <div class="mb-4 w-full sm:w-1/2 flex flex-col gap-2">
    //                 <p class="flex text-white gap-2 text-xl">
    //                   <svg
    //                     className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 "
    //                     fill="currentColor"
    //                     viewBox="0 0 20 20"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                   >
    //                     <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
    //                     <path
    //                       fillRule="evenodd"
    //                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
    //                       clipRule="evenodd"
    //                     />
    //                   </svg>
    //                   Finance
    //                 </p>
    //                 <p className="text-white mr-4">
    //                   Audit-proof software built for critical financial
    //                   operations like month-end close and quarterly budgeting.
    //                 </p>
    //               </div>

    //               <div class="mb-4 w-full sm:w-1/2 flex flex-col gap-2">
    //                 <p class="flex text-white gap-2 text-xl">
    //                   <svg
    //                     className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 "
    //                     fill="currentColor"
    //                     viewBox="0 0 20 20"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                   >
    //                     <path
    //                       fillRule="evenodd"
    //                       d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
    //                       clipRule="evenodd"
    //                     />
    //                   </svg>
    //                   Operations
    //                 </p>
    //                 <p className="text-white mr-15 ">
    //                   Keep your company’s lights on with customizable,
    //                   iterative, and structured workflows built for all
    //                   efficient teams and individual.
    //                 </p>
    //               </div>

    //               <div class="mb-4 w-full sm:w-1/2 flex flex-col gap-2">
    //                 <p class="flex text-white gap-2 text-xl">
    //                   <svg
    //                     className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 "
    //                     fill="currentColor"
    //                     viewBox="0 0 20 20"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                   >
    //                     <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
    //                   </svg>
    //                   Enterprise Design
    //                 </p>
    //                 <p className="text-white mr-2 ">
    //                   Craft beautiful, delightful experiences for both marketing
    //                   and product with real cross-company collaboration.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </Fade>
    //       <div>
    //         {/* <img
    //           // src="https://unsplash.com/photos/Hjb1R72x6Hg"
    //           src="./assets/adsdirect.jpg"
    //           class="w-full rounded-lg shadow-lg dark:shadow-black/20"
    //           alt=""
    //         /> */}

    //         <Image
    //           src={adsDirect}
    //           className="w-full rounded-lg shadow-lg dark:shadow-black/20 moving-div"
    //           height="100"
    //           width="100"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   {/* <!-- Jumbotron --> */}
    // </section>
    <Container maxW={"7xl"}>

    <div className="container my-24 mx-auto md:px-6">
  {/* <!-- Section: Design Block --> */}
  <section className="mb-32">
    <h2 className="mb-12 text-center text-3xl font-bold">
      Why is it so great?
    </h2>

    <div className="flex flex-wrap items-center">
      <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
        <div className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init data-te-ripple-color="light">
          <img src="https://mdbcdn.b-cdn.net/img/new/textures/full/98.jpg" className="w-full" />
          <a href="#!">
            <div
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,0%,0.4)] bg-fixed">
              <div className="flex h-full items-center justify-center">
                <div className="px-6 py-12 text-center text-white md:px-12">
                  <h3 className="mb-6 text-2xl font-bold uppercase">
                    The future is
                    <u className="text-[hsl(210,12%,80%)]">now</u>
                  </h3>
                  <p className="text-[hsl(210,12%,80%)]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum quia laboriosam error consequuntur fugit,
                    doloribus rerum, iure nesciunt amet quidem veniam
                    cupiditate hic fugiat dolore aperiam quisquam libero
                    earum quibusdam?
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12">
        <div className="mb-12 flex">
          <div className="shrink-0">
            <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
            </div>
          </div>
          <div className="ml-4 grow">
            <p className="mb-1 font-bold">Support 24/7</p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Nihil quisquam quibusdam modi sapiente magni molestias
              pariatur facilis reprehenderit facere aliquam ex.
            </p>
          </div>
        </div>

        <div className="mb-12 flex">
          <div className="shrink-0">
            <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
          </div>
          <div className="ml-4 grow">
            <p className="mb-1 font-bold">Safe and solid</p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Eum nostrum fugit numquam, voluptates veniam neque quibusdam
              ullam aspernatur odio soluta, quisquam dolore animi mollitia a
              omnis praesentium, expedita nobis!
            </p>
          </div>
        </div>

        <div className="mb-12 flex">
          <div className="shrink-0">
            <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </div>
          </div>
          <div className="ml-4 grow">
            <p className="mb-1 font-bold">Extremely fast</p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Enim cupiditate, minus nulla dolor cumque iure eveniet facere
              ullam beatae hic voluptatibus dolores exercitationem? Facilis
              debitis aspernatur amet nisi iure eveniet facere?
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="shrink-0">
            <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" className="h-6 w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
          </div>
          <div className="ml-4 grow">
            <p className="mb-1 font-bold">Live analytics</p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Illum doloremque ea, blanditiis sed dolor laborum praesentium
              maxime sint, consectetur atque ipsum ab adipisci ullam
              aspernatur odio soluta, quisquam dolore
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Section: Design Block --> */}
</div>
</Container>



  );
};

export default About;
