import React from 'react';

const Tooltip = ({ setShowTooltip, subscriptionPlan }) => {
  return (
    <div className='tooltip'>
        <div className='tooltip__header'>
            <p className='tooltip__title'>Frequency Recommendation</p>
            <span className='tooltip__closeButton' onClick={() => setShowTooltip(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <line x1="0.353553" y1="0.388634" x2="14.4957" y2="14.5308" stroke="#282FEE"/>
                    <line x1="14.4942" y1="0.353553" x2="0.352042" y2="14.4957" stroke="#282FEE"/>
                </svg>
            </span>
        </div>
        <p className='tooltip__subtitle'>We recommend the following replenishment cycle:</p>
        <div className='tooltip__content'>
            <div className='tooltip__content--left'>
                <p className='usage_title'>Usage:</p>
                {subscriptionPlan.map(plan => (
                    <p className='usage_content'>{plan.usage}</p>
                ))}
            </div>
            <div className='tooltip__content--right'>
                <p className='frequency_title'>Frequency:</p>
                {subscriptionPlan.map(plan => (
                    <p className='frequency_content'>{plan.frequency}</p>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default Tooltip