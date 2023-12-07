import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido, tengo varios productos en venta, extranjero"} />

    </div>
  )
}

export default App