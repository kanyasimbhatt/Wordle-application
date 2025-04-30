import Navbar from "./Components/Navbar";
import "./App.css";
import { createContext, useEffect, useState } from "react";
import MainBody from "./Components/MainBody";

export const Wordcontext = createContext([]);
 function App() {
  const [word, setWord] = useState([]);
  async function fetchWord(){
    try{
    let result = await fetch('https://random-word-api.herokuapp.com/word?length=5');
    if(!result.ok){
      throw new Error('There was some issue in fetching data');
    }

    let data = await result.json();
    console.log(data)
    setWord(data);
  }catch(err){
    console.log(err);
  }
  }

  useEffect(()=>{
    fetchWord();
  }, []);
  return (
    <>
    <Wordcontext.Provider value = {word}>
      <Navbar />
      <MainBody />
      </Wordcontext.Provider>
    </>
  );
}

export default App;
