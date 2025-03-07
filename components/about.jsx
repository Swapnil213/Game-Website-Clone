import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const about = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    const titleAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".animated-word",
        start: '100 bottom',
        end: 'center bottom',
        toggleActions: 'play none none reverse'
      }
    });


    titleAnimation.to(".animated-word", {
      opacity: 1,
      transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
      ease: 'power2.inOut',
      stagger: 0.02,
    });
  });


  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 id="general" className="text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </h2>

        {/* <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> l<b>a</b>rgest shared adventure"
          containerClass="mt-5 !text-black text-center"
        /> */}
        
        <div className="mt-5 !text-black text-center flex flex-col gap-1 text-7xl uppercase leading-[.8] text-white sm:px-32 md:text-[6rem]">
          <div className="flex justify-center items-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
            <p className="animated-word">Disc<b>o</b>ver the world's <br /> l<b>a</b>rgest shared adventure</p>
          </div>
        </div>

        <div className="absolute bottom-[-80dvh] left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-circular-web text-lg md:max-w-[34rem]">
          <p> The Game of Games begins-your life, now an epic MMORPG</p>
          <p>Zentry unites every player from countless games and platforms </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path absolute left-1/2 top-0 z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw]">
          <img
            src="/img/about.webp"
            alt="background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default about;
