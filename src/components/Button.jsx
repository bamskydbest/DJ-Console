import React, { useState } from "react";

const Button = (prop) => {
  const [bright, setBright] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const playSound = (sound) => {
    // if an audio instance exists and is playing, pause it and reset
    if (currentAudio && !currentAudio.paused) {
      currentAudio.pause();
      currentAudio.currentTime = 0; // reset playback position if needed
      setCurrentAudio(null);
    } else {
      // Otherwise, create a new Audio instance and play the sound
      const audio = new Audio(sound.file);
      audio.play();
      audio.loop = true;
      setCurrentAudio(audio);
    }
  };

  const sound = prop.sound;

  return (
    <button
      onClick={() => {
        playSound(sound);
        setBright(!bright);
      }}
      style={{
        backgroundColor: sound.color,
        filter: bright ? "brightness(100%)" : "brightness(60%)",
      }}
    ></button>
  );
};

export default Button;
