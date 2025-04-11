import React, { useEffect, useState } from "react";

const New = () => {
  const [bright, setBright] = useState(false);
  const [audio] = useState(
    new Audio(
      "../public/Audio-Sounds/dj-borintino-special-female-dj-drop-intro-2018-english-69727.mp3"
    )
  );

  useEffect(() => {
    if (bright) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [bright, audio]);
  return (
    <div className="play">
      <div
        className="new"
        style={{ filter: bright ? "brightness(100%)" : "brightness(60%)" }}
        onClick={() => setBright(!bright)}
      ></div>
      <div
        className="new-two"
        style={{ filter: bright ? "brightness(100%)" : "brightness(60%)" }}
        onClick={() => setBright(!bright)}
      ></div>
      <div
        className="new-three"
        style={{ filter: bright ? "brightness(100%)" : "brightness(60%)" }}
        onClick={() => setBright(!bright)}
      ></div>
      <div
        className="new-seven"
        style={{ filter: bright ? "brightness(100%)" : "brightness(60%)" }}
        onClick={() => setBright(!bright)}
      ></div>
      <div
        className="new-eight"
        style={{ filter: bright ? "brightness(100%)" : "brightness(60%)" }}
        onClick={() => setBright(!bright)}
      ></div>
      <div
        className="new-four"
        style={{ filter: bright ? "brightness(100%)" : "brightness(60%)" }}
        onClick={() => setBright(!bright)}
      ></div>
      <div
        className="new-five"
        style={{ filter: bright ? "brightness(100%)" : "brightness(60%)" }}
        onClick={() => setBright(!bright)}
      ></div>
      <div
        className="new-six"
        style={{ filter: bright ? "brightness(100%)" : "brightness(60%)" }}
        onClick={() => setBright(!bright)}
      ></div>
    </div>
  );
};

export default New;
