import React from 'react'
import './Otl.css'
import axios from 'axios';

const otl = () => {

    const submitHandler=(event)=>{
        event.preventDefault(); 
        const monday=event.target.monday.value;
        const tuesday=event.target.tuesday.value;
        const wednesday=event.target.wednesday.value;
        const thursday=event.target.thursday.value;
        const friday=event.target.friday.value;
        const sowd=event.target.sowd.value;
        const sowe=event.target.sowe.value;
        const cowd=event.target.cowd.value;
        const cowe=event.target.cowe.value;
        const soph=event.target.soph.value;
        const coph=event.target.coph.value;

        axios.post("http://localhost:8080/otls",{
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            sowd,
            sowe,
            cowd,
            cowe,
            soph,
            coph
        })
        .then(response=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    };
  return (
    <>
    <form name="saveOtl" onSubmit={submitHandler}>
    <div className='week'>
        <div className='Mon'>
            <h6>Mon</h6>
            <input type="number" id="quantity" name="monday" min="0" max="8"></input>
        </div>
        <div className='Tue'>
            <h6>Tue</h6>
            <input type="number" id="quantity" name="tuesday" min="0" max="8"></input>
        </div>
        <div className='Wed'>
            <h6>Wed</h6>
            <input type="number" id="quantity" name="wednesday" min="0" max="8"></input>
        </div>
        <div className='Thu'>
            <h6>Thu</h6>
            <input type="number" id="quantity" name="thursday" min="0" max="8"></input>
        </div>
        <div className='Fri'>
            <h6>Fri</h6>
            <input type="number" id="quantity" name="friday" min="0" max="8"></input>
        </div>
        
      
        <div className='week2'>
        <div className='Sowd'>
            <h6>SOWD</h6>
            <input type="number" id="quantity" name="sowd" min="0" max="8"></input>
        </div>
        <div className='Sowe'>
            <h6>SOWE</h6>
            <input type="number" id="quantity" name="sowe" min="0" max="8"></input>
        </div>
        <div className='Cowd'>
            <h6>COWD</h6>
            <input type="number" id="quantity" name="cowd" min="0" max="8"></input>
        </div>
        <div className='Cowe'>
            <h6>COWE</h6>
            <input type="number" id="quantity" name="cowe" min="0" max="8"></input>
        </div>
        
        </div>
        <div className='week3'>
        <div className='Soph'>
            <h6>SOPH</h6>
            <input type="number" id="quantity" name="soph" min="0" max="8"></input>
        </div>
        <div className='Coph'>
            <h6>COPH</h6>
            <input type="number" id="quantity" name="coph" min="0" max="8"></input>
        </div>
        </div>
        <button type='submit' className='btn btn-success w-100s' style={{marginTop:"20px", alignItems:"center"}}>Submit</button>
    </div>
    </form>
    </>
  )
}

export default otl
