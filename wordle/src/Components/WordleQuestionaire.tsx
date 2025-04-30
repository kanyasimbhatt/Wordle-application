import "./WordleQuestionaire.css";

export default function WordleQuestionaire() {
  let elementCount = 1;
  document.addEventListener("keydown", (e: Event) => {
    const inputElement = document.getElementById(
      `box-${elementCount++}`
    ) as HTMLInputElement;
    if ("key" in e) {
      if (e.key === "Backspace" || e.key === "Delete") {
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

      if ((elementCount - 1) % 5 === 0) {
        checkWordle();
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
