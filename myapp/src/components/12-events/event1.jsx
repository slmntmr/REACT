import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Event1 = () => {


    const handleClick = () => {
        alert("Hello")
    }

    const Welcome = () => {
      alert("welkome my frend")
     }

    // Event listener lara handler atanirken - onClick={sayHello} -
    // bu sekilde parantez kullanilmaz  - onClick={sayHello()} -
    // kullanilirsa fonksiyon hemen cagriir

  return (
    <Container className="mt-5">
<Button variant="info" onClick={handleClick}>Say Hello</Button>{" "}

        {/* <Button variant="info" onClick={()=>handleClick()}>Say Hello</Button> */}
<Button variant="success" onClick={Welcome} >Welcome</Button>

    </Container>
  )
}

export default Event1