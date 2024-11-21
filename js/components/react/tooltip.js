import React from 'react';

const Tooltip = ({setShowTooltip}) => {
  return (
    <div onClick={() => setShowTooltip(false)}>Tooltip</div>
  )
}

export default Tooltip