import { useState, } from 'react'
import picture from "../images/smoothambler.jpg";
export default function SACD(props){
    let url = `https://maps.googleapis.com/maps/api/staticmap?center=${props.lat},${props.long}&zoom=16&size=400x400&markers=${props.lat},${props.long}&maptype=roadmap&${props.pass}`
    const [visible, setVisible] = useState(false);
    const [button, setButton] = useState(true);
    const [stars, setStars] = useState(0);
    const starReset = () => setStars(0);
    function starUp(){
        let star = stars
        if (star < 10){
            setStars(star = star + 1)
        }
        else {
            setStars(10)
        }
    }
    function starDown(){
        let star = stars
        if (star !== 0){
            setStars(star = star - 1)
        }
        else {
            setStars(0)
        }
    }
    return (
        <>
            <h3>Smooth Ambler Contradiction</h3>
            <h4>My Rating: 8.5/10</h4>
            <h4>Your Rating: {stars}/10</h4>
            <button onClick={starUp}>Increase Rating</button><button onClick={starDown}>Decrease Rating</button><button onClick={starReset}>Reset Rating</button>
            <p>Reccomended Cocktail: Do Not Drink In A Cocktail!</p>
            <div style={{display: "flex", justifyContent: "center"}}>
            <button onClick={() => {setVisible(!visible); setButton(!button)}} style={{display: button ? "block" : "none"}}>Where is it?</button>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
            <img onClick={() => {setVisible(!visible); setButton(!button)}} src={url} id="map" alt='Smooth Ambler 745 Industrial Park Rd, Maxwelton, WV 24957' style={{display: visible ? 'block' : 'none'}}></img>
            </div>
        </>
    )
}