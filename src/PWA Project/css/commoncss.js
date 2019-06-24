export const commoncss = `
a.wp-ver
{
    color: red !important;
    font-weight: 700 !important;
}
.block
{
    display: block;
}
.hidden
{
    display: none;
}
.clear
{
    clear: both;
}
.left
{
    float: left;
}
.right
{
    float: right;
}
.line-height
{
    line-height: 0;
}
.clear-right
{
    clear: right;
}
.clear-left
{
    clear: left;
}
.center-relative
{
    margin-left: auto;
    margin-right: auto;
}
.center-absolute
{
    left: 50%;
}
.center-text
{
    text-align: center !important;
}
.text-left
{
    text-align: left;
}
.text-right
{
    text-align: right;
}
.absolute
{
    position: absolute;
}
.fixed
{
    position: fixed;
}
.relative
{
    position: relative;
}
.margin-0, .margin-0 img
{
    margin: 0 !important;
    line-height: 0;
}
.top-0
{
    margin-top: 0 !important;
}
.top-5
{
    margin-top: 5px !important;\t
}
.top-10
{
    margin-top: 10px;\t
}
.top-15
{
    margin-top: 15px;\t
}
.top-20
{
    margin-top: 20px;
}
.top-25
{
    margin-top: 25px;\t
}
.top-30
{
    margin-top: 30px;\t
}
.top-50
{
    margin-top: 50px;\t
}
.top-60
{
    margin-top: 60px;\t
}
.top-70
{
    margin-top: 70px;\t
}
.top-75
{
    margin-top: 75px;\t
}
.top-80
{
    margin-top: 80px;
}
.top-100
{
    margin-top: 100px;\t
}
.top-105
{
    margin-top: 105px;\t
}
.top-120
{
    margin-top: 120px;
}
.top-150
{
    margin-top: 150px;\t
}
.top-200
{
    margin-top: 200px;\t
}
.top-negative-30
{
    margin-top: -30px;
}
.left-35
{
    margin-left:35px;
}
.right-35
{
    margin-right:35px;
}
.bottom-0
{
    margin-bottom: 0 !important;
}
.bottom-10
{
    margin-bottom: 10px !important;
}
.bottom-20
{
    margin-bottom: 20px !important;
}
.bottom-25
{
    margin-bottom: 25px !important;
}
.bottom-30
{
    margin-bottom: 30px !important;
}
.bottom-50
{
    margin-bottom: 50px !important;
}
.bottom-100
{
    margin-bottom: 100px !important;
}
.bottom-150
{
    margin-bottom: 150px !important;
}
.bottom-200
{
    margin-bottom: 200px !important;
}
.width-25
{
    width: 25%;
}
.width-50
{
    width: 50%;
}
.width-75
{
    width: 75%;
}
.width-85
{
    width: 85%;
}
.width-100
{
    width: 100%;
}
.sticky
{
    font-size: 100%;
}
blockquote
{
    font-family: 'Montserrat', sans-serif;
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 20px;
    line-height: 35px;
    color: #e64b77;
    font-weight: 400;
    position: relative;
    z-index: 2;
}
blockquote.inline-blockquote
{
    width: 395px;
    float: left;
    margin-left: -40px;
    margin-right: 40px;
    margin-top: 70px;

}
blockquote p
{
    position: relative;
    z-index: 2;
}
.wrap-blockquote
{
    display: inline;
}
address
{
    font-size: 32px;
    line-height: 50px;
    font-style: normal;
}
iframe
{
    width: 100%;
}
a.button
{
    display: inline-block;
    color: #e54b76;
    border: 2px solid #e54b76;
    text-align: center;
    padding-bottom: 15px;
    padding-top: 12px;
    padding-left: 50px;
    padding-right: 50px;
    cursor: pointer;
    margin-bottom: 25px;
    vertical-align: middle;
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    transition: all .2s linear;
}
a.button:active
{
    position: relative;
    top: 1px;\t
}
a.button:hover
{
    color: white;
    background-color: #e54b76;
}

h1,h2,h3,h4,h5,h6
{
    padding: 20px 0;
}
h1
{
    font-size: 38px;
    line-height: 38px;    
}
h2
{
    font-size: 34px;    
    line-height: 34px;    
}
h3
{
    font-size: 32px;  
    line-height: 32px;    
}
h4
{
    font-size: 30px;    
}
h5
{
    font-size: 28px;   
}
h6
{
    font-size: 26px;    
}
em
{
    font-style: italic;
}
ol
{
    list-style-type: decimal;
}
pre
{
    word-wrap: break-word;
}
.single-content table, .single-content th, .single-content td, .page-content table, .page-content th, .page-content td
{
    border:1px solid black;
    padding: 10px;
    vertical-align: middle;
}
sup
{
    vertical-align: super;
    font-size: smaller;
}
sub
{
    vertical-align: sub;
    font-size: smaller;
}
.single-content ol
{
    display: block;
    list-style-type: decimal;
    margin: 0 0 14px 17px;
}
.single-content ul
{
    display: block;
    list-style-type: disc;
    margin: 0 0 14px 17px;
}

/* COLUMNS */

.one,  .one_half,  .one_third,  .two_third,  .three_fourth, 
.one_fourth{
    margin-right: 100px;
    float: left;
    position: relative;
    margin-bottom: 30px;
}
.last{
    margin-right: 0 !important;
    clear: right;
}
.one{
    float: none;
    display: block;
    clear: both;
    margin-right: 0;
}
.one_half{
    width: 290px;
}

.one img,  .one_half img,  .one_third img,  .two_third img, 
.three_fourth img,  .one_fourth img{
    max-width: 100%;
    height: auto;
    max-height: 100%;
    width: auto;\t
}

.one.margin-0 img, .one_half.margin-0 img, .one_third.margin-0 img, .two_third.margin-0 img, 
.one_fourth.margin-0 img, .three_fourth.margin-0 img{
    width: 100% !important;
}

.one.margin-0
{
    width: 100% !important;
    padding: 0 !important;
}

.one_half.margin-0{
    width: 50% !important;
    float: left !important;
    padding: 0 !important;
}

.one_third.margin-0{
    width: 33.333333333%;
    float: left !important;
    padding: 0 !important;
}
.two_third.margin-0{
    width: 66.666666666%;
    float: left !important;
    padding: 0 !important;
}
.one_fourth.margin-0{
    width: 25%;
    float: left !important;
    padding: 0 !important;
}
.three_fourth.margin-0{
    width: 75%;
    float: left !important;
    padding: 0 !important;
}

/* MENU */

/* Mobile first layout SmartMenus Core CSS (it's not recommended editing these rules)
   You need this once per page no matter how many menu trees or different themes you use.
-------------------------------------------------------------------------------------------*/

.sm,.sm ul,.sm li{display:block;list-style:none;margin:0;padding:0;line-height:normal;direction:ltr;-webkit-tap-highlight-color:rgba(0,0,0,0);}
.sm-rtl,.sm-rtl ul,.sm-rtl li{direction:rtl;text-align:right;}
.sm>li>h1,.sm>li>h2,.sm>li>h3,.sm>li>h4,.sm>li>h5,.sm>li>h6{margin:0;padding:0;}
.sm ul{display:none;}
.sm li,.sm a{position:relative;}
.sm a{display:block;}
.sm a.disabled{cursor:not-allowed;}
.sm:after{content:"\\00a0";display:block;height:0;font:0px/0 serif;clear:both;visibility:hidden;overflow:hidden;}
.sm,.sm *,.sm *:before,.sm *:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}




/* WP DEFAULT CLASSES */

.alignnone {
    margin: 5px 20px 20px 0;
}

.aligncenter,
div.aligncenter {
    display: block;
    margin: 5px auto 5px auto;
}

.alignright {
    float:right;
    margin: 5px 0 20px 20px;
}

.alignleft {
    float: left;
    margin: 5px 20px 20px 0;
}

.aligncenter 
{
    display: block;
    margin: 5px auto 5px auto;
}

a img.alignright 
{
    float: right;
    margin: 5px 0 20px 20px;
}

a img.alignnone 
{
    margin: 20px 0px;
}

a img.alignleft 
{
    float: left;
    margin: 5px 20px 20px 0;
}

a img.aligncenter 
{
    display: block;
    margin-left: auto;
    margin-right: auto
}

.wp-caption 
{
    max-width: 100%;
}

.wp-caption.alignnone 
{
    margin: 20px 0px;
}

.wp-caption.alignleft 
{
    margin: 5px 20px 20px 0;
    text-align: left;
}

.wp-caption.alignright 
{
    margin: 5px 0 20px 20px;
    text-align: right;
}

.wp-caption img 
{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}

.wp-caption p.wp-caption-text 
{
    font-family: 'Montserrat', sans-serif;    
    font-size: 18px;
    color: #191919;
    padding-left: 100px;
    padding-top: 10px;
    padding-bottom: 30px;
}
.gallery-caption
{
    font-size: 100%;
}
.bypostauthor
{
    font-size: 100%;
}
/* Text meant only for screen readers. */
.screen-reader-text {
    clip: rect(1px, 1px, 1px, 1px);
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
}

.screen-reader-text:focus {
    background-color: #f1f1f1;
    border-radius: 3px;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
    clip: auto !important;
    color: #21759b;
    display: block;
    font-size: 14px;
    font-size: 0.875rem;
    font-weight: bold;
    height: auto;
    left: 5px;
    line-height: normal;
    padding: 15px 23px 14px;
    text-decoration: none;
    top: 5px;
    width: auto;
    z-index: 100000; /* Above WP toolbar. */
}
`;