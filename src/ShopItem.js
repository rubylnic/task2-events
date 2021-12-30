import React from "react";
import PropTypes from 'prop-types';

function ShopItem(props) {
  const info = props.props;
  return (
    <>
      <h2>{info.name}</h2>
      <span>{info.color}</span>
      <span>${info.price}</span>
      <img src={info.img} alt={info.name} />
      <button type="button">Add to cart</button>
    </>
  )
}

ShopItem.propTypes = {
  props: PropTypes.object
}

export default ShopItem;