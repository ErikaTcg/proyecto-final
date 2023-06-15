import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PromedioPrecios = () => {
  const [precios, setPrecios] = useState([]);
  const [promedio, setPromedio] = useState(0);

  useEffect(() => {
    const obtenerPrecios = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
          const productos = response.data;
          const preciosProductos = productos.map((producto) => producto.price);
          setPrecios(preciosProductos);
      } catch (error) {
        console.error('Error al obtener los precios:', error);
      }
    };

    obtenerPrecios();
  }, []);

  useEffect(() => {
    const calcularPromedio = () => {
      if (precios.length > 0) {
        const sumaPrecios = precios.reduce((total, precio) => total + precio);
        const promedioPrecios = sumaPrecios / precios.length;
        setPromedio(promedioPrecios);
      }
    };

    calcularPromedio();
  }, [precios]);

  

  return (
    <div className='promedio'>
      {precios.length > 0 ? (
        <div>
          <h2>Promedio de precios: </h2>
          <p>${promedio.toFixed(2)}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default PromedioPrecios;
