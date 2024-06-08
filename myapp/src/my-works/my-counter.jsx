
import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { TbBackground } from 'react-icons/tb';
import { TfiMinus, TfiPlus, TfiReload } from 'react-icons/tfi'




const MyCounter = () => {

  const [count, setCount] = useState(0);




  return (

<Container >
      <Button onClick={()=>setCount((prev)=>prev-1)} variant="outline-primary"><TfiMinus /></Button>{' '}
      <Button variant="outline-secondary">{count}</Button>{' '}
      <Button onClick={()=>setCount((prev)=>prev+1)} variant="outline-success"><TfiPlus /></Button>{' '}
      <Button onClick={()=>setCount(0)} variant="outline-warning"><TfiReload />  </Button>


</Container>
  )
}

export default MyCounter