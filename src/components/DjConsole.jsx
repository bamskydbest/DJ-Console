import Button from "./Button";

const sounds = [
  {
    color: "red",
    file: "/Audio-Sounds/dj-11-oliskit-sound-projcet-patrizio-yoga-279400.mp3",
  },
  {
    color: "green",
    file: "/Audio-Sounds/dj-334-olistik-sound-project-279402 2.mp3",
  },
  {
    color: "blue",
    file: "/Audio-Sounds/dj-beats-38545.mp3",
  },
  {
    color: "purple",
    file: "/Audio-Sounds/dholki-dj-packs-download-barack-sample-2024-188173.mp3",
  },
  {
    color: "yellow",
    file: "/Audio-Sounds/link-in-bio-dj-scratch-tool-275556.mp3",
  },
  {
    color: "orange",
    file: "/Audio-Sounds/dj-leanders-33050.mp3",
  },
  {
    color: "teal",
    file: "/Audio-Sounds/free-dj-audio-stream-dance-party-enjoyquot-no-copyrigh-240684.mp3",
  },
  {
    color: "tan",
    file: "/Audio-Sounds/upbeat-222611.mp3",
  },
];

const DjConsole = () => {
  return (
    <div>
      <div className="header">
        {" "}
        <h1>DJ CONSOLE</h1>{" "}
      </div>
      <div className="play">
        {sounds.map((sound) => (
          <Button key={sound.file} sound={sound} />
        ))}
      </div>
    </div>
  );
};

export default DjConsole;
