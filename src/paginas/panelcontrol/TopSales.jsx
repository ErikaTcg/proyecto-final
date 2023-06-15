import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [productos, setProductos] = useState([]);
  const [productoMasVendido, setProductoMasVendido] = useState(null);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const respuesta = await axios.get('https://fakestoreapi.com/products');
        setProductos(respuesta.data);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerProductos();
  }, []);

  useEffect(() => {
    const encontrarProductoMasVendido = () => {
      if (productos.length > 0) {
        return productos.reduce((productoMasVendido, productoActual) => {
          return productoActual.sold > productoMasVendido.sold ? productoActual : productoMasVendido;
        }, productos[0]);
      } else {
        return null;
      }
    };

    setProductoMasVendido(encontrarProductoMasVendido());
  }, [productos]);

  return (
    <div>
      {productoMasVendido ? (
        <div className='top-sales'>

            <h2>Producto más vendido:</h2>
            <h3>{productoMasVendido.title}</h3>
            <p>Vendido: {productoMasVendido.rating.count} veces</p>       
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div> 
  );
};

export default App;
