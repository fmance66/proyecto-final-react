import React, { useState, useEffect } from 'react';
import Item from '../item/Item';
import { Container, Row, Col } from 'react-bootstrap';

const ItemList = ( {productos, tipo} ) => {

  // console.log(`ItemList productos tipo ${tipo} ==> `, productos);

  const [productosFiltrados, setProductosFiltrados] = useState([]);

  // obtiene lista de productos simulando que tarda 3 segundos
  useEffect(() => {
      if (tipo === undefined) {           // no hay filtro (todos los productos)
        setProductosFiltrados(productos);
      } else {                           // filtra por tipo
        setProductosFiltrados(productos.filter(item => item.tipo === tipo));
      }
  }, [tipo])  

  // console.log(`Productos filtrados ==> `, productosFiltrados);
  
  return (
    <div className='itemList'>
      <h3 className='subtitulo'>
          {
            {
              'lampara': 'Lámparas',
              'luminaria': 'Luminarias',                                                    
              'proyector': 'Proyectores',
              undefined: 'Todos los Productos'
            } [tipo]
          }
      </h3> 
      <Container>
        <Row>
          { 
              productosFiltrados.map((producto, index) => (
                <Col lg={4} sm={6} xs={12} key={index} >
                  <Item index={index} producto={producto} />
                </Col>
              ))
          }
        </Row>
      </Container>
    </div>
  )
};

export default ItemList;