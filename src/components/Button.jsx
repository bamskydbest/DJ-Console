import React, { useState } from "react";

const Button = (prop) => {
  const [bright, setBright] = useState(false);
  const playSound = (sound) => {
    // setActiveButton(index);
    const audio = new Audio(sound.file);
    audio.play();
    // audio.pause();
    //     audio.currentTime = 0;
    // setTimeout(() => setActiveButton(null), 100);
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
      // {`${activeButton}`}
      //activeButton ? sound.color : sound.opacity,
    ></button>
  );
};

export default Button;
