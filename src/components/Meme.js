import {useState, useEffect} from "react"
import { memesData } from "../memesData"

export const Meme = () =>{

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg"});

  const [allMeme, setAllMeme] = useState([])
  
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMeme(data.data.memes))
  }, [])


  function getMemeImage () {
      const randomNumber = Math.floor(Math.random() * allMeme.length);
      const url = allMeme[randomNumber].url;
      setMeme(prevMeme =>({
        ...prevMeme,
        randomImage: url
      }))
  }

  function handleChange(event){
      const {name, value} = event.target
      setMeme(prevSetMeme => ({
        ...prevSetMeme,
        [name]: value
      }))
  }

  console.log(meme)

  return(
    <main className="meme--all">
      <div className="meme--form">
        <div className="meme--message">
          <input
            type='text' 
            placeholder="top message"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
          <input 
            type='text' 
            placeholder="bottom message"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </div>
        <div className="meme--button--container">
        <button 
          className="meme--button"
          onClick={getMemeImage}
        >Get a new meme image &#127912;</button>
        </div>
      </div>

        <div className="meme--container--img">
          <img src={meme.randomImage} alt="meme-ph" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>

    </main>
  )
}