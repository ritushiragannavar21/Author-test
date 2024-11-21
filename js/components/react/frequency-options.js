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
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none" className="tooltip_trigger" onClick={() => setShowTooltip(!showTooltip)}>
                            <path d="M2.77034 6.42V4.536C3.45834 4.504 3.99834 4.356 4.39034 4.092C4.78234 3.82 4.97834 3.412 4.97834 2.868V2.7C4.97834 2.252 4.84234 1.916 4.57034 1.692C4.30634 1.468 3.94234 1.356 3.47834 1.356C2.99834 1.356 2.61434 1.488 2.32634 1.752C2.03834 2.016 1.83834 2.352 1.72634 2.76L0.826344 2.424C0.906344 2.16 1.01834 1.912 1.16234 1.68C1.30634 1.44 1.48634 1.232 1.70234 1.056C1.92634 0.88 2.18634 0.74 2.48234 0.636C2.78634 0.532 3.13034 0.48 3.51434 0.48C3.89834 0.48 4.24234 0.536 4.54634 0.648C4.85834 0.752 5.12234 0.904 5.33834 1.104C5.55434 1.296 5.72234 1.532 5.84234 1.812C5.96234 2.092 6.02234 2.404 6.02234 2.748C6.02234 3.124 5.95434 3.456 5.81834 3.744C5.68234 4.024 5.50634 4.264 5.29034 4.464C5.07434 4.664 4.82634 4.828 4.54634 4.956C4.27434 5.076 3.99834 5.16 3.71834 5.208V6.42H2.77034ZM3.28634 9.108C2.95834 9.108 2.72634 9.04 2.59034 8.904C2.46234 8.768 2.39834 8.596 2.39834 8.388V8.172C2.39834 7.964 2.46234 7.792 2.59034 7.656C2.72634 7.52 2.95834 7.452 3.28634 7.452C3.61434 7.452 3.84234 7.52 3.97034 7.656C4.10634 7.792 4.17434 7.964 4.17434 8.172V8.388C4.17434 8.596 4.10634 8.768 3.97034 8.904C3.84234 9.04 3.61434 9.108 3.28634 9.108Z" fill="#282FEE"/>
                        </svg>
                        {showTooltip && <Tooltip setShowTooltip={setShowTooltip} subscriptionPlan={subscriptionPlan} />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FrequencyOptions;
