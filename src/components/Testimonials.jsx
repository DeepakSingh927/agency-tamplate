 import React, { useState, useRef, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const ControllerSwiper = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const mainVideoRef = useRef(null);
  const sliderRef = useRef(null);
  const [visibleStart, setVisibleStart] = useState(0);
  const videosPerView = 5;
  
  // Touch handling for slider
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Sample video data - replace with your actual video data
  const videos = [
    {
      id: 1,
      title: "DOMENIC VARESE",
      subtitle: "Marketing Manager",
      thumbnail:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      quote:
        "Partnering with PN Agency was a game-changer for our brand. Their team delivered beyond expectations — from stunning design to real business results. We've seen consistent growth in leads and conversions since day one!",
      brand: "PixelNest",
    },
    {
      id: 2,
      title: "EMMA & JIM ELLIOTT",
      subtitle: "Business Owners",
      thumbnail:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      quote:
        "The transformation of our business was incredible. Professional service, creative solutions, and results that speak for themselves.",
      brand: "Elliott Ventures",
    },
    {
      id: 3,
      title: "MICHAEL ARDENT",
      subtitle: "CEO",
      thumbnail:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      quote:
        "Outstanding creativity and execution. The team understood our vision and brought it to life beyond our expectations.",
      brand: "Ardent Corp",
    },
    {
      id: 4,
      title: "WADE TINK",
      subtitle: "Director",
      thumbnail:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      quote:
        "Professional, reliable, and results-driven. They helped us achieve our business goals faster than we imagined.",
      brand: "Tink Solutions",
    },
    {
      id: 5,
      title: "NEW SENSATION HOMES",
      subtitle: "Real Estate",
      thumbnail:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      quote:
        "The impact on our sales has been phenomenal. Their strategic approach and creative execution delivered exceptional results.",
      brand: "New Sensation Homes",
    },
    {
      id: 6,
      title: "SARAH JOHNSON",
      subtitle: "Product Manager",
      thumbnail:
        "https://images.unsplash.com/photo-1494790108755-2616c5f7d4b0?w=400&h=300&fit=crop",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      quote:
        "Innovative solutions that transformed our market presence. The team's expertise and dedication are unmatched.",
      brand: "Johnson Products",
    },
  ];

  const currentVideoData = videos[currentVideo];

  // Handle selecting a video from the slider
  const handleVideoSelect = (index) => {
    setCurrentVideo(index);
    setIsPlaying(false);
    if (mainVideoRef.current) {
      mainVideoRef.current.pause();
      mainVideoRef.current.currentTime = 0;
    }
  };

  // Play/Pause main video
  const handlePlayPause = () => {
    if (mainVideoRef.current) {
      if (isPlaying) {
        mainVideoRef.current.pause();
      } else {
        mainVideoRef.current.play();
      }
    }
  };

  // Handle video click for play/pause
  const handleVideoClick = (e) => {
    // Prevent event bubbling to avoid conflicts
    e.stopPropagation();
    handlePlayPause();
  };

  // Touch handlers for slider
  const handleTouchStart = (e) => {
    setTouchEnd(0); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentVideo < videos.length - 1) {
      handleVideoSelect(currentVideo + 1);
    }
    if (isRightSwipe && currentVideo > 0) {
      handleVideoSelect(currentVideo - 1);
    }
  };

  // Listen for play/pause events to update isPlaying state
  useEffect(() => {
    const video = mainVideoRef.current;
    if (!video) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  // Ensure current video is visible in slider
  useEffect(() => {
    if (
      currentVideo < visibleStart ||
      currentVideo >= visibleStart + videosPerView
    ) {
      let newStart = Math.max(0, currentVideo - Math.floor(videosPerView / 2));
      if (newStart + videosPerView > videos.length) {
        newStart = Math.max(0, videos.length - videosPerView);
      }
      setVisibleStart(newStart);
    }
  }, [currentVideo, visibleStart, videosPerView, videos.length]);

  // Get visible videos for slider
  const visibleVideos = videos.slice(
    visibleStart,
    Math.min(visibleStart + videosPerView, videos.length)
  );

  return (
    <div className="w-full overflow-hidden">
      {/* Full Screen Video Container - Mobile responsive height */}
      <div className="relative w-full bg-black h-screen sm:h-screen md:h-[120vh] md:min-h-[700px]">
      {/* Main Video Background - Full Screen with click handler */}
      <div className="absolute inset-0" onClick={handleVideoClick}>
        <video
        ref={mainVideoRef}
        className="w-full h-full object-cover cursor-pointer"
        poster={currentVideoData.thumbnail}
        muted
        loop
        onClick={handleVideoClick}
        >
        <source src={currentVideoData.videoUrl} type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
      </div>

      {/* Content Container - Better structured layout */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Main Content - Better spacing with mobile responsive padding */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32 md:pb-36 pointer-events-none">
        <div className="text-center text-white max-w-4xl mx-auto">
          {/* Brand Logo */}
          <div className="mb-4 sm:mb-6 lg:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 tracking-wide leading-tight">
            {currentVideoData.brand}
          </h1>
          </div>

          {/* Quote - Better mobile sizing */}
          <div className="mb-4 sm:mb-6 lg:mb-8">
          <blockquote className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed font-light max-w-3xl mx-auto px-4">
            "{currentVideoData.quote}"
          </blockquote>
          </div>

          {/* Author Information */}
          <div className="mb-6 sm:mb-8 lg:mb-10">
          <p className="text-yellow-400 font-semibold text-xs sm:text-sm md:text-base lg:text-lg mb-1 sm:mb-2">
            {currentVideoData.title}
          </p>
          <p className="text-gray-300 text-xs sm:text-sm lg:text-base">
            {currentVideoData.subtitle}
          </p>
          </div>

          {/* Play Button - Mobile responsive and clickable */}
          {!isPlaying && (
          <div className="flex justify-center pointer-events-auto">
            <button
            onClick={handlePlayPause}
            className="bg-yellow-400 hover:bg-yellow-500 text-black w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-2xl"
            aria-label="Play video"
            >
            <Play className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 ml-0.5 sm:ml-1" />
            </button>
          </div>
          )}
        </div>
        </div>

        {/* Bottom Video Slider - With touch/swipe support */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
        <div className="max-w-6xl mx-auto">
          {/* Video Thumbnails with Play Icons and Touch Support */}
          <div className="flex justify-center">
          <div 
            ref={sliderRef}
            className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 overflow-x-auto px-2"
            style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitScrollbarWidth: 'none'
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
            `}</style>
            {visibleVideos.map((video, idx) => {
            const actualIndex = visibleStart + idx;
            const isActive = actualIndex === currentVideo;
            return (
              <div
              key={video.id}
              className="flex-shrink-0 cursor-pointer group"
              onClick={() => handleVideoSelect(actualIndex)}
              >
              <div
                className={`relative w-20 h-12 sm:w-24 sm:h-16 md:w-28 md:h-18 lg:w-36 lg:h-24 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
                isActive
                  ? "border-yellow-400 scale-105 shadow-lg shadow-yellow-400/30"
                  : "border-transparent hover:scale-102 hover:border-white/40"
                }`}
              >
                <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
                />
                
                {/* Video Play Icon - Top Left Corner */}
                <div className="absolute top-1 left-1 sm:top-2 sm:left-2">
                <div className="bg-black/60 rounded-full p-0.5 sm:p-1 md:p-1.5">
                  <Play className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white fill-white" />
                </div>
                </div>
                
                {/* Active indicator */}
                {isActive && (
                <div className="absolute inset-0 bg-yellow-400/15"></div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Video Title - Mobile responsive */}
              <div className="mt-1 sm:mt-2 text-center max-w-20 sm:max-w-24 md:max-w-28 lg:max-w-36">
                <p
                className={`text-xs font-semibold transition-colors duration-300 truncate leading-tight ${
                  isActive
                  ? "text-yellow-400"
                  : "text-white group-hover:text-yellow-300"
                }`}
                >
                {video.title}
                </p>
              </div>
              </div>
            );
            })}
          </div>
          </div>
        </div>
        </div>
      </div>

      {/* Floating Pause Button for when video is playing */}
      {isPlaying && (
        <button
        onClick={handlePlayPause}
        className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-black/60 hover:bg-black/80 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 z-20"
        aria-label="Pause video"
        >
        {/* Use a perfectly centered SVG for pause icon */}
        <span className="block w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
          <svg
          viewBox="0 0 32 32"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
          <circle cx="16" cy="16" r="16" fill="black" fillOpacity="0.6" />
          <rect x="10" y="8" width="4" height="16" rx="1.5" fill="white" />
          <rect x="18" y="8" width="4" height="16" rx="1.5" fill="white" />
          </svg>
        </span>
        </button>
      )}
      </div>
    </div>
    );
};

export default ControllerSwiper;