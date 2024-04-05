import React from 'react';
import { useState } from 'react';
import "./Lottery.css";
import { genTicket ,sum} from './helper';

const Lottery = () => {
    let [ticket , setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket)===15;

    let newTicket =()=>{
        setTicket(genTicket(3));
    }
  return (
    <div>
    <h1>Lottery Game!</h1>
      <div className = "ticket">
       <span>{ticket[0]}</span>
       <span>{ticket[1]}</span>
       <span>{ticket[2]}</span>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={newTicket}>New Ticket</button>
      <br></br>
      <br></br>
      <br></br>
      <h3>{isWinning &&"Congratulations , YOU WON!"}</h3>
    </div>
  )
}

export default Lottery
