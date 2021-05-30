import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  function handleClickAudio(event) {
    event.preventDefault();
    let audio = document.getElementById("audio");
    try {
      audio.play();
    } catch (err) {
      event.target.classList.add("noAudio");
      console.log("Error: Audio can not be played or doesnt exist");
    }
  }

  return (
    <div className="Phonetic">
      <audio preload="auto" id="audio">
        <source src={props.phonetic.audio}></source>
      </audio>
      <a href="/" rel="norefferer" className="icons" onClick={handleClickAudio}>
        🔉
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
