import { memo } from 'react';
import { isEqual } from 'lodash';

/* 
// usando el concepto de memoization
const Li = memo(({ fullname }) => {
  console.log(`renderizando ${fullname}`)
  return (
    <li>
      {fullname}
    </li>
  )
})
*/

/* 
Si el componente Li recibe exactamente las mismas props, entonces debemos
hacer que se devuelva el componente que ya se haya computado antes.
Esto lo podemos hacer con memo.
*/


/* 
// Primer ejemplo 
const MyList = ({ data }) => {
  console.log('renderizando lista')
  return (
    <ul>
      {data.map(x =>
        <Li
          key={x.name + x.lastname}
          fullname={`${x.name} ${x.lastname}`}
        />
      )}
    </ul>
  )
}
*/

// prev: propiedades anteriores, post: propiedades que vienen 
// isEqual compara si prev y post son iguales.
// Para este caso SI es necesario usar isEqual porque children es un objeto
const Li = memo(({ children }) => {
  console.log(`renderizando ${children}`)
  return (
    <li>
      {children}
    </li>
  )
}, isEqual )

const MyList = ({ data }) => {
  console.log('renderizando lista')
  return (
    <ul>
      {data.map(x =>
        <Li key={x.name + x.lastname}>
          { x.name } { x.lastname }
        </Li>
      )}
    </ul>
  )
}

export default memo(MyList);
