import React from 'react'
import Welcome from './welcome'

const Greetings = () => {
  return (
    <div>
        <h1>Props</h1>

        <Welcome firstName="John" lastName="Doe" textColor="yellow"/>
        <Welcome firstName="Kevin" lastName="White" textColor="blue"/>
        <Welcome firstName="Joseph" lastName="Yellow" textColor="orange"/>
        <Welcome firstName="adem" lastName="brave" textColor="red" age="25" />
        <Welcome>Lorem ipsum dolor sit amet.
        </Welcome>
    </div>
  )
}

export default Greetings