import React from 'react';
import ResponsiveImage from "./ResponsiveImage";

const FactualSection = ({ shopifyData }) => {
  console.log("Shopify Data:", shopifyData);
  const srcTokens = {
    replacementToken: "?width=90&height=90",
    dataSrcToken: `?width=width&height=height`,
    srcToken: "?width=90&height=90",
  };

  return (
    <div className="container">
      {shopifyData.data.blocks && shopifyData.data.blocks.length > 0 ? (
        shopifyData.data.blocks.map((block, index) => {
          const src = block.image?.src || 'https://cdn.shopify.com/s/files/1/0422/2255/1191/files/placeholderImage.webp?v=1692958737';
          const width = block.image?.width || 1920;
          const height = block.image?.height || 1080;

          return (
            <div key={index} className="factual__section">
              <div className="factual__left">
                <h1 className="factual__title">{block.title || 'Default Title'}</h1>
                <p className="factual__description">{block.description || 'Default Description'}</p>
                {/* Uncomment if cards data exists */}
                <div className="factual__cards">
                  {block.cards.map((card, cardIndex) => (
                    <div
                      key={cardIndex}
                      className="factual__card-item"
                      style={{ backgroundColor: card.color }}
                    >
                      <span>{card.text}</span>
                    </div>
                  ))}
                </div> 
              </div>
              <div className="factual__right">
                <ResponsiveImage
                  image_aspect_ratio={0.9}
                  image={{ src, width, height }}
                  srcTokens={srcTokens}
                />
              </div>
            </div>
          );
        })
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default FactualSection;
