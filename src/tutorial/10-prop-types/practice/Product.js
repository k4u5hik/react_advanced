import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({ image, name, price }) => {
  return (
    <article className='product'>
      {/* <h4>single product</h4> */}
      <img src={image.url} alt={name} />
      <h4>{name}</h4>
      <p>{price}</p>
    </article>
  )
}

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}
Product.defaultProps = {
  name: 'no name',
  price: 0.0,
  image: defaultImage,
}
export default Product
