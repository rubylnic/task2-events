import React, { useState } from 'react'
import propTypes from 'prop-types'
import PortfolioModel from './models/PortfolioModel';
import PurchaseItem from './PurchaseItem';



// отображает проекты
function ProjectList(props) {
// const [items, setItems] = useState([
// new PurchaseModel(1, 'Pizza'), new PurchaseModel(2, 'Juice')
// ]);
// const onItemToggle = item => {console.log('m') };
// const onItemRemove = item => { console.log('gg')};
return (
  props.projects.map((o,count) => <img className='card' key={count} src={o.img} data-category={o.category}/>)
);
}
ProjectList.propTypes = {}
export default ProjectList;
