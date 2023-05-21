import React from 'react'
import './Timex.css'
import axios from 'axios';
const Timex = () => {

  const submitHandler=(event)=>{
    event.preventDefault();
    const MON=event.target.MON.value;
    const TUE=event.target.TUE.value;
    const WED=event.target.WED.value;
    const THU=event.target.THU.value;
    const FRI=event.target.FRI.value;
    const OVERTIME=event.target.OVERTIME.value;

    axios.post("https://jsonplaceholder.typicode.com/todos",{
            MON,
            TUE,
            WED,
            THU,
            FRI,
            OVERTIME
        })
        .then(response=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })

  };

  return (
    <div>
        <form name='saveTimex' onSubmit={submitHandler}>
      <div className='week'>
        <div className='Mon'>
            <h6>Mon</h6>
            <input type="number" id="quantity" name="MON" min="0" max="8"></input>
        </div>
        <div className='Tue'>
            <h6>Tue</h6>
            <input type="number" id="quantity" name="TUE" min="0" max="8"></input>
        </div>
        <div className='Wed'>
            <h6>Wed</h6>
            <input type="number" id="quantity" name="WED" min="0" max="8"></input>
        </div>
        <div className='Thu'>
            <h6>Thu</h6>
            <input type="number" id="quantity" name="THU" min="0" max="8"></input>
        </div>
        <div className='Fri'>
            <h6>Fri</h6>
            <input type="number" id="quantity" name="FRI" min="0" max="8"></input>
        </div>
    </div>
        <div className='OverTime'>
            <h6>OverTime</h6>
            <input type="number" id="quantity" name="OVERTIME" min="0" max="8"></input>
        </div>
        <button type='submit' className='btn btn-success w-100s' style={{marginTop:"40px", alignItems:"center"}}>Submit</button>
    </form>
    </div>
  )
}

export default Timex
