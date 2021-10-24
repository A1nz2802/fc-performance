import { useState, useCallback, useMemo } from 'react'
import Title from './components/Title'
import MyForm from './components/Forms/MyForm'
import MyList from './components/Lists/MyList'

// useCallback se encarga de memorizar una función y si se re quiere la misma
// instancia retorna la función memorizada en lugar de crear otra instancia de la misma
// para este caso handleSubmit será siempre el mismo.
function App() {
  const [valores, setValores] = useState([])
  const handleSubmit = useCallback((values) => {
    setValores( data => ([
      ...data,
      values
    ]))
  }, [])

  console.time('memo')
  // useMemo recibe 2 argumentos: 
  // 1- El primero es una función la cual va a guardar el resultado siempre y cuando los argumentos de este no hayan cambiado
  // 2- Son los argumentos que recibe nuestra función
  const iterador = 50000000;
  const memoized = useMemo(() => {
    let total = 0;
    for (let i = 0; i < iterador; i++) {
      total = total * iterador;
    }

    return total;
  }, [ iterador ])
  console.timeEnd('memo')

  return (
    <div>
      <Title>Mi título</Title>
      {/* La función handleSubmit estaba siendo siempre una nueva instancia */}
      <MyForm onSubmit={handleSubmit} />
      <MyList data={valores} />
    </div>
  );
}

export default App;
