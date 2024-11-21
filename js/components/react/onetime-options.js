import React from "react";

const OnetimeOptions = ({ selectedVariant, onUpdate, purchaseType }) => {
  const { price, compareAtPrice, OriginalCompareAtPrice } = selectedVariant;
  // Remove dollar signs and parse the values to floats
  const numPriceWithoutCurrency = parseFloat(price.replace('$', '')) || 0;
  const compareAtPriceWithoutCurrency = parseFloat(compareAtPrice.replace('$', '')) || 0;
  const OriginalComparePrice = parseFloat(OriginalCompareAtPrice.replace('$', '')) || 0;
  const showDiscountedPrice = compareAtPriceWithoutCurrency > numPriceWithoutCurrency;

  let finalCompareAtPrice = compareAtPrice;

  if(!showDiscountedPrice){
    finalCompareAtPrice = OriginalCompareAtPrice;
  }
  
  return (
    <>
      <div className={`onetime-container__onetime-wrapper variant-container__var-wrapper ${purchaseType === 'onetime' ? 'active' : ''}`} onClick={() => { onUpdate("onetime") }}>
        <div className="onetime-container__onetime-label">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none" className={`${purchaseType == 'onetime' ? 'active': ''}`}>
            <line x1="4.61589" y1="6.67991" x2="9.61589" y2="0.679908" stroke="white"/>
            <line x1="4.64645" y1="7.35355" x2="1.11091" y2="3.81802" stroke="white"/>
          </svg>
          {/* <input type="radio" checked={purchaseType == 'onetime'} />  */}
          <p>One-time Purchase</p>
        </div>
        <p className="onetime-container__oneTime-Price">
    
            <span className="sub-compare-at-price">{finalCompareAtPrice}</span>
          
          &nbsp;{price}
        </p>
      </div>
    </>
  );
};

export default OnetimeOptions;
