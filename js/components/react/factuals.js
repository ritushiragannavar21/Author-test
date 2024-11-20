import React, { useState, useEffect } from "react";
import ResponsiveImage from "./ResponsiveImage";

const FactualSection = ({ shopifyData }) => {
  console.log("Shopify Data:", shopifyData);

  const [dynamicImageSrc, setDynamicImageSrc] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [iconColor, setIconColor] = useState(null);

  const srcTokens = {
    replacementToken: "?width=90&height=90",
    dataSrcToken: `?width=width&height=height`,
    srcToken: "?width=90&height=90",
  };

  const blocks = shopifyData.data?.blocks || [];
  const blockCount = blocks.length;

  const handleCardClick = (imageSrcArray, color) => {
    const firstImageSrc = imageSrcArray?.[0]?.src;
    if (firstImageSrc) {
      setIconColor(color);
      setDynamicImageSrc(firstImageSrc);
    }
  };

  const handleCloseImage = () => {
    setDynamicImageSrc(null); 
  };

  const imageArray = blocks.flatMap((block,index) => block.cards?.map((card) => card.imageSrc?.[1]?.src));

  const handleNextImage = () => {
    const secondImageSrc = imageArray;
    if (secondImageSrc) {
      setCurrentImageIndex(secondImageSrc);
    }
  };

  useEffect(() => {
    if (dynamicImageSrc && iconColor) {
      // Update the icon color whenever dynamicImageSrc changes
      // console.log("Icon Color Updated:", iconColor);
    }
  }, [dynamicImageSrc, iconColor]);

  console.log("Icon Color Updated:", iconColor);

  return (
    <div className="container factual_container">
      {blockCount > 0 ? (
        <div
          className="factual__section"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${Math.min(blockCount, 2)}, 1fr)`,
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
                className={`factual__item ${isFirstBlock ? "factual__item--flex" : ""}`}
                style={{ position: "relative" }}
              >
                {isFirstBlock && (
                  <>
                  {block.url && (
                    <div className="text-image__button">
                    <a className="button button__custom-button text__cta" href={ block.url }><span class="btn-text button__btn-text"> { block.button } </span></a> 
                    </div>
                  )}
                  <div className="factual__left">
                    {dynamicImageSrc && (
                      <div className="factual__top-image" style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 5 }}>  
                        <ResponsiveImage
                          image_aspect_ratio_desktop={0.9}
                          image_aspect_ratio_mobile={0.59}
                          image={{ src: dynamicImageSrc, width, height }}
                          srcTokens={srcTokens}
                        />
                        {/* Close icon */}
                        {!currentImageIndex && (
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
                              <circle cx="35.5" cy="35" r="17.5" fill={iconColor} />
                              <line x1="27.8399" y1="26.6601" x2="41.9821" y2="40.8022" stroke="#FEFDF6" stroke-width="2" />
                              <line x1="41.9805" y1="27.3321" x2="27.8384" y2="41.4742" stroke="#FEFDF6" stroke-width="2" />
                            </svg>
                          </div>
                        )}

                        {!currentImageIndex && (
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
                              <circle cx="17.5" cy="18" r="17" fill={iconColor} stroke={iconColor} />
                              <path d="M13.7908 27.9548L24.3868 18.1175L13.7908 8.28074" stroke="#FEFDF6" stroke-width="2" />
                            </svg>
                          </div>
                        )}
                      </div>
                    )}
                    <div className="factual__sub-container">
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
                                onClick={() => handleCardClick(card.imageSrc, card.color)}
                              >
                                <div className="factual__card-icon">
                                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12.5" cy="12.5" r="12" fill="#FEFDF6" stroke="#FEFDF6"/>
                                    <path d="M12.9507 9.18C12.6241 9.18 12.3954 9.11467 12.2647 8.984C12.1341 8.844 12.0687 8.67133 12.0687 8.466V8.242C12.0687 8.03667 12.1341 7.86867 12.2647 7.738C12.3954 7.598 12.6241 7.528 12.9507 7.528C13.2774 7.528 13.5061 7.598 13.6367 7.738C13.7674 7.86867 13.8327 8.03667 13.8327 8.242V8.466C13.8327 8.67133 13.7674 8.844 13.6367 8.984C13.5061 9.11467 13.2774 9.18 12.9507 9.18ZM9.78673 17.048H12.3907V11.728H9.78673V10.776H13.5107V17.048H15.9467V18H9.78673V17.048Z" fill="#282FEE"/>
                                  </svg>
                                </div>
                                <div className="factual__card-content">
                                  <div
                                    className="factual__card-title"
                                    dangerouslySetInnerHTML={{
                                      __html: card.card_title,
                                    }}
                                  ></div>
                                  <h1
                                    className="factual__code"
                                    dangerouslySetInnerHTML={{ __html: card.text }}
                                  ></h1>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                  </>
                )}
                
                {/* Render static image if no dynamic image is set */}
                <div className="factual__right">
                  {currentImageIndex && src ? (
                    <div className="factual__right-image" style={{ position: 'relative' }}>
                      <ResponsiveImage
                        image_aspect_ratio_desktop={0.9}
                        image_aspect_ratio_mobile={0.59}
                        image={{ src: currentImageIndex, width, height }}
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
                        onClick={() => setCurrentImageIndex(null)}
                      >
                        <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="17.5" cy="17.5" r="17" transform="matrix(-1 0 0 1 35 0.5)" fill={iconColor} stroke={iconColor} />
                          <path d="M21.2092 27.9548L10.6132 18.1175L21.2092 8.28074" stroke="#FEFDF6" stroke-width="2" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    src && (
                      <ResponsiveImage
                        image_aspect_ratio_desktop={0.9}
                        image_aspect_ratio_mobile={0.9}
                        image={{ src, width, height }}
                        srcTokens={srcTokens}
                      />
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
