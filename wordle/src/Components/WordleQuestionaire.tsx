import "./WordleQuestionaire.css";
import { useContext } from "react";
import { Wordcontext } from "../App";

export default function WordleQuestionaire() {
  let elementCount = 1;
  let disableDelete = false;

  const word1: Array<string> = useContext(Wordcontext);
  let word: string;

  if (word1[0] !== undefined) word = word1[0].toLocaleUpperCase();
  else word = "";
  async function isValidWord() {
    try {
      const result = await fetch(
        `https://api.api-ninjas.com/v1/dictionary?word=${word}`,
        {
          headers: {
            "X-Api-Key": "9Oa+rnub8Qq5FaObX0M+UA==c0itFO6WHt8sgdbq",
          },
        }
      );
      if (!result.ok) {
        throw new Error("not a valid word");
      }
      const data = await result.json();
      if (data.valid) {
        checkWordle(elementCount - 5);
      }
      throw new Error("not a valid word");
    } catch (err) {
      alert(err);
    }
  }

  function checkWordle(elementCount: number) {
    let greenCount = 0;
    for (let i = elementCount, j = 0; i < elementCount + 5 && j < 5; i++, j++) {
      const input = document.getElementById(`box-${i}`) as HTMLInputElement;
      if (input.value === word[j]) {
        input.style.backgroundColor = "green";
        greenCount++;
      } else if (word.includes(input.value)) {
        input.style.backgroundColor = "yellow";
      }
    }
    disableDelete = true;
    if (greenCount === 5) {
      alert("you Won");
    }
  }

  document.addEventListener("keydown", (e: Event) => {
    if ("key" in e) {
      if ((!disableDelete && e.key === "Backspace") || e.key === "Delete") {
        if (elementCount === 1) return;
        const inputElement = document.getElementById(
          `box-${elementCount - 1}`
        ) as HTMLInputElement;
        e.preventDefault();

        elementCount--;
        inputElement.value = "";
        inputElement.disabled = false;
      } else if (isCharacter(e.key as string)) {
        if (elementCount === 31) return;
        const inputElement = document.getElementById(
          `box-${elementCount++}`
        ) as HTMLInputElement;

        inputElement.value = `${e.key}`.toUpperCase();
        inputElement.disabled = true;
      }

      if (e.key === "Enter" && (elementCount - 1) % 5 === 0) {
        isValidWord();
      }
    }
  });

  function isCharacter(char: string) {
    if (char.length != 1) return false;
    if (
      (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
      (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
    ) {
      return true;
    }

    return false;
  }

  return (
    <>
      <div className="wordle-grid">
        <input id="box-1"></input>
        <input id="box-2"></input>
        <input id="box-3"></input>
        <input id="box-4"></input>
        <input id="box-5"></input>
        <input id="box-6"></input>
        <input id="box-7"></input>
        <input id="box-8"></input>
        <input id="box-9"></input>
        <input id="box-10"></input>
        <input id="box-11"></input>
        <input id="box-12"></input>
        <input id="box-13"></input>
        <input id="box-14"></input>
        <input id="box-15"></input>
        <input id="box-16"></input>
        <input id="box-17"></input>
        <input id="box-18"></input>
        <input id="box-19"></input>
        <input id="box-20"></input>
        <input id="box-21"></input>
        <input id="box-22"></input>
        <input id="box-23"></input>
        <input id="box-24"></input>
        <input id="box-25"></input>
        <input id="box-26"></input>
        <input id="box-27"></input>
        <input id="box-28"></input>
        <input id="box-29"></input>
        <input id="box-30"></input>
      </div>
    </>
  );
}
