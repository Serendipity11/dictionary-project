import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  console.log(props.results);

  function playAudio(event) {
    event.preventDefault();
    let audio = new Audio(props.phonetic.audio);
    audio.play();
  }

  return (
    <div className="Phonetic">
      <audio id="audio">
        <source src={props.results.phonetics[0].audio}></source>
      </audio>
      <i className="fas fa-volume-up icons" onClick={playAudio}></i> <br />
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
