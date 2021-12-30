import React, { useState } from 'react';
import CardsView from './CardsView';
import IconSwitch from './IconSwitch';

const productsInit = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];


function Store(props) {
  const [mode, setMode] = useState('list');
  const onSwitch = (evt) => {
    if (evt.target.textContent === 'view_list') {
      evt.target.textContent = 'view_module';
      setMode('module');
    } else {
      evt.target.textContent = 'view_list';
      setMode('list')
    }
  }
  return (
    <>
      <IconSwitch icon={"view_list"} onSwitch={onSwitch} />
      <CardsView cards={productsInit} mode={mode} />
    </>
  )
}

export default Store;
