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
    <div>
      <div
        className="new"
        style={{ filter: bright ? "brightness(100%)" : "brightness(60%)" }}
        onClick={() => setBright(!bright)}
      ></div>
    </div>
  );
};

export default New;
