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
    subscription_plan.map(plan => {
      if(selectedSellingPlan.frequency === plan.frequency){
        setSubscriptionBenefits(plan.benefits)
      }
    })
  }, [selectedSellingPlan])

  return (
    <>
      <div className={`subscriptionOpt-container__subscription-wrapper variant-container__var-wrapper ${purchaseType != 'onetime' ? 'active' : ''}`} onClick={() => {onUpdate("subscription")}}>    
        <div className="subscriptionOpt-container__subscription-label">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none" className={`${purchaseType != 'onetime' ? 'active': ''}`}>
            <line x1="4.61589" y1="6.67991" x2="9.61589" y2="0.679908" stroke="white"/>
            <line x1="4.64645" y1="7.35355" x2="1.11091" y2="3.81802" stroke="white"/>
          </svg>
        
          {/* <input type="radio" checked={purchaseType !== 'onetime'} /> */}
           <p>Subscribe {discount > 0 && "& Save"} {discount > 0 && calculateOffer(priceAdjustments)} </p>
        </div>
        <p className="subscriptionOpt-container__subscription-Price"> 
         {calculateDiscountedPrice(priceAdjustments) < numPrice && (
            <span className="sub-compare-at-price">${numPrice}</span>
          )} ${calculateDiscountedPrice(priceAdjustments)}</p> 
          {purchaseType != "onetime" && 
            <>
              <FrequencyOptions sellingplan={sellingplan} selectedSellingPlan={selectedSellingPlan} onUpdate={updateSellingPlan} subscriptionPlan={subscription_plan} />
              <div className="subscription_benefits">
                <p>Subscription Benefits</p>
                  <ul>
                    {subscriptionBenefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
              </div>
            </> 
          }
      </div>
      
    </>
  );
};

export default SubscriptionOptions;