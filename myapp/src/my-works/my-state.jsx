import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'

const Mystate = () => {
  const [Chance, setChance] = useState("bg-dark text-light")


  return (
<Container className={Chance}  style={{ height: "100vh" }}>
    <div style={{ display: 'flex', gap: '50px', }}>
      <Button onClick={()=>setChance("bg-dark text-light")} className='mt-4 p-4' variant="dark" size="lg">Karanlik</Button>
      <Button onClick={()=>setChance("bg-light text-dark")} className='mt-4 p-4' variant="warning" size="lg">Aydinlik</Button>
      <div></div>
    </div>
    </Container>

  )
}

export default Mystate