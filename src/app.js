/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  let generateExcuse = function() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    const getRandomIndex = array => {
      return Math.floor(Math.random() * array.length);
    };

    return (
      who[getRandomIndex(who)] +
      " " +
      action[getRandomIndex(action)] +
      " " +
      what[getRandomIndex(what)] +
      " " +
      when[getRandomIndex(when)]
    );
  };
};
