import React from 'react'
const BentoCard = ({ src, title, description, isComingSoon }) => {
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
                    <p className='circular text-lg text-blue-50 '>Into the Metagame Layer</p>
                </div>
                <p className='max-w-md circular text-lg text-blue-50 opacity-50'>Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world.</p>


                <div className='border border-white/20 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
                    <BentoCard
                        src="/videos/feature-1.mp4"
                        title={
                            <>radia<b>n</b>t</>
                        }
                        description="A cross-platform metagame app, turning your activites across Web2 and Web3 games into a rewardind adventure."
                        isComingSoon
                    />
                </div>
            </div>
        </section>
    );
}

export default Features
