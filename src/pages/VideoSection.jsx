import React, { useRef, useState } from "react";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const handleMuteToggle = () => {
    setMuted((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !muted;
    }
  };

  return (
    <div
      className="relative w-full bg-cover bg-center py-10 px-4 flex items-center justify-center"
      style={{ backgroundImage: "url('/src/assets/Container.png')" }} // change path to your actual image
    >
      {/* Video Element Only */}
      <div className="relative w-full max-w-[1100px]">
        <video
          className="w-full h-[500px] object-cover rounded-xl shadow-xl"
          src="/src/assets/mainvideo.mp4"
          autoPlay
          loop
          playsInline
          muted={muted}
          ref={videoRef}
          id="main-video"
        />

        {/* Mute/Unmute Button */}
        <button
          type="button"
          className="absolute bottom-6 right-6 bg-black bg-opacity-60 rounded-full p-2 text-white hover:bg-opacity-80 transition"
          onClick={handleMuteToggle}
          aria-label="Toggle Mute"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <g id="mute-icon">
              <path
                d="M9 9v6h4l5 5V4l-5 5H9z"
                fill="currentColor"
                opacity="0.7"
              />
              {muted && (
                <path
                  d="M19 19L5 5"
                  stroke="red"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </g>
          </svg>
        </button>

        {/* Green Dot & Line Indicator */}
        <div className="absolute bottom-6 left-6 z-10">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-lime-400 rounded-full"></div>
            <div className="w-6 h-[2px] bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
