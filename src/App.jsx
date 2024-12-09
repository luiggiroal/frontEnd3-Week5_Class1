import { useState, useEffect } from 'react'
import './App.css'
import Orders from './Components/Orders'

function App() {
  const [showOrders, setShowOrders] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowOrders(true)
      console.log("Orders updated!")
    }, 2000)
  }, [])

  return (
    <>
      <h1>Pizza Place</h1>
      {showOrders && <Orders />}
      <button onClick={() => setShowOrders(false)}>Cancel Orders</button>
    </>
  )
}

export default App
