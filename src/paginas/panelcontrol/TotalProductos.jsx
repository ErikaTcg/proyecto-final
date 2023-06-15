import React, { useState, useEffect } from 'react'
import axios from "axios";

  const TotalProductos = () => {
    const [totalProductos, setTotalproductos] = useState(0);

    useEffect(() => {
      fetchTotalproductos()
    }, [])

  const fetchTotalproductos =  async () => {
    const peticion = await axios.get("https://fakestoreapi.com/products")
    const productos = peticion.data
      setTotalproductos(productos.length)

      
  }

  return (
    <section>
        {totalProductos ? (
          <div className='total-productos'>
            <h2>Numero total de productos:</h2>
            <p>{totalProductos}</p>
          </div>
      ) : (
        <p>Cargando...</p>
      )}
      </section>
    
  )
}
export default TotalProductos

