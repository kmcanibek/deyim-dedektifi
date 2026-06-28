import { useRef, useState } from 'react';
import detectiveTheme from '../assets/audio/dedektif-temasi.wav';

function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio || hasError) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      audio.volume = 0.28;
      await audio.play();
      setIsPlaying(true);
    } catch {
      setHasError(true);
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src={detectiveTheme}
        onEnded={() => setIsPlaying(false)}
        onError={() => setHasError(true)}
      />
      <button
        className={`music-toggle ${isPlaying ? 'is-playing' : ''}`}
        type="button"
        aria-pressed={isPlaying}
        disabled={hasError}
        onClick={toggleMusic}
      >
        <span aria-hidden="true">{isPlaying ? '♪' : '♫'}</span>
        {hasError
          ? 'Müzik Yüklenemedi'
          : isPlaying
            ? 'Müziği Kapat'
            : 'Müziği Aç'}
      </button>
    </>
  );
}

export default BackgroundMusic;
