import { memo } from "react";

// Para este caso NO es necesario usar isEqual porque children es un string y no un arreglo
// Si le estuvieramos pasando una variable SI seria necesario usar isEqual
const Title = ({ children }) => {
  console.log('rendering title')
  return (
    <h1>
      {children}
    </h1>
  )
}

export default memo(Title);
