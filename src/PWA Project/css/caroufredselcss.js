export const caroufredselcss = `
.list_carousel.responsive {\t
    margin-left: 0;
    width: 91%;
}
.list_carousel ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: block;
}
.list_carousel li {
    text-align: center;\t\t
    padding: 0;
    display: block;
    float: left;
    position: relative;
}\t

.image-slider-wrapper.service a.image_slider_next{background-image: url(../images/navigation_arrows_right.svg); width: 50px; height: 50px; z-index: 2; position: absolute; top: -150px; }
.image-slider-wrapper.img a.image_slider_next{background-image: url(../images/navigation_arrows_right.svg); width: 50px; height: 50px; z-index: 2; position: absolute; top: 30px; left: 30px;}
.carousel_text_next{background-image: url(../images/navigation_arrows_right.svg); width: 50px; height: 50px; margin-top: 50px; display: block !important; }
a.image_slider_next:hover, .carousel_text_next:hover, .carousel_fw_next:hover {background-position: 0 -50px;}
.carousel_pagination {margin-top: 50px; margin-bottom: 50px; margin-left: 160px;}
.carousel_pagination a {margin: 0 0 0 5px; float: left; transition: background-color .2s linear}
.carousel_pagination a:first-child {margin: 0;}
.carousel_pagination a {width: 18px; height: 18px; border-radius: 90%; display: block; cursor: pointer; text-indent: -9999px;}
.caroufredsel_wrapper{z-index: 1 !important; margin-top: 0 !important; margin-left: 0 !important;}
.fw_carousel_pagination {text-align: center; transition: background-color .2s linear;  margin-top: 80px;}
.fw_carousel_pagination a {text-indent: -9999px; border: 5px solid #fff; width: 25px; height: 25px; border-radius: 90%; margin: 0 10px; display: inline-block;}
.fw_carousel_pagination a.selected {background-color: #fff;}
li.fw-slide {margin: 0 10px; transition: opacity .2s linear;}
li.fw-slide img  {width: auto; height: auto; max-width: 180px; display: block; margin-left: auto; margin-right: auto;}
.fw-slide-text {color: #fff; font-size: 18px;}
.image-slider-wrapper.team .image_slider_next {background-image: url(../images/navigation_arrows_right.svg); width: 50px; height: 50px; z-index: 2; position: absolute; right: 300px; bottom: 30px;}
.carousel_fw_next {background-image: url(../images/navigation_arrows_right.svg); width: 50px; height: 50px; z-index: 2; display: none !important; margin-left: auto;  margin-right: auto; margin-top: 50px;}
`;