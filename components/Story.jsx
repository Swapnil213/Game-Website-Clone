import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";


const Story = () => {
    const frameRef = useRef("null");

    
    const handleMouseLeave = () => {
        const element = frameRef.current;
        gsap.to(element, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: 'power1.inOut',
        })
    }
    
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut',
        })
    }

    return (
        <section id='story' className='min-h-dvh w-screen bg-black text-blue-50'>
            <div className='flex size-full flex-col items-center py-10 pb-24 '>
                <p className='text-sm uppercase md:text-[10px]'>Multiversal ip World</p>
                <div className='relative size-full'>
                    <div className="mt-5  text-center flex flex-col gap-1 text-7xl uppercase leading-[.8] text-white sm:px-32 md:text-[6rem] pointer-events-none mix-blend-difference relative z-10">
                        <div className="flex justify-center items-center max-w-full flex-nowrap gap-2 px-10 md:gap-3">
                            <div className="animated-word1">The St<b>o</b>ry of <br /> a Hidden Real<b>m</b></div>
                        </div>
                    </div>
                </div>
                
                <div className="story-img-container relative md:h-dvh h-[90vh] w-full">
                    <div className="story-img-mask absolute left-0 top-0 size-full overflow-hidden md:left-[20%] md:top-[-10%] md:size-4/5">
                        <div className="story-img-content absolute w-full md:h-dvh h-[50dvh] opacity-100 left-10 top-16 md:left-0 md:top-10 lg:left-[-300px] lg:top-[-100px]">
                            <img
                                ref={frameRef}
                                onMouseEnter={handleMouseLeave}
                                onMouseLeave={handleMouseLeave}
                                onMouseUp={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                                src="/img/entrance.webp"
                                alt="entrance"
                                className="object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story
