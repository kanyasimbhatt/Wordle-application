import './WordleQuestionaire.css';

export default function WordleQuestionaire() {
    function handleTextEnter(e: React.KeyboardEvent<HTMLInputElement>){
        let key = Number(e.key);
        if('value' in e.target!){
            if(!(isNaN(key) || e.key === null || e.key === ' ')){
                e.preventDefault();
                
                return;
            }
            e.target!.value = (e.key as string).toUpperCase();
        }
        

        (e.target! as HTMLInputElement).disabled = true;

    }
  return (

    <>
    <div className="wordle-grid" onKeyDown={handleTextEnter}>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
    </div>
    </>
  )
}
