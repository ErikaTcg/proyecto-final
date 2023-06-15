import React, { useState, useEffect } from 'react'
import axios from "axios";

  const TotalPedidos = () => {
    const [totalPedidos, setTotalpedidos] = useState(0);

    useEffect(() => {
      fetchTotalpedidos()
    }, [])

  const fetchTotalpedidos =  async () => {
    const peticion = await axios.get("https://fakestoreapi.com/carts")
    const pedidos = peticion.data
      setTotalpedidos(pedidos.length)
  }

  return (
    <section>
        {totalPedidos ? (
          <div className='total'>
            <p>
              Pedidos: {totalPedidos}
            </p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
      </section>
    
  )
}

export default TotalPedidos