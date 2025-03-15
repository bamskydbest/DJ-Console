import { useState } from "react";
import Button from "./Button";

const sounds = [
  {
    color: "red",
    file: "../public/Audio-Sounds/dj-11-oliskit-sound-projcet-patrizio-yoga-279400.mp3",
    opacity: "0.1",
  },
  {
    color: "green",
    file: "../public/Audio-Sounds/dj-334-olistik-sound-project-279402 2.mp3",
    opacity: "0.1",
  },
  {
    color: "blue",
    file: "../public/Audio-Sounds/dj-beats-38545.mp3",
    opacity: "0.1",
  },
  {
    color: "purple",
    file: "../public/Audio-Sounds/dholki-dj-packs-download-barack-sample-2024-188173.mp3",
    opacity: "0.1",
  },

  {
    color: "yellow",
    file: "../public/Audio-Sounds/link-in-bio-dj-scratch-tool-275556.mp3",
    opacity: "0.1",
  },
  {
    color: "orange",
    file: "../public/Audio-Sounds/dj-leanders-33050.mp3",
    opacity: "0.1",
  },
  {
    color: " teal",
    file: "../public/Audio-Sounds/dj-cousin-shawn-29146.mp3",
    opacity: "0.1",
  },

  {
    color: "tan",
    file: "../public/Audio-Sounds/dj-borintino-special-female-dj-drop-intro-2018-english-69727.mp3",
    opacity: "0.1",
  },
];
const DjConsole = () => {
  const [activeButton, setActiveButton] = useState(null);

  const nameFunction = () => {};

  return (
    <div>
      <div className="header">
        {" "}
        <h1>DJ CONSOLE</h1>{" "}
      </div>
      <div className="play" onClick={() => setBright(!bright)}>
        {sounds.map((sound) => (
          <Button key={sound.file} sound={sound} />
        ))}
      </div>
    </div>
  );
};

export default DjConsole;
