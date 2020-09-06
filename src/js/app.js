import 'bootstrap';
import {enableSmoothScrolling} from "./smooth-scrolling";
import {enableImagesScrolling} from "./images-scrolling";

$(document).ready(function () {
    console.log('Webpack loaded!');
    enableSmoothScrolling();
    enableImagesScrolling();
});
