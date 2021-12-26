import React, { useState } from 'react'
import propTypes from 'prop-types'
import PortfolioModel from './models/PortfolioModel';
import PurchaseItem from './PurchaseItem';



// отображает фильтры
function Toolbar(props) {
const filters = props.filters;
console.log(filters)
return (
  filters.map((o,count) => <div className='card' key={count} src={o.img} data-category={o.category}></div>)
);
}
Toolbar.propTypes = {}
export default Toolbar;
