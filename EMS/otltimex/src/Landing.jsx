import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Otl from './Otl'
import Timex from './Timex'
import Reconcilate from './Reconcilate'
function Landing () {
  return (
    <>
    <div className='otl'>
        <h2>OTL</h2>
        <Otl/>
    </div>
    <div className='timex'>
        <h2>TIMEX</h2>
        <Timex/>
    </div>
    <div className='reconcilate'>
        <Reconcilate/>
    </div>
    </>
  )
}

export default Landing
