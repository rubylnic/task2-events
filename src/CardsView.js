import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem';


// отображает проекты
function CardsView(props) {
  return (
    <div className={props.mode === 'module' ? "shop-items module" : "shop-items list"}>
      {
        props.cards.map((o, count) =>
          <div className="shop-item" key={count}>
            <ShopItem props={o} />
          </div>
        )
      }
    </div>
  );
}
CardsView.propTypes = {
  mode: PropTypes.string,
  cards: PropTypes.array
}
CardsView.defaultProps = {
  mode: 'module',
}
export default CardsView;
