import React from 'react'
import TotalProductos from './panelcontrol/TotalProductos'
import TotalPedidos from './panelcontrol/TotalPedidos'
import IngresosTotales from './panelcontrol/IngresosTotales'
import PromedioPrecios from './panelcontrol/PromedioPrecios'
import TopSales from './panelcontrol/TopSales'
import './estilos/PanelControl.css'

const PanelControl = () => {

  return (
    <>
        <body className='container-panelcontrol'>
            <h1>*Panel de Control*</h1>
          <section className='container-estadisticas'>
            <TotalPedidos/>
            <IngresosTotales/>
            <TotalProductos/>
            <TopSales/>
            <PromedioPrecios/>
          </section>

        </body>
    </>
  )
}

export default PanelControl