import { useRef, useEffect, useState } from "react";
import { FaVolumeMute, FaVolumeUp, FaWhatsapp } from "react-icons/fa";

const SpotLight = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoSrc, setVideoSrc] = useState("");
  const [showSoundPrompt, setShowSoundPrompt] = useState(true); // Show sound prompt initially

  const handleToggleMute = () => {
    if (videoRef.current) {
      const newMuteState = !videoRef.current.muted;
      videoRef.current.muted = newMuteState;
      setIsMuted(newMuteState);

      // Play the video with sound after unmute
      if (!newMuteState) {
        videoRef.current.play().catch((error) => {
          console.error("Error trying to play the video:", error);
        });
      }
    }
  };

  const handleEnableSound = () => {
    setShowSoundPrompt(false); // Hide the sound prompt
    handleToggleMute(); // Unmute the video
  };

  // Detect screen size and set video source
  useEffect(() => {
    const isMobile = window.innerWidth < 640; // Tailwind 'sm' breakpoint
    if (isMobile) {
      setVideoSrc("https://res.cloudinary.com/dvjqkwbzc/video/upload/v1745825061/spot-mobile_4_cyffoi.mp4");
    } else {
      setVideoSrc("https://res.cloudinary.com/dvjqkwbzc/video/upload/v1745825040/spot_1_onyogk.mp4");
    }
  }, []);

  // Set initial mute and autoplay when video source is ready
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      setIsMuted(true);
      videoRef.current.play().catch(() => {}); // Auto-play muted video
    }
  }, [videoSrc]);

  // Auto hide the sound prompt after 5 seconds
  useEffect(() => {
    if (showSoundPrompt) {
      const timer = setTimeout(() => {
        // setShowSoundPrompt(false);
      }, 3000); // Hide after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [showSoundPrompt]);

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-[100dvh] overflow-hidden z-0"
      id="spotlight"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        {videoSrc && <source src={videoSrc} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-white/10 px-4 sm:px-6 lg:px-12 py-4 sm:py-6 lg:py-8 flex flex-col md:flex-row justify-between items-center backdrop-blur-sm space-y-4 md:space-y-0 z-10">
        {/* Left Text Content */}
        <div className="text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-3">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold">
              "From Chaos to{" "}
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#FEC631] font-bold">
                Control.{" "}
              </span>
              Fieldwork,
            </h1>
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#FEC631] font-bold">
              Perfected."
            </span>
          </div>
          <p className="text-white text-sm sm:text-base md:text-lg font-extralight mt-3 sm:mt-4 lg:mt-1 max-w-[95%] mx-auto md:mx-0 md:max-w-[88%]">
          Fieldiva is an Integrated AI Software Platform that automates and optimizes the end-to-end aspects of your field operations
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <a href="mailto:hello@fieldiva.com">
            <button className="border border-white py-2 px-4 rounded-sm text-white text-sm sm:text-base hover:bg-[#FEC631] hover:text-black transition-colors cursor-pointer">
              Send Request Now
            </button>
          </a>

          {/* Mute/Unmute Button */}
          <button
            onClick={handleToggleMute}
            className="text-white cursor-pointer text-xl sm:text-2xl"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </div>
      </div>

      {/* Sound Notification - Centered */}
      {showSoundPrompt && (
        <div className="absolute inset-0 flex items-center justify-center z-40">
          <div className="bg-transparent text-white p-6 rounded-lg shadow-xl text-center w-auto sm:w-80">
            <p className="text-lg font-semibold">Sound is muted</p>
            <p className="text-sm mt-2">
              Click below to enable sound and enhance your experience.
            </p>
            <button
              onClick={handleEnableSound}
              className="mt-2 bg-[#FCA600] text-black py-2 px-4 rounded-md hover:bg-[#FEC631] transition-colors cursor-pointer"
            >
              Enable Sound
            </button>
          </div>
        </div>
      )}

      {/* WhatsApp Icon - Fixed at bottom right */}

    </div>
  );
};

export default SpotLight;
