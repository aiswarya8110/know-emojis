import React from "react";
import {useState} from "react";
import './index.css';


const emojiDictionary={
  "😊":"smilling",
  "😳":"disbelief",
  "😔":"sad",
  "🥡":"takeout box",
  "❤️":"Love",
  "😑":"annoyance"
}

function App(){
      const [emoji,setEmoji]=useState();
      const [meaning,setMeaning]= useState();


    function changeHandler(event){
      const inputEmoji =event.target.value;
      setEmoji(inputEmoji);
      if(inputEmoji in emojiDictionary){
          setEmoji(inputEmoji);
          setMeaning(emojiDictionary[inputEmoji]);
      }
     else{
          setMeaning("failure to recognise this emoji");    
     } 
   }

   function clickEmojiHandler(clickedEmoji){
        setMeaning(emojiDictionary[clickedEmoji]);
   }

    return(
      <div className="App"> 
          <h1>inside outttttt</h1>
          <input onKeyDown={changeHandler} placeholder={"search your emoji"}
          style={{
            padding:"1rem",
            minWidth:"80%"
          }}
          />
          <h2>{emoji}</h2>
          <h3>{meaning}</h3>

          {
            Object.keys(emojiDictionary).map(function(emoji){  
             return(
              <span
              onClick={function(){ 
                clickEmojiHandler(emoji)}
              }
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            >
              {emoji}
            </span>
             )})
          }
      </div>
)
}




export default App;