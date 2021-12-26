import React, { useState } from 'react'
import propTypes from 'prop-types'
import PurchaseModel from './models/PurchaseModel';
import PurchaseItem from './PurchaseItem';


function PurchaseList(props) {
const [items, setItems] = useState([
new PurchaseModel(1, 'Pizza'), new PurchaseModel(2, 'Juice')
]);
const onItemToggle = item => {console.log('m') };
const onItemRemove = item => { console.log('gg')};
console
return (
  <ul>
    {items.map(o => <PurchaseItem key={o.id} item={o} onToggle={onItemToggle} onRemove={onItemRemove} />)}
  </ul>
);
}
PurchaseList.propTypes = {}
export default PurchaseList;
