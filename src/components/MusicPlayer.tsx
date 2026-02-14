import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryAutoplay = async () => {
      try {
        audio.volume = 0.4;
        await audio.play();
        setIsPlaying(true);
        setHasInteracted(true);
      } catch {
        // Autoplay blocked, wait for user click
      }
    };

    tryAutoplay();

    // If autoplay blocked, play on first user interaction
    const handleFirstInteraction = () => {
      if (!hasInteracted && audio) {
        audio.volume = 0.4;
        audio.play().then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        }).catch(() => {});
      }
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.4;
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music/稳稳的幸福.mp3" loop preload="auto" />
      <button
        onClick={togglePlay}
        className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-rose-gold/30 flex items-center justify-center text-rose-gold hover:bg-black/60 transition-all"
        aria-label={isPlaying ? "暂停音乐" : "播放音乐"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>
    </>
  );
};

export default MusicPlayer;
