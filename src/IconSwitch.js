import React from 'react'
import PropTypes from 'prop-types'


// отображает фильтры
function IconSwitch(props) {
  const listener = props.onSwitch;
  const icon = props.icon;

  return (
    <button className='material-icons' data-filter={icon} onClick={listener}>{icon}</button>);
}

IconSwitch.propTypes = {
  onSwitch: PropTypes.func,
  icon: PropTypes.string
}
IconSwitch.defaultProps = {
  icon: 'view_list'
}
export default IconSwitch;
