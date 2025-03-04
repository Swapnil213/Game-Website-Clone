import React, { useRef, useState } from "react";

const hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVideoRef = useRef(null);

    const handleVideoLoad = () => 
        setLoadedVideos((prev) => prev + 1);

    const upcomingvideoIndex = (currentIndex % totalVideos) + 1;

    const handleMiniVdClick = () => {
        setHasClicked(true);
        
        setCurrentIndex(upcomingvideoIndex);
    } 

    const getVideoSrc = (index) => `public/videos/hero-${index}.mp4`;
        // `public/videos/hero-${index}.mp4`;

    return (
      <div className="relative h-dvh w-screen overflow-x-hidden">
        <div
          id="video-frame"
          className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-[#dfdff2]"
        >
          <div>
            <div className="clip-path-[polygon(0 0, 100% 0, 100% 100%, 0 100%)] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
              <div
                onClick={handleMiniVdClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <video
                  ref={nextVideoRef}
                  src={getVideoSrc(upcomingvideoIndex)}
                  loop
                  muted
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
              </div>
            </div>

            <video
              ref={nextVideoRef}
              src={getVideoSrc(currentIndex)}
              loop
              muted
              id="next-video"
                        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-20 size-64 object-cover object-center"
                onLoadedData={handleVideoLoad}
            />
          </div>
        </div>
      </div>
    );
};

export default hero;
