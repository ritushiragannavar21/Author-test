import React from "react";
import ResponsiveImage from "./ResponsiveImage";

const FactualSection = ({ shopifyData }) => {
  console.log("Shopify Data:", shopifyData);

  const srcTokens = {
    replacementToken: "?width=90&height=90",
    dataSrcToken: `?width=width&height=height`,
    srcToken: "?width=90&height=90",
  };

  const blocks = shopifyData.data?.blocks || []; 
  const blockCount = blocks.length;

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

            console.log("Block Image Data:", src, width, height); // Debugging image data

            const isFirstBlock = index === 0;

            return (
              <div
                key={index}
                className={`factual__item ${isFirstBlock ? "factual__item--flex" : ""}`}
              >
                {isFirstBlock && (
                  <div className="factual__left">
                    <h1 className="factual__title">
                      {block.title || "Default Title"}
                    </h1>
                    <p className="factual__description">
                      {block.description || "Default Description"}
                    </p>
                    {block.cards && (
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
                    )}
                  </div>
                )}
                {src && (
                  <div className="factual__right">
                    <ResponsiveImage
                      image_aspect_ratio={0.9}
                      image={{ src, width, height }}
                      srcTokens={srcTokens}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : ('')}
    </div>
  );
};

export default FactualSection;
