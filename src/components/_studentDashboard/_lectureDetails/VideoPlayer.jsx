import React, { useRef, useState, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
} from "react-icons/fa";

function VideoPlayer({ src, poster }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);

  // ✅ تحديث الوقت أثناء التشغيل
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const setVideoDuration = () => setDuration(video.duration);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", setVideoDuration);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", setVideoDuration);
    };
  }, []);

  // ✅ تشغيل / إيقاف
  const togglePlay = () => {
    const video = videoRef.current;
    if (playing) {
      video.pause();
    } else {
      video.play();
    }
    setPlaying(!playing);
  };

  // ✅ كتم الصوت
  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !muted;
    setMuted(!muted);
  };

  // ✅ التحكم في مستوى الصوت
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    const video = videoRef.current;
    video.volume = newVolume;
    setVolume(newVolume);
    setMuted(newVolume === 0);
  };

  // ✅ التحرك داخل الفيديو
  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // ✅ تغيير سرعة التشغيل
  const handleSpeedChange = (e) => {
    const newSpeed = parseFloat(e.target.value);
    videoRef.current.playbackRate = newSpeed;
    setPlaybackRate(newSpeed);
  };

  // ✅ ملء الشاشة
  const handleFullScreen = () => {
    const videoContainer = videoRef.current.parentElement;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoContainer.requestFullscreen();
    }
  };

  // ✅ تنسيق الوقت
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "00:00";
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className=" mx-auto mt-10 bg-bg-secondary rounded-2xl shadow-lg overflow-hidden text-white">
      {/* 🎥 الفيديو */}
      <div className="relative">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="w-full h-full bg-black"
        />
        {/* زر التشغيل في المنتصف */}
        {!playing && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
          >
            <FaPlay size={60} className="text-white" />
          </button>
        )}
      </div>

      {/* 🎛️ عناصر التحكم */}
      <div className="p-4 space-y-2">
        {/* شريط التقدم */}
        <input
          type="range"
          min={0}
          max={duration || 0}
          step="any"
          value={currentTime}
          onChange={handleSeek}
          className="w-full accent-blue-500"
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* تشغيل / إيقاف */}
            <button onClick={togglePlay} className="text-text-main">
              {playing ? <FaPause size={20} /> : <FaPlay size={20} />}
            </button>

            {/* كتم الصوت */}
            <button onClick={toggleMute} className="text-text-main">
              {muted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
            </button>

            {/* مستوى الصوت */}
            <input
              type="range"
              min={0}
              max={1}
              step="any"
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 accent-blue-500"
            />

            {/* الوقت */}
            <span className="text-sm text-text-main">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {/* سرعة التشغيل */}
            <select
              value={playbackRate}
              onChange={handleSpeedChange}
              className="bg-gray-800 text-white text-sm rounded px-2 py-1 focus:outline-none"
            >
              {[0.5, 1, 1.25, 1.5, 2].map((speed) => (
                <option key={speed} value={speed}>
                  {speed}x
                </option>
              ))}
            </select>

            {/* ملء الشاشة */}
            <button onClick={handleFullScreen} className="text-text-main">
              <FaExpand size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
