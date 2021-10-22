import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>
            <strong>{props.results.word} </strong>
            {props.results.phonetics.map(function (phonetic, index) {
              return (
                <span key={index}>
                  <Phonetic phonetic={phonetic} />
                </span>
              );
            })}
          </h2>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
