import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
    return (
      <span className="Phonetic">
        {props.phonetic.text}
        <div>
          <ReactAudioPlayer src={props.phonetic.audio} onPlay controls />
        </div>
      </span>
    );
}