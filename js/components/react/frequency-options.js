import React, { useState } from "react";
import Tooltip from "./tooltip";
// import 'StyleComponents/variant-options.scss';

const FrequencyOptions = ({ sellingplan, selectedSellingPlan, onUpdate, subscriptionPlan }) => {
    const [showFrequencyOption, setShowFrequencyOption] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false); 
    const extractFrequency = (frequency) => {
        if(frequency != selectedSellingPlan.frequency){
            let [deliveryText] = frequency.split(',');
            if (!deliveryText) return
            // deliveryText = (deliveryText?.toLowerCase()).split("delivery every")[1];
            return deliveryText;
        }
    };
    
    return (
        <>
            <div className="frequency-container__freq-label variant-container__opt-label">
                <div className="frequency-container__freq-options variant-container__var-options">
                    Ships every <div class="dropdown_content" onClick={() => setShowFrequencyOption(!showFrequencyOption)}>
                        {selectedSellingPlan.frequency} 
                        <span className={showFrequencyOption ? 'dropdownOpen' : 'dropdownClose'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                                <line x1="0.707107" y1="1.29289" x2="5.70711" y2="6.29289" stroke="#282FEE" stroke-width="2"/>
                                <line x1="4.29289" y1="6.29289" x2="9.29289" y2="1.29289" stroke="#282FEE" stroke-width="2"/>
                            </svg>
                            
                        </span>
                        
                        {showFrequencyOption &&
                            <div className="frequency_options">
                                {sellingplan.length && sellingplan.map((sellplan, index) => (
                                    <div
                                        key={index}
                                        className={`frequency-container__freq-wrapper ${selectedSellingPlan.id === sellplan.id ? 'active' : ''}`}
                                        onClick={() => {onUpdate(sellplan); setShowFrequencyOption(false)}}
                                    >
                                        <h3 className="frequency-container__freq-name variant-container__var-name">
                                            {extractFrequency(sellplan.frequency)}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                    {/* Tooltip */} 
                    <div className="tooltip_container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path d="M16 8.5C16 12.6421 12.6421 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5Z" fill="#E8FF5C"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5ZM8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z" fill="#282FEE"/>
                            <path d="M7.77042 10.42V8.53601C8.45842 8.50401 8.99842 8.35601 9.39042 8.09201C9.78242 7.82001 9.97842 7.41201 9.97842 6.86801V6.70001C9.97842 6.25201 9.84242 5.91601 9.57042 5.69201C9.30642 5.46801 8.94242 5.35601 8.47842 5.35601C7.99842 5.35601 7.61442 5.48801 7.32642 5.75201C7.03842 6.01601 6.83842 6.35201 6.72642 6.76001L5.82642 6.42401C5.90642 6.16001 6.01842 5.91201 6.16242 5.68001C6.30642 5.44001 6.48642 5.23201 6.70242 5.05601C6.92642 4.88001 7.18642 4.74001 7.48242 4.63601C7.78642 4.53201 8.13042 4.48001 8.51442 4.48001C8.89842 4.48001 9.24242 4.53601 9.54642 4.64801C9.85842 4.75201 10.1224 4.90401 10.3384 5.10401C10.5544 5.29601 10.7224 5.53201 10.8424 5.81201C10.9624 6.09201 11.0224 6.40401 11.0224 6.74801C11.0224 7.12401 10.9544 7.45601 10.8184 7.74401C10.6824 8.02401 10.5064 8.26401 10.2904 8.46401C10.0744 8.66401 9.82642 8.82801 9.54642 8.95601C9.27442 9.07601 8.99842 9.16001 8.71842 9.20801V10.42H7.77042ZM8.28642 13.108C7.95842 13.108 7.72642 13.04 7.59042 12.904C7.46242 12.768 7.39842 12.596 7.39842 12.388V12.172C7.39842 11.964 7.46242 11.792 7.59042 11.656C7.72642 11.52 7.95842 11.452 8.28642 11.452C8.61442 11.452 8.84242 11.52 8.97042 11.656C9.10642 11.792 9.17442 11.964 9.17442 12.172V12.388C9.17442 12.596 9.10642 12.768 8.97042 12.904C8.84242 13.04 8.61442 13.108 8.28642 13.108Z" fill="#282FEE"/>
                        </svg>
                        {showTooltip && <Tooltip setShowTooltip={setShowTooltip} subscriptionPlan={subscriptionPlan} />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FrequencyOptions; 
