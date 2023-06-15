import React, { useState, useEffect } from 'react'
import axios from "axios";
import './estilos/Contenido.css'


  const Contenido = () => {
    const [productos, setProductos] = useState(null)

  useEffect(() =>{
    fetchTotalproductos(setProductos)
  },[])

  const fetchTotalproductos =  async (state) => {
  const peticion = await axios.get('https://fakestoreapi.com/products')
  state(peticion.data)
}

  return (
    <section className='container-items'>
      {productos != null ? (
        productos.map(productos=>(
          <div className='item' key={productos.id}>

            <figure>
              <img src={productos.image}
              alt={productos.title}
              />
            </figure>

            <div className="info-product">
                <h2>{productos.title}</h2>
                <p className="price"> ${productos.price} </p>
            </div>
          </div>
        ))
      ) : ('No hay productos')}
    </section>

  )
}

export default Contenido