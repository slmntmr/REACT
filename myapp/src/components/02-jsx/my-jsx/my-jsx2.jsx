import React from 'react'

const Employes = () => {

const employes={
  firstName:"Ali",
  lastName:"Can",
  age:25,
  job:"Developer"
}



  return (
    <div>
      <h3>First Name: </h3>
      {employes.firstName}
      <h3>Last Name: </h3>
      {employes.lastName}
      <h3>Age:</h3>
      {employes.age}
      <h3>Jop: </h3>
      {employes.job}
    </div>
  )
}

export default Employes