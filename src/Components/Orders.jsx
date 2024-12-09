import { useEffect } from 'react'

function Orders() {

  useEffect(() => {
    return () => {
      console.log("Orders cancelled!")
    }
  }, [])

  return (
    <>
      <div>-Pizzas</div>
    </>
  )
}

export default Orders
