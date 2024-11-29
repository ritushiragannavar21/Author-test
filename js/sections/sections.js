import hello from "./hello";
import factuals from "./factuals";
import variantOptions from './variantOptions';
import countUp from "../components/count-up";
import handleVideoOverlay from "JsComponents/handle-video-overlay";

document.addEventListener('DOMContentLoaded', () => {
    hello();
    factuals();
    variantOptions();
    countUp();
    handleVideoOverlay();
}); 