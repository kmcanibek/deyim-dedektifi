import { useRef, useState } from 'react';

const noteFrequencies = {
  c2: 65.41,
  d2: 73.42,
  eb2: 77.78,
  f2: 87.31,
  g2: 98,
  bb2: 116.54,
  c3: 130.81,
  eb3: 155.56,
  f3: 174.61,
  g3: 196,
  bb3: 233.08,
  c4: 261.63,
};

const bassPattern = ['c2', 'c2', 'eb2', 'c2', 'g2', 'f2', 'eb2', 'd2'];
const cluePattern = ['g3', 'bb3', 'c4', 'eb3', 'g3', 'f3', 'bb2', 'c3'];

const createNoiseBuffer = (audioContext) => {
  const bufferSize = audioContext.sampleRate * 0.12;
  const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
  const output = buffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i += 1) {
    output[i] = Math.random() * 2 - 1;
  }

  return buffer;
};

const playTone = (audioContext, destination, frequency, startTime, duration, options) => {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();

  oscillator.type = options.type;
  oscillator.frequency.setValueAtTime(frequency, startTime);
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(options.filterFrequency, startTime);
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(options.volume, startTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(destination);

  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.03);
};

const playBrush = (audioContext, destination, startTime) => {
  const noise = audioContext.createBufferSource();
  const gain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();

  noise.buffer = createNoiseBuffer(audioContext);
  filter.type = 'highpass';
  filter.frequency.setValueAtTime(1800, startTime);
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(0.018, startTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.11);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(destination);

  noise.start(startTime);
  noise.stop(startTime + 0.12);
};

function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const musicRef = useRef(null);

  const stopMusic = async () => {
    const music = musicRef.current;

    if (!music) {
      return;
    }

    window.clearInterval(music.intervalId);
    music.masterGain.gain.cancelScheduledValues(music.audioContext.currentTime);
    music.masterGain.gain.linearRampToValueAtTime(
      0,
      music.audioContext.currentTime + 0.25,
    );

    window.setTimeout(() => {
      music.audioContext.close();
    }, 280);

    musicRef.current = null;
    setIsPlaying(false);
  };

  const startMusic = async () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;

    if (!AudioContext) {
      return;
    }

    const audioContext = new AudioContext();
    await audioContext.resume();

    const masterGain = audioContext.createGain();
    const delay = audioContext.createDelay();
    const feedback = audioContext.createGain();
    const delayGain = audioContext.createGain();

    masterGain.gain.setValueAtTime(0.075, audioContext.currentTime);
    delay.delayTime.setValueAtTime(0.24, audioContext.currentTime);
    feedback.gain.setValueAtTime(0.18, audioContext.currentTime);
    delayGain.gain.setValueAtTime(0.12, audioContext.currentTime);

    delay.connect(feedback);
    feedback.connect(delay);
    delay.connect(delayGain);
    delayGain.connect(masterGain);
    masterGain.connect(audioContext.destination);

    const tempo = 86;
    const stepDuration = 60 / tempo / 2;
    let nextStep = audioContext.currentTime + 0.04;
    let stepIndex = 0;

    const scheduleMusic = () => {
      while (nextStep < audioContext.currentTime + 1.4) {
        const patternIndex = stepIndex % bassPattern.length;

        if (patternIndex % 2 === 0) {
          playTone(
            audioContext,
            masterGain,
            noteFrequencies[bassPattern[patternIndex]],
            nextStep,
            stepDuration * 1.8,
            {
              type: 'triangle',
              volume: 0.05,
              filterFrequency: 420,
            },
          );
        }

        if ([1, 3, 6].includes(patternIndex)) {
          playTone(
            audioContext,
            delay,
            noteFrequencies[cluePattern[patternIndex]],
            nextStep,
            stepDuration * 0.85,
            {
              type: 'sine',
              volume: 0.035,
              filterFrequency: 1350,
            },
          );
        }

        if (patternIndex % 2 === 1) {
          playBrush(audioContext, masterGain, nextStep);
        }

        nextStep += stepDuration;
        stepIndex += 1;
      }
    };

    scheduleMusic();
    const intervalId = window.setInterval(scheduleMusic, 250);
    musicRef.current = { audioContext, intervalId, masterGain };
    setIsPlaying(true);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
      return;
    }

    startMusic();
  };

  return (
    <button
      className={`music-toggle ${isPlaying ? 'is-playing' : ''}`}
      type="button"
      aria-pressed={isPlaying}
      onClick={toggleMusic}
    >
      <span aria-hidden="true">{isPlaying ? '♪' : '♫'}</span>
      {isPlaying ? 'Müziği Kapat' : 'Müziği Aç'}
    </button>
  );
}

export default BackgroundMusic;
