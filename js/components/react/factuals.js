import React, { useState, useEffect } from "react";
import ResponsiveImage from "./ResponsiveImage";

const FactualSection = ({ shopifyData }) => {
  console.log("Shopify Data:", shopifyData);
  const blocks = shopifyData.data?.blocks || [];
  const blockCount = blocks.length;
  const imageArray = blocks.flatMap((block,index) => block.cards?.map((card) => card));
  const [selectedBlock, setselectedBlock] = useState(false);
  const [isFirstImageOpen, setIsFirstImageOpen] = useState(false);
  const [isSecondImageOpen, setIsSecondImageOpen] = useState(false);

  const srcTokens = {
    replacementToken: "?width=90&height=90",
    dataSrcToken: `?width=width&height=height`,
    srcToken: "?width=90&height=90",
  };

  const handleCardClick = (cardIndex) => {
    setIsFirstImageOpen(true);
    setselectedBlock(imageArray[cardIndex])
  };

  const handleCloseImage = () => {
    setIsFirstImageOpen(false);
    setselectedBlock(false); 
  };


  const handleNextImage = () => {
    setIsSecondImageOpen(true);
  };

  useEffect(() => {
   console.log("data---",selectedBlock)
  }, [selectedBlock]);

  return (
    <div className="container factual_container">
      {blockCount > 0 ? (
        <div
          className={`factual__section`} style={{ background: `${shopifyData.data.background_color}`,display: "grid", gridTemplateColumns: `repeat(${Math.min(blockCount, 2)}, 1fr)`,
          }}
        >
          {blocks.map((block, index) => {
            const image = block.image?.[0];
            const src = image?.src;
            const width = image?.width || 1920;
            const height = image?.height || 1080;

            const isFirstBlock = index === 0;

            return (
              <div
                key={index}
                className={`factual__item ${isFirstBlock ? "factual__item--flex" : ""} ${shopifyData.data.swipeMedia === "true" ? "factual__swap-block-mobile" : ""}`}
                style={{ position: "relative" }}
              >
                {isFirstBlock && (
                  <>
                  {block.url && (
                    <div className="text-image__button">
                    <a className="button button__custom-button text__cta" href={ block.url }><span className="btn-text button__btn-text"> { block.button } </span></a> 
                    </div>
                  )}
                  <div className="factual__left">
                  <div className="factual__popup-image-desktop">
                  {selectedBlock && selectedBlock?.imageSrc[0] && (
                      <div className="factual__top-image" style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 5 }}>  
                        <ResponsiveImage
                          aspectratio={0.9}
                          aspect_ratio_mobile={0.59}
                          image={{ src: selectedBlock?.imageSrc[0]?.src, width, height }}
                          srcTokens={srcTokens}
                        />
                        {/* Close icon */}
                        {selectedBlock && !isSecondImageOpen &&(
                          <div
                            className="close-icon"
                            style={{
                              position: 'absolute',
                              top: '10px',
                              right: '0',
                              cursor: 'pointer',
                              zIndex: 15,
                            }}
                            onClick={handleCloseImage}
                          >
                            <svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="35.5" cy="35" r="17.5" fill={selectedBlock?.color} />
                              <line x1="27.8399" y1="26.6601" x2="41.9821" y2="40.8022" stroke="#FEFDF6" stroke-width="2" />
                              <line x1="41.9805" y1="27.3321" x2="27.8384" y2="41.4742" stroke="#FEFDF6" stroke-width="2" />
                            </svg>
                          </div>
                        )}

                        {selectedBlock?.imageSrc[1]?.src && !isSecondImageOpen &&(
                          <div
                            className="factual__next-icon"
                            style={{
                              position: 'absolute',
                              top: '50%',
                              right: '17px', 
                              transform: 'translateY(-50%)',
                              cursor: 'pointer',
                              zIndex: 15,
                            }}
                            onClick={handleNextImage}
                          >
                            <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="17.5" cy="18" r="17" fill={selectedBlock?.color} stroke={selectedBlock?.color} />
                              <path d="M13.7908 27.9548L24.3868 18.1175L13.7908 8.28074" stroke="#FEFDF6" stroke-width="2" />
                            </svg>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="factual__popup-image-mobile">
                  {selectedBlock && selectedBlock?.imageMobile[0] && (
                      <div className="factual__top-image" style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 5 }}>  
                        <ResponsiveImage
                          aspectratio={0.9}
                          aspect_ratio_mobile={0.582}
                          image={{ src: selectedBlock?.imageMobile[0]?.src, width, height }}
                          srcTokens={srcTokens}
                        />
                        {/* Close icon */}
                        {selectedBlock && (
                          <div
                            className="close-icon"
                            style={{
                              position: 'absolute',
                              top: '10px',
                              right: '10px',
                              cursor: 'pointer',
                              zIndex: 15,
                            }}
                            onClick={handleCloseImage}
                          >
                            <svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="35.5" cy="35" r="17.5" fill={selectedBlock?.color} />
                              <line x1="27.8399" y1="26.6601" x2="41.9821" y2="40.8022" stroke="#FEFDF6" stroke-width="2" />
                              <line x1="41.9805" y1="27.3321" x2="27.8384" y2="41.4742" stroke="#FEFDF6" stroke-width="2" />
                            </svg>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                    <div className={`factual__sub-container ${isFirstImageOpen ? "factual__first-image-container" : ""}`}>
                      <h1 className="factual__title">
                        {block.title || "Default Title"}
                      </h1>
                      <p
                        className="factual__description"
                        dangerouslySetInnerHTML={{ __html: block.description }}
                      ></p>    
                      {block.cards && (
                        <div className="factual__cards">
                          {block.cards.map((card, cardIndex) => {
                            const text = card.text;
                            if (text) {
                              const myStyle = {
                                background: `
                                  linear-gradient(to right bottom, transparent 50%, #fff 0) no-repeat 0 0 / 2em 2em,
                                  linear-gradient(135deg, transparent 1.41em, ${card.color} 0)`,
                              };

                              return (
                                <div
                                  key={cardIndex}
                                  style={myStyle}
                                  className="factual__card-item"
                                  onClick={() => handleCardClick(cardIndex)}
                                >
                                  <div className="factual__card-cut-icon">
                                    <svg
                                      width="32"
                                      height="33"
                                      viewBox="0 0 32 33"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M31 32H3L17 17.5L31 3V32Z"
                                        fill="white"
                                        stroke="#282FEE"
                                        strokeWidth="1.5"
                                      />
                                    </svg>
                                  </div>
                                  <div className="factual__card-icon">
                                    <svg
                                      width="25"
                                      height="25"
                                      viewBox="0 0 25 25"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="12"
                                        fill="#FEFDF6"
                                        stroke="#FEFDF6"
                                      />
                                      <path
                                        d="M12.9507 9.18C12.6241 9.18 12.3954 9.11467 12.2647 8.984C12.1341 8.844 12.0687 8.67133 12.0687 8.466V8.242C12.0687 8.03667 12.1341 7.86867 12.2647 7.738C12.3954 7.598 12.6241 7.528 12.9507 7.528C13.2774 7.528 13.5061 7.598 13.6367 7.738C13.7674 7.86867 13.8327 8.03667 13.8327 8.242V8.466C13.8327 8.67133 13.7674 8.844 13.6367 8.984C13.5061 9.11467 13.2774 9.18 12.9507 9.18ZM9.78673 17.048H12.3907V11.728H9.78673V10.776H13.5107V17.048H15.9467V18H9.78673V17.048Z"
                                        fill="#282FEE"
                                      />
                                    </svg>
                                  </div>
                                  <div className="factual__card-content">
                                    <div
                                      className="factual__card-title"
                                      dangerouslySetInnerHTML={{
                                        __html: card.card_title,
                                      }}
                                    ></div>
                                    <h1 className="factual__code">
                                      {card.text}
                                      <sup>{card.sup}</sup>
                                    </h1>
                                  </div>
                                </div>
                              );
                            }
                            return null;
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                  </>
                )}
                
                {/* Render static image if no dynamic image is set */}
                  <div className={`factual__right factual__right-${blockCount}`}> 
                    {isSecondImageOpen && !isFirstBlock ? (
                      <div className="factual__right-image" style={{ position: 'relative' }}>
                        <ResponsiveImage
                          aspectratio={0.9}
                          aspect_ratio_mobile={0.59}
                          image={{ src: selectedBlock?.imageSrc[1]?.src, width, height }}
                          srcTokens={srcTokens}
                        />
                        <div
                          className="close-icon"
                          style={{
                            position: 'absolute',
                            top: '50%',
                            right: '17px',
                            cursor: 'pointer',
                            zIndex: 15,
                          }}
                          onClick={() => setIsSecondImageOpen(false)}
                        >
                          <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17.5" cy="17.5" r="17" transform="matrix(-1 0 0 1 35 0.5)" fill={selectedBlock?.color} stroke={selectedBlock?.color} />
                            <path d="M21.2092 27.9548L10.6132 18.1175L21.2092 8.28074" stroke="#FEFDF6" stroke-width="2" />
                          </svg>
                        </div>
                      </div> 
                    ) : (
                        src && (
                          <div className={` ${block.hideImage === "true" ? "factual__hide-image" : ""} `}>
                        <ResponsiveImage
                          aspectratio={0.9}
                          aspect_ratio_mobile={0.9}
                          image={{ src, width, height }}
                          srcTokens={srcTokens}
                        />
                        </div>
                      ) 
                    )}
                  </div>
 
              </div>
            );
          })}
        </div>
      ) : ('')}  
    </div>
  );
};

export default FactualSection;
