import KeyMapping from "./components/KeyMapping.js";
import Keys from "./components/Keys.js";
import {useEffect, useState} from "react";
import Drum from "./drumSounds/Drum.mp3";
import Hat from "./drumSounds/Hat.mp3";
import Snare from "./drumSounds/Snare.mp3";
import Floor from "./drumSounds/Floor.mp3";
import Ride from "./drumSounds/Ride.mp3";
import Bass from "./drumSounds/Bass.mp3";

export default function App() {

  

  const drumSounds=[
    {
      sound: Drum,
      label:"drum"
    },
    {
      sound: Hat,
      label:"Hat"
    },
    {
      sound: Snare,
      label:"Snare"
    },
    {
      sound: Floor,
      label:"Floor"
    },
    {
      sound: Ride,
      label:"Ride"
    },
    {
      sound: Bass,
      label:"Bass"
    }
  ]


  return (
    <div className="App">
      <Keys drumSounds={drumSounds} />
      <KeyMapping drumSounds={drumSounds} />
    </div>
  );
}
