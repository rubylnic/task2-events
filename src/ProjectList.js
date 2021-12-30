import React, { useState } from 'react';
import propTypes from 'prop-types';


// отображает проекты
function ProjectList(props) {
  return (
    props.projects.map((o, count) => <img className='card' key={count} src={o.img} data-category={o.category} />)
  );
}
ProjectList.propTypes = {}
export default ProjectList;
