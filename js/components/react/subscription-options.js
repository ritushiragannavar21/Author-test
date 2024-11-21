import React, { useState, useEffect } from "react";
// import "StyleComponents/subscription-sec.scss";
import FrequencyOptions from "./frequency-options";

const SubscriptionOptions = ({ updateSellingPlan, sellingplan, selectedVariant, selectedSellingPlan, onUpdate, purchaseType, subscription_plan }) => {
  const {price,priceWithoutCurrency} = selectedVariant;
  const {priceAdjustments, discount} = selectedSellingPlan; 
  const [subscriptionBenefits, setSubscriptionBenefits] = useState('') 
  const discountNum = parseFloat(discount);
  const numPriceWithoutCurrency  = parseFloat(price.replace('$','').replace(',','')) || 0;

  const numPrice = parseFloat(price.replace('$', '')) || 0;

  const calculateDiscountedPrice = (offerType = "") => {
    if (offerType == 'percentage') {
        const discountedPrice = numPriceWithoutCurrency * (1 - discountNum / 100);
        return discountedPrice.toFixed(2);
    } else if (offerType == 'fixed_amount') {
        const fixedAmt = (numPriceWithoutCurrency - flatRate);
        return fixedAmt.toFixed(2);
    } else if (offerType == 'price') {
        return flatRate.toFixed(2);
    }
  };

  const calculateOffer = (offerType) => {
    if (offerType === "percentage" ) {
        return `${discountNum}%`;
    } else if (offerType === "fixed_amount" ) {
        const newFixedAmountValue = discountNum/100;
        return `$${newFixedAmountValue.toFixed(2)}`;
    } else if (offerType === "price") {
        const newValue  = numPriceWithoutCurrency - (discountNum/100);
        return `$${newValue.toFixed(2)}`;
    }
  };

  useEffect(() => {

    setSubscriptionBenefits()
  }, [selectedSellingPlan])
  console.log(subscription_plan[0].benefits, selectedSellingPlan.frequency, subscription_plan[0].frequency)

  return (
    <>
      <div className={`subscriptionOpt-container__subscription-wrapper variant-container__var-wrapper ${purchaseType != 'onetime' ? 'active' : ''}`} onClick={() => {onUpdate("subscription")}}>    
        <div className="subscriptionOpt-container__subscription-label">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none" className={`${purchaseType != 'onetime' ? 'active': ''}`}>
            <line x1="4.61589" y1="6.67991" x2="9.61589" y2="0.679908" stroke="white"/>
            <line x1="4.64645" y1="7.35355" x2="1.11091" y2="3.81802" stroke="white"/>
          </svg>
        
          {/* <input type="radio" checked={purchaseType !== 'onetime'} /> */}
           Subscribe {discount > 0 && "& Save"}&nbsp; {discount > 0 && calculateOffer(priceAdjustments)} 
        </div>
        <p className="subscriptionOpt-container__subscription-Price"> 
         {calculateDiscountedPrice(priceAdjustments) < numPrice && (
            <span className="sub-compare-at-price">${numPrice}</span>
          )}&nbsp;${calculateDiscountedPrice(priceAdjustments)}</p> 
          {purchaseType != "onetime" && 
            <>
              <FrequencyOptions sellingplan={sellingplan} selectedSellingPlan={selectedSellingPlan} onUpdate={updateSellingPlan} />
              <div className="subscription_benefits">
                <p>Subscription Benefits</p>
                {selectedSellingPlan.frequency === subscription_plan[0].frequency && (
                  <ul>
                    {subscription_plan[0].benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                )}
                {/* <ul>
                  <li>
                  {discount > 0 && calculateOffer(priceAdjustments)} off + exclusive gifts on every recurring order
                  </li>
                  <li>
                    Bundle your routine for additional savings
                  </li>
                  <li>
                    Skip or cancel anytime
                  </li>
                </ul> */}
              </div>
            </> 
          }
      </div>
      
    </>
  );
};

export default SubscriptionOptions;