import React, { useState, useRef, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
const ControllerSwiper = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const mainVideoRef = useRef(null);
  const [visibleStart, setVisibleStart] = useState(0);
  const videosPerView = 5;

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
    <div className="px-4 md:px-0">
        <div
            className="relative w-full max-w-6xl mx-auto bg-black overflow-hidden rounded-lg"
            style={{
                aspectRatio: "16/8",
                minHeight: "380px",
                height: "auto",
            }}
        >
            {/* Main Video Background */}
            <div className="absolute inset-0">
                <video
                    ref={mainVideoRef}
                    className="w-full h-full object-cover"
                    poster={currentVideoData.thumbnail}
                    muted
                    loop
                >
                    <source src={currentVideoData.videoUrl} type="video/mp4" />
                </video>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Play Button - Centered */}
            {!isPlaying && (
                <div
                    className="absolute inset-0 flex items-center justify-center z-20"
                    style={{ pointerEvents: "none" }}
                >
                    <button
                        onClick={handlePlayPause}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-2xl"
                        aria-label="Play video"
                        style={{ pointerEvents: "auto" }}
                    >
                        <Play className="w-8 h-8 ml-1" />
                    </button>
                </div>
            )}

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-between px-0 md:px-8">
                {/* Main Content */}
                <div className="flex-1 flex items-center justify-center pt-6 md:pt-8">
                    <div className="text-center text-white max-w-2xl md:max-w-4xl">
                        {/* Brand Logo */}
                        <div className="mb-4 md:mb-6">
                            <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                                {currentVideoData.brand}
                            </h1>
                        </div>
                        {/* Quote */}
                        <blockquote className="text-sm md:text-lg mb-3 md:mb-4 leading-relaxed font-light">
                            "{currentVideoData.quote}"
                        </blockquote>
                        {/* Author */}
                        <div className="mb-2 md:mb-4">
                            <p className="text-yellow-400 font-semibold text-sm md:text-base">
                                {currentVideoData.title}
                            </p>
                            <p className="text-gray-300 text-xs md:text-sm">
                                {currentVideoData.subtitle}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Video Slider */}
                <div className="p-2 md:p-4 pb-4 md:pb-6">
                    <div className="relative max-w-full mx-auto">
                        {/* Video Thumbnails */}
                        <div className="flex justify-center">
                            <div className="flex gap-2 md:gap-3 overflow-x-auto max-w-full">
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
                                                className={`relative w-20 h-14 md:w-28 md:h-20 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
                                                    isActive
                                                        ? "border-yellow-400 scale-105"
                                                        : "border-transparent hover:scale-102 hover:border-white/30"
                                                }`}
                                            >
                                                <img
                                                    src={video.thumbnail}
                                                    alt={video.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                {/* Active indicator */}
                                                {isActive && (
                                                    <div className="absolute inset-0 bg-yellow-400/10"></div>
                                                )}
                                                {/* Hover overlay */}
                                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                            {/* Video Title */}
                                            <div className="mt-1 md:mt-2 text-center max-w-20 md:max-w-28">
                                                <p
                                                    className={`text-xs font-semibold transition-colors duration-300 truncate ${
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

                        {/* Progress Indicator */}
                        <div className="flex justify-center mt-2 md:mt-3">
                            <div className="flex space-x-1">
                                {videos.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === currentVideo
                                                ? "bg-yellow-400 scale-125"
                                                : "bg-white/30 hover:bg-white/50"
                                        }`}
                                        onClick={() => handleVideoSelect(index)}
                                        style={{ cursor: "pointer" }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default ControllerSwiper;
 
// This code defines a React component that displays a video player with a slider for selecting different videos. The main video plays in the background, and users can select from a list of videos below it. The component includes play/pause