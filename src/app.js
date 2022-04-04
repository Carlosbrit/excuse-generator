/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
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
  let generateExcuse = () => {
    var whoexcuse = who[Math.floor(Math.random() * who.length)];
    var excuse = action[Math.floor(Math.random() * action.length)];
    var whichexcuse = what[Math.floor(Math.random() * what.length)];
    var when1 = when[Math.floor(Math.random() * when.length)];
    return whoexcuse + " " + excuse + " " + whichexcuse + " " + when1;
  };
  let excusebe = generateExcuse();
  let element = document.getElementById("excuse");
  element.innerHTML = excusebe;
};
