import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Result(props) {
  if (props.results) {
    console.log(props.results);
    return (
      <div className="Results">
        <section>
          {/* <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} results={props.results} />
              </div>
            );
          })} */}
          {/* Last change */}
          <h2>{props.results.word}</h2>
          <div>
            <Phonetic
              phonetic={props.results.phonetics[1]}
              results={props.results}
            />
          </div>
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
