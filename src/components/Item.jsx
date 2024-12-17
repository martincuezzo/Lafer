import React from 'react'
import { useNavigate } from 'react-router-dom'

const Item = ({product}) => {
  const navegar = useNavigate()


  return (
<div className="card m-2" style={{width:'18rem'}}>
  <img  src={product.img} className="card-img-top" alt={product.nombre}/>
  <div className="card-body d-flex flex-column justify-content-center">
    <h5 className="card-title text-center">{product.nombre}</h5>
    <p className="card-text text-center">${product.precio}</p>
    <button className="btn btn-dark" onClick={()=> navegar(`/item/${product.id}`)} > Ver más</button>
  </div>
</div>

  )
}

export default Item