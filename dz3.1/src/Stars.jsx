import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star'

function Stars({count}) {
if (count >=1 &&count <=5){
  return (
    <ul>
    {count.map( <Star/>)}
    </ul>
    );
    }
}

export default Stars;

Stars.propTypes ={
    count: PropTypes.number.isRequired
};
