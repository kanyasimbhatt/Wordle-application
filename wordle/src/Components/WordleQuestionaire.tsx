import "./WordleQuestionaire.css";
import { useContext } from "react";
import { Wordcontext } from "../App";
export default function WordleQuestionaire() {
  let word1: Array<string> = useContext(Wordcontext);
  let word: string;
  
  if(word1[0] !== undefined) word = word1[0].toLocaleUpperCase();
  else word = '';
//   let word: string;
//     if(word1[0] !== undefined){
//         word = word1[0].toLocaleUpperCase();
//     }

  
  let elementCount = 1;

  function checkWordle(index: number){
    index -= 4;
    let greenCount = 0;
    for(let i = index, j = 0; i < index+5 && j < 5; i++, j++){
        let input = document.getElementById(`box-${i}`) as HTMLInputElement;
        
        if(word[j] === input.value){
            input.style.backgroundColor = 'green';
            greenCount++;
        }
        else if(word.includes(input.value)){
            input.style.backgroundColor = 'yellow';
        }
    }

    if(greenCount === 5){
        alert('You Won! Play Again');
    }

    
  }
  document.addEventListener("keydown", (e: Event) => {
    const inputElement = document.getElementById(
      `box-${elementCount}`
    ) as HTMLInputElement;
    if ("key" in e) {
      if (e.key === "Backspace" || e.key === "Delete") {
        console.log(elementCount)
        e.preventDefault();
        if (elementCount === 0) return;
        elementCount--;

        inputElement.value = "";
        inputElement.disabled = false;
      } else if (isCharacter(e.key as string)) {
        elementCount++;
        inputElement.value = `${e.key}`.toUpperCase();
        inputElement.disabled = true;
      }

      if ((elementCount - 1) % 5 === 0 && elementCount - 1 !== 0) {
        console.log('sdfd')
        checkWordle(elementCount - 1);
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
