import React, { useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti';

const BentoTilt = ({ children, className = "" }) => {
    const [transfromStyle, setTransfromStyle] = useState("");
    const itemRef = useRef();

    const handleMouseMove = (e) => {
        if (!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

        setTransfromStyle(newTransform);
    }

    const handleMouseLeave = () => {
        setTransfromStyle("");
    }

    return (
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform: transfromStyle}}>
            {children}
        </div>
    );
}

const BentoCard = ({ src, title, description}) => {
    return (
        <div className='relative size-full'>
            <video
                src={src}
                loop
                muted autoPlay
                className='absolute left-0 top-0 size-full object-cover object-center'
            />
            <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 '>
                <h1 id='zentry' className='uppercase md:text-6xl text-4xl font-black'>{title}</h1>
                {description && (
                    <p className='mt-3 max-w-64 text-xs md:text-base'>{description}</p>
                )}
            </div>
        </div>
    );
}

const Features = () => {
    return (
        <section className='bg-black pb-52'>
            <div className='container mx-auto px-3 md:px-10'>
                <div className='px-5 py-32 '>
                    <p id='circular' className='text-lg text-blue-50 '>Into the Metagame Layer</p>
                    <p id='circular' className='max-w-md text-lg text-blue-50 opacity-50'>Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world.</p>
                </div>
                


                <BentoTilt className='border border-white/20 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
                    <BentoCard
                        src="/videos/feature-1.mp4"
                        title={
                            <>radia<b>n</b>t</>
                        }
                        description="A cross-platform metagame app, turning your activites across Web2 and Web3 games into a rewardind adventure."
                    />
                </BentoTilt>

                <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
                    <BentoTilt className='relative border border-white/20 col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 md:col-span-1 md:row-span-2'>
                        <BentoCard
                            src="/videos/feature-2.mp4"
                            title={
                                <>Zig<b>m</b>a</>
                            }
                            description="A cross-platform metagame app, turning your activites across Web2 and Web3 games into a rewardind adventure."
                        />
                    </BentoTilt>
                    <BentoTilt className='relative border border-white/20 col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out ms-32 md:col-span-1 md:ms-0'>
                        <BentoCard
                            src="/videos/feature-3.mp4"
                            title={
                                <>N<b>e</b>xus</>
                            }
                            description="A cross-platform metagame app, turning your activites across Web2 and Web3 games into a rewardind adventure."
                        />
                    </BentoTilt>
                    <BentoTilt className='relative border border-white/20 col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out me-14 md:col-span-1 md:me-0'>
                        <BentoCard
                            src="/videos/feature-4.mp4"
                            title={
                                <>Az<b>u</b>l</>
                            }
                            description="A cross-platform metagame app, turning your activites across Web2 and Web3 games into a rewardind adventure."
                        />
                    </BentoTilt>

                    <BentoTilt className='relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out'>
                        <div className='flex size-full flex-col justify-between bg-violet-300 p-5'>
                            <h1 id='zentry' className='uppercase md:text-6xl text-4xl font-black max-w-64 text-black'>M<b>o</b>re Com<b>i</b>ng Soo<b>n</b>!</h1>
                            <TiLocationArrow className='mt-5 scale-[5] self-end'/>
                        </div>
                    </BentoTilt>

                    <BentoTilt className='relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out'>
                        <video
                            src="/videos/feature-5.mp4"
                            loop
                            muted
                            autoPlay
                            className='size-full object-cover object-center'
                        />
                    </BentoTilt>
                </div>
            </div>
        </section>
    );
}

export default Features
