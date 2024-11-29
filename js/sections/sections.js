import hello from "./hello";
import factuals from "./factuals";
import variantOptions from './variantOptions';
import countUp from "../components/count-up";
import slider from "./slider";
import handleVideoOverlay from "JsComponents/handle-video-overlay";

document.addEventListener('DOMContentLoaded', () => {
    slider();
    hello();
    factuals();
    variantOptions();
    countUp();
    handleVideoOverlay();
}); 