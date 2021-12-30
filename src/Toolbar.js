import React from 'react'
import PropTypes from 'prop-types'

// отображает фильтры
function Toolbar(props) {
  const filters = props.filters;
  const listener = props.onSelectFilter;
  const selected = props.selected;

  return (
    <div className="filters">{
      filters.map((o, count) => <div className={o === selected ? 'filter active' : 'filter'} key={count} data-filter={o} onClick={listener}>{o}</div>)
    }
    </div>
  );
}
Toolbar.propTypes = {
  filters: PropTypes.array,
  listener: PropTypes.func,
  selected: PropTypes.string
}
Toolbar.defaultProps = {
  filters: ["All", "Websites", "Flayers", "Business Cards"],
  selected: 'All'
}
export default Toolbar;
