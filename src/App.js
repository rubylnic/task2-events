import './App.css';
import React, { useState } from 'react';
import Portfolio from './Portfolio';
import Store from './Store';

function App() {
  const [tab, setTab] = useState('portfolio');
  const switchTabs = (evt) => {
    evt.target.dataset.button === 'portfolio' ? setTab('portfolio') : setTab('store')
  }
  return (
    <div>
      <button className={tab === "portfolio" ? "pin active" : "pin"} data-button="portfolio" onClick={switchTabs}>Portfolio</button>
      <button className={tab !== "portfolio" ? "pin active" : "pin"} data-button="store" onClick={switchTabs}>Store</button>

      <div className={tab !== "portfolio" ? "tab hidden" : "tab"}>
        <Portfolio />
      </div>
      <div className={tab === "portfolio" ? "tab hidden" : "tab"}>
        <Store />
      </div>

    </div>
  );
}

export default App;
