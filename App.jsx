import React from 'react'
import SelfIntroduction from './SelfIntroduction.jsx';
import ChildComponent from './ChildComponent.jsx';
import StateTopic from './StateTopic.jsx';
import Darkmode from './Darkmode.jsx';



export default function App() {
const name = 'Mohan';
const city = 'Banglore';
const age = 30;
const email='mohan@example.com'
const phonenumber=9865238890

  return (
    <div>
      <ChildComponent name={name} city={city} age={age} email={email} phonenumber={phonenumber} />
      <SelfIntroduction/>
        <StateTopic/>
        <Darkmode/>
    </div>
  )
}
