import React, {useEffect, useState} from 'react'
import ResponsiveImage from './ResponsiveImage';
import { motion } from 'framer-motion';

const slider = ({ shopifyData }) => {
    const slides = shopifyData.data?.blocks;
    const blockSize = slides.length;
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(slides[0]);
    const width = 1920;
    const height = 1080;
    console.log(shopifyData)
    const settings = {
        imageFit: 'cover'
    }
    const renderNavigationBar = () => {
        const bars = []
        for(let i=0; i< blockSize; i++){
            bars.push(<span className={currentSlideIndex == i ? 'bar active' : 'bar'}></span>)
        }
        return bars;
    }
    
    useEffect(() => {
        setCurrentSlide(slides[currentSlideIndex])
    }, [currentSlideIndex])
    const slideVariants = {

        initial: { opacity: 0 },

        animate: { opacity: 1 },

        exit: { opacity: 0 },

    };
    if(currentSlide){
        return (
            <>
                <h1 className="h1 slideshow__head mb-1 mobile-only">{currentSlide?.slide_header}</h1>
                <div className="slideshow bannerSlider">
                <motion.div className="slideshow__banner-image" 
                key={currentSlideIndex} 
                initial="initial"
                animate="animate"
                exit="exit"
                variants={slideVariants}
                transition={{ duration: 0.9 }}
            >
                        <ResponsiveImage
                            aspectratio={1.8}
                            aspect_ratio_mobile={1.4}
                            image={{ src: currentSlide?.slide_image[0]?.src, width, height }}
                            settings={settings}
                        />
                    </motion.div>
                    <div className="slideshow__card-content slideshow__slideBody d-flex d-flex-dir-c justify-content-space-btw desktop-only" role="region" aria-label="Slide Text">
                        <h1 className="h1 slideshow__head mb-1">{currentSlide?.slide_header}</h1>
                        <div>
                            <h1 className="mb-2"><span className='slide_index'>{currentSlideIndex + 1}</span>{currentSlide?.subheading }</h1>
                            <p className='slideshow__subtext'>{currentSlide?.slide_sub_text }</p>
                            <div className='slideshow__navigation'>
                                <svg style={{
                                            opacity: currentSlideIndex === 0 ? 0.5 : 1,
                                            pointerEvents: currentSlideIndex === 0 ? 'none' : 'auto',
                                             }} 
                                             width="36" 
                                             height="36" 
                                             viewBox="0 0 36 36" 
                                             fill="none" 
                                             xmlns="http://www.w3.org/2000/svg" 
                                             onClick={() => currentSlideIndex > 0 && setCurrentSlideIndex(currentSlideIndex-1)}>
                                    <circle r="17.5" transform="matrix(-1 0 0 1 18 18)" stroke="rgba(var(--color-controls)/1)"/>
                                    <path d="M14.5234 13.4961L9.81889 18.2006L14.5234 22.9052" stroke="rgba(var(--color-controls)/1)"/>
                                    <path d="M10.0234 18.2031L26.1825 18.2031" stroke="rgba(var(--color-controls)/1)"/>     
                                </svg>
                                {renderNavigationBar()}
                                <svg style={{
                                            opacity: currentSlideIndex == blockSize - 1 ? 0.5 : 1,
                                            pointerEvents: currentSlideIndex == blockSize ? 'none' : 'auto',
                                             }} 
                                            width="36" 
                                            height="36" 
                                            viewBox="0 0 36 36" 
                                            fill="none" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            onClick={() => currentSlideIndex < blockSize - 1 && setCurrentSlideIndex(currentSlideIndex+1)}>
                                    <circle cx="18" cy="18" r="17.5" stroke="rgba(var(--color-controls)/1)"/>
                                    <path d="M21.4766 13.4961L26.1811 18.2006L21.4766 22.9052" stroke="rgba(var(--color-controls)/1)"/>
                                    <path d="M25.9766 18.2031L9.81747 18.2031" stroke="rgba(var(--color-controls)/1)"/>    
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="btn--wrap">
                            <a
                                className="btn btn--fill slideshow__shop-btn"
                                href={currentSlide.slide_product_url}
                            >
                            <div className='slideshow__shop-btn-text'>
                                <p>Shop the {currentSlide?.slide_product_title}</p>
                                <p>{currentSlide?.bundle_products?.join(', ')}</p>
                                <p>{currentSlide?.slide_product_price}</p>
                            </div>
                            <div className='slideshow__shop-btn--hover-text'>SHOP NOW</div>
                            </a>
                        </div>
                </div>
                <div className='slideshow__slideBody slideshow__slideBody--mobile mobile-only'>
                    <h1 className="mb-2">
                        <div><span className='slide_index'>{currentSlideIndex + 1}</span>{currentSlide?.subheading }</div>
                            <div className='navigations mobile-only'>
                            {currentSlideIndex != 0 && 
                                <svg className="slide-prev--mobile" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={() => currentSlideIndex > 0 && setCurrentSlideIndex(currentSlideIndex-1)}>
                                    <line y1="-1" x2="16.9706" y2="-1" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 10.5703 22.5703)" stroke="#282FEE" stroke-width="2"/>
                                    <line y1="-1" x2="16.9706" y2="-1" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 10.5703 22.5703)" stroke="#282FEE" stroke-width="2"/>
                                    <line y1="-1" x2="16.9706" y2="-1" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 10.5703 22.5703)" stroke="#282FEE" stroke-width="2"/>
                                    <line y1="-1" x2="16.9706" y2="-1" transform="matrix(0.707107 0.707107 0.707107 -0.707107 12.002 0)" stroke="#282FEE" stroke-width="2"/>
                                    <line y1="-1" x2="16.9706" y2="-1" transform="matrix(0.707107 0.707107 0.707107 -0.707107 12.002 0)" stroke="#282FEE" stroke-width="2"/>
                                    <line y1="-1" x2="16.9706" y2="-1" transform="matrix(0.707107 0.707107 0.707107 -0.707107 12.002 0)" stroke="#282FEE" stroke-width="2"/>
                                </svg> 
                            }
                            {currentSlideIndex < blockSize - 1 &&     
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={() => currentSlideIndex < blockSize - 1 && setCurrentSlideIndex(currentSlideIndex+1)}>
                                    <line y1="-1" x2="16.9706" y2="-1" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 10.5703 22.5703)" stroke="#282FEE" stroke-width="2"/>
                                    <line y1="-1" x2="16.9706" y2="-1" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 10.5703 22.5703)" stroke="#282FEE" stroke-width="2"/>
                                    <line y1="-1" x2="16.9706" y2="-1" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 10.5703 22.5703)" stroke="#282FEE" stroke-width="2"/>
                                    <line y1="-1" x2="16.9706" y2="-1" transform="matrix(0.707107 0.707107 0.707107 -0.707107 12.002 0)" stroke="#282FEE" stroke-width="2"/>
                                    <line y1="-1" x2="16.9706" y2="-1" transform="matrix(0.707107 0.707107 0.707107 -0.707107 12.002 0)" stroke="#282FEE" stroke-width="2"/>
                                    <line y1="-1" x2="16.9706" y2="-1" transform="matrix(0.707107 0.707107 0.707107 -0.707107 12.002 0)" stroke="#282FEE" stroke-width="2"/>
                                </svg>
                            }
                            </div>
                    </h1>
                    
                    <p className='slideshow__subtext'>{currentSlide?.slide_sub_text }</p>
                </div>
            </>
            
        )
    }
}

export default slider