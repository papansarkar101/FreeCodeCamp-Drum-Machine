import react, {useRef} from 'react';
import './App.css';


const sounds = [
  {
    key: "Q",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    key: "W",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    key: "E",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
  },
  {
    key: "A",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    key: "S",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    key: "D",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    key: "Z",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    key: "X",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    key: "C",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  },
  
]

const App = (props) => (
  <div id="drum-machine" className="container">
    <div id="display" class="display">
      <h1> Play Something </h1>
      {sounds.map((sound, idx) => (
        <DrumPad text={sound.key} key={idx} audio={sound.mp3} />
      ))}
    </div>
  </div>
);


const DrumPad = (props) => {
const audioRef = useRef(null);

const playSound = (e) => {
console.log();
audioRef.current.play();
document.querySelector('h1').innerText = e.target.outerText;
};

return (
<div className="drum-pad" onClick={playSound} id={`drums${props.text}`}>
{props.text}
<audio src={props.audio} ref={audioRef} className="clip" id={props.text}/>
</div>
);
}

document.addEventListener('keydown', (e) => {
const id = e.key.toUpperCase();
const audio = document.getElementById(id);

if (audio) {
audio.play();
}
document.querySelector('h1').innerText = id;
});

export default App;
