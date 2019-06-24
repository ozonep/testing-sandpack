export const stylecss = `
body
{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
    color: #23214c;    
    background-color: black;
}

body a
{
    text-decoration: none;
    color: #23214c;
    transition: color .2s linear;
}

body a:hover
{
    color: #ee87a4;
}

.doc-loader 
{
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 99999;\t
    background-color: #fff;
}

.doc-loader td 
{       
    text-align: center;
    vertical-align: middle;
}

.doc-loader img
{
    width: 90px;
    height: 90px;        
}

.content-1170
{
    width: 1170px;    
}

.content-1170 img
{
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
}

.full-width
{
    line-height: 0;
}



/* TOP MENU */

.menu-wrapper
{    
    transition: background-color .2s linear;
    z-index: 99 !important;
    background-color: #221C5A;
    width: 100% !important;
    top: 0;
    position: fixed;
}

#header-main-menu
{    
    max-width: 1170px;
    margin: 0 auto;
    text-align: center;
}

.main-menu.sm-clean
{
    background-color: transparent;    
}

.main-menu.sm-clean a
{    
    font-size: 13px;
    line-height: 40px;
    color: #fff;
    font-weight: 400;
    transition: color .2s linear;
    text-transform: uppercase;
    letter-spacing: 0.03cm;
}

.main-menu.sm-clean .sub-menu a 
{
    font-size: 11px;
    line-height: 20px;
}

.sm-clean .current_page_item a 
{
    color: #fff !important;
}

.main-menu.sm-clean a:hover 
{
    color: #fff !important;
}

.sm-clean li.active a
{
    color: #fff !important;
}

.mob-menu
{
    display: none;
    font-weight: 700;
    font-size: 30px;
    padding-top: 15px;
    padding-bottom: 15px;
    transition: color .2s linear;
    color: #fff;
}

/* END TOP MENU */



/* GENERAL SECTION */

.section
{    
    position: relative;
    z-index: 1;
}

.section-num
{   
    overflow: hidden;    
    margin-top: 40px;
}

.section-title-holder
{
    background-color: #32DB8A;
    width: 370px;
    height: 370px;    
    z-index: 2;
}

.section-num span
{    
    margin-left: -64px;
    color: #55B286;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 180px;
    line-height: 100%;
    letter-spacing: -5px;
}

.section-title-holder h2
{
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 109px;
    width: 245px;
    word-break: break-all;
    line-height: 83px;
    margin-top: 10px;
    color: white;
    margin-left: 115px;
    text-transform: uppercase;
    letter-spacing: -3px;
    padding: 0;
}

.section-content-holder
{   
    background: #fff;
    width: 800px;
    padding: 60px 0;
}

.section-content-holder .content-wrapper
{
    padding: 0 60px;
}

.section-content-holder.right
{
    margin-left: 370px;
}

.section-content-holder.left
{
    margin-top: 370px;
}

.section-content-holder .content-title-holder
{
    overflow: hidden;
    height: 100px;
    margin-top: -60px;
    padding-bottom: 50px;
}

.section-content-holder .content-title
{
    font-family: 'Montserrat';
    font-weight: 700;
    text-align: center;
    font-size: 180px;
    line-height: 100%;
    text-transform: uppercase;
    margin-top: -75px;
    color: #221c5a;    
}

.extra-content-left
{
    width: 800px;
    color: #fff;    
    padding: 100px 0;
}

.extra-content-right
{
    width: 800px;   
    margin-left: 370px;
    color: #fff;
    padding: 100px 0;
}

.extra-content-full-width
{
    padding: 100px 0;
}

.section:last-of-type .extra-content-left, .section:last-of-type .extra-content-right, .section:last-of-type .extra-content-full-width
{
    padding-bottom: 0;
}

/* END GENERAL SECTION */



/* HOME SECTION */

.intro-page 
{
    padding-bottom: 170px;
    min-height: calc(100vh - 170px);
    background-color: #221c5a; 
    background-image:url(demo-images/background_img_01b.jpg); 
    background-repeat: repeat; 
    background-position: center top; 
    background-size: cover;
    z-index: 10;
}

.top-logo
{
    width: 160px !important;    
    padding-top: 150px;
}

h1.big-title
{
    font-family: 'Montserrat', sans-serif;
    font-size: 56px;
    font-weight: 700;
    line-height: 100%;
    padding-top: 100px;
    color: #fff;
    letter-spacing: -1px;    
    width: 95%;
    margin-left: auto;
    margin-right: auto;
}

.big-title span 
{
    display: block;
}

.title-desc
{
    font-family: 'PT Serif', serif;
    font-size: 22px;
    line-height: 26px;
    max-width: 333px; 
    margin: 0 auto;
    color: #fff;
}

.page-template-page-home .intro-page footer
{
    position: absolute;
    bottom: 0;
    width: 100%;
}

/* END HOME SECTION */



/* SERVICE SECTION */

#services
{
    background-color: #221c5a;
    z-index: 9;
}

#services .section-title-holder
{
    background-color: #32DB8A
}

#services .section-title-holder span
{
    color: #55B286;
}

.service-holder 
{
    display: inline-block;
    width: 335px;
}

.service-holder img 
{
    display: inline-block;
    width: 50px !important;
    vertical-align: top;
}

.service-content-holder 
{
    display: inline-block;
    width: 240px;
    margin-top: 55px;
    margin-left: 5px;
}

.service-title 
{
    font-family: 'Montserrat', sans-serif; 
    font-size: 24px;
    padding-bottom: 10px;
}

/* END SERVICE SECTION */



/* PORTFOLIO SECTION */

#portfolio
{
    background-color: #221C5A; 
    background-image: url("demo-images/background_img_02.jpg"); 
    background-repeat: no-repeat; 
    background-position: center top; 
    background-size: auto;
    z-index: 8;
}

#portfolio .section-title-holder
{
    background-color: rgb(255, 186, 66);
}

#portfolio .section-title-holder span
{
    color: #e3a436;
}

.page-template-page-portfolio .section
{
    padding-top: 100px;
}

.section-content-holder.portfolio-holder
{
    background-color: transparent;
    width: 800px;
    padding: 0;
}

.portfolio-holder .portfolio-load-more-holder
{
    font-family: 'Montserrat', sans-serif;    
    font-weight: 700;
    font-size: 20px;
    width: 430px;
    background-color: #E74C78;
    text-align: center;
}

.portfolio-holder .portfolio-load-more-holder img 
{
    padding-bottom: 15px;
}

.portfolio-holder .portfolio-load-more-holder a
{
    color: #fff;
    padding-top: 30px;
    padding-bottom: 15px;
}

.portfolio-holder .portfolio-load-more-holder
{    
    margin-right: 0;
    margin-left: auto;
}

.more-posts
{ 
    display: block;
}

.more-posts:hover
{
    cursor: pointer;
}

.grid 
{
    width: 800px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    display: block;
}

.grid-item 
{
    float: left;
    font-size: 0;
    line-height: 0;
    box-sizing:border-box;
    -moz-box-sizing:border-box;
    -webkit-box-sizing:border-box; 
}

.grid-item img 
{
    display: block;
    width: 100%;
    height: auto;
    max-height: none;
    max-width: none;    
}

.grid-sizer, .grid-item 
{
    width: 400px;
}

.grid-item.p_one_half
{
    width: 400px;
}

.grid-item.p_one
{
    width: 800px;
}

.portfolio-text-holder
{
    position: absolute;
    top: 30px;
    left: 30px;
    bottom: 30px;
    right: 30px;
    z-index: 1;
    font-size: 20px;
    background-color: white;
    text-align: center;   
    display: none;    
}

.portfolio-text-wrapper
{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}

.portfolio-type
{
    line-height: 100%;
    font-size: 11px;
    color: #9a9a9a;    
    padding-bottom: 20px;
}

.portfolio-type img 
{
    width: auto;
    margin-left: auto;
    margin-right: auto;
}

.portfolio-text
{
    font-family: 'Montserrat', sans-serif;    
    font-weight: 700;
    font-size: 20px;
    line-height: 18px;
    letter-spacing: 4px;
    margin-bottom: 10px;
}

.portfolio-sec-text
{
    font-family: 'Montserrat', sans-serif;    
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    color: #8e8da9;
}

.grid-item a:hover
{
    color: #191919;
}

.more-posts-portfolio img
{
    transition: all .2s linear;
    width: 100px;
    height: 100px;
}

.more-posts-portfolio img:hover
{
    cursor: pointer;  
    transform: scale(0.9);
}

div.pp_default .pp_loaderIcon
{
    display: none !important;
}

/* END PORTFOLIO SECTION*/



/* ABOUT SECTION */

#about
{
    background-color: rgb(34, 28, 90); 
    background-image: url("demo-images/background_img_03.jpg"); 
    background-repeat: no-repeat; 
    background-position: center top; 
    background-size: cover; 
    z-index: 7;
}

#about .section-title-holder
{
    background-color: #e64b77;
}

#about .section-title-holder span
{
    color: #b24564;
}

#about .section-content-holder
{
    padding-bottom: 0;
}

.member-content-holder 
{
    width: 330px;
    padding: 90px 50px 50px 50px;
    float: left;
}

.member-image-holder 
{
    width: 370px;
    float: right;
}

.member-image-holder img
{
    width: 100% !important;
}

.member-name
{
    line-height: 26px;
    font-size: 16px;
    font-weight: 700;
    padding: 0;
}

.member-position
{
    line-height: 16px;
    font-size: 14px;
    padding-bottom: 50px;
    color: #ee87a4;
    letter-spacing: 4px;
}

.member-content
{
    line-height: 26px;    
}

.image-slider-wrapper.img .image-slider li img
{
    width: 100%;
}

/* END ABOUT SECTION */


/* NEWS SECTION */

#news
{
    background-color: rgb(34, 28, 90); 
    background-image: url("demo-images/background_img_04.jpg"); 
    background-repeat: no-repeat; 
    background-position: center center; 
    background-size: cover; 
    z-index: 6;
}

.blog-item-holder
{    
    padding: 35px 0;
    border-bottom: 2px solid #f4f4f4;
}

.blog-item-holder:last-of-type 
{
    border: none;
}

.blog-item-holder .num 
{
    display: inline-block;
    width: 110px;
    font-size: 48px;
    font-weight: 900;
    color: #32db89;
}

.blog-item-holder .info 
{
    display: inline-block;
    width: 235px;
}

.blog-item-holder .info .cat-links a 
{
    color: #ee87a4;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
}

.blog-item-holder .entry-title 
{
    display: inline-block;
    width: 325px;
    padding: 0;
    vertical-align: top;
    line-height: 0;
}

.blog-holder .entry-title a
{    
    -webkit-transition: color 0.5s ease;
    -moz-transition: color 0.5s ease;
    -ms-transition: color 0.5s ease;
    -o-transition: color 0.5s ease;
    transition: color 0.5s ease;
    font-size: 18px;
    line-height: 100%;
    font-weight: 700;
    display: block;
    line-height: 20px;
}

.latest-post-bottom-text
{
    text-align: center;
    margin-top: 25px;
}

.latest-post-bottom-text a 
{
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;    
    font-size: 16px;
    line-height: 100%;    
    color: #32db89;
    letter-spacing: 5px;
    border-bottom: 2px solid;
    padding-left: 5px;
    padding-bottom: 5px; 
}

.testimonial-slider-holder
{
    max-width: 500px;
    padding-left: 50px;
}

.testimonial-text
{
    font-size: 22px;
    line-height: 40px;    
}

.testimonial-author
{
    padding-top: 90px;
    font-size: 16px;
    letter-spacing: 3px;    
}

/* END NEWS SECTION */



/* VIDEO SECTION */

#video
{
    background-color: rgb(34, 28, 90); 
    background-image: url("demo-images/background_img_06.jpg"); 
    background-repeat: repeat-x; 
    background-position: center center; 
    background-size: auto; 
    z-index: 5;
}

#video .section-title-holder
{
    background-color: rgb(255, 186, 66);
}

#video .section-title-holder span
{
    color: #e3a436;
}

#video .section-content-holder
{
    padding-bottom: 0;
}

a.video-popup-holder 
{
    position: relative;
    display: block;
}

a.video-popup-holder .thumb
{
    width: 100%;
}

img.popup-play 
{
    position: absolute;
    top: 50%;
    left: 50%;
    top: calc(50% - 60px);
    left: calc(50% - 60px);
    opacity: 0.7;
    transition: opacity .2s linear;
}

a.video-popup-holder:hover img.popup-play
{
    opacity: 1;
}
/* END VIDEO SECTION */





/* SKILLS SECTION */


#skills
{
    background-color: rgb(34, 28, 90); 
    background-image: url("demo-images/item_background_01.jpg"); 
    background-repeat: no-repeat; 
    background-position: left top; 
    background-size: 100%; 
    z-index: 4;
}

.progress_bar 
{
    margin-bottom: 15px;
}

.progress_bar_field_holder 
{
    height: 59px;
    position: relative;
    width: 100%;
    vertical-align: middle;
    overflow: hidden;
}

.progress_bar_field_holder:hover .progress_bar_title
{
    left: 10px;
    color: #fff !important;
}

.progress_bar_field_holder:hover .progress_bar_percent_text
{
    right: 10px;
    color: #fff !important;
}

.progress_bar_title
{
    position: absolute;
    top: 8px;
    z-index: 2;
    left: -11px;
    font-weight: bold;
    color: white;
    font-size: 45px;
    line-height: 100%;
    transition: color .2s linear, left .2s linear;
}

.progress_bar_percent_text
{
    position: absolute;
    right: -35px;
    top: 15px;
    z-index: 2;
    font-weight: bold;
    color: white;
    font-size: 35px;
    line-height: 100%;
    transition: color .2s linear, right .2s linear;
}

.progress_bar_field_perecent 
{
    height: 59px;    
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

/* END SKILLS SECTION */




/* CONTACT SECTION */

#contact
{
    background-color: rgb(34, 28, 90); 
    background-image: url("demo-images/background_img_05b.jpg"); 
    background-repeat: no-repeat; 
    background-position: center top; 
    background-size: auto; 
    z-index: 3;
}

#contact .section-title-holder
{
    background-color: rgb(230, 75, 119);
}

#contact .section-title-holder span
{
    color: #b24564;
}

#contact .section-content-holder
{
    padding-bottom: 0;
}

.map 
{
    height: 400px;
}

.map img
{
    max-width: none;
    max-height: none;
}

.contact-form
{
    max-width: 100%;
    width: 770px;
    margin: 0 auto;
    font-size: 22px;
    color: #9a9a9a;
}

p.custom-text-class 
{
    display: inline-block;
    padding-right: 45px;
    vertical-align: top;
}

p.custom-field-class 
{
    display: inline-block;
    margin-bottom: 60px;
}

.contact-form input[type=text], .contact-form input[type=email], .contact-form textarea
{
    color: #23214c;
    border: 0;
    border-bottom: 1px solid #1c1c1c;
    height: 28px;    
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    line-height: 25px;
    padding: 0;
}

.contact-form input[type=text]::-webkit-input-placeholder, .contact-form input[type=email]::-webkit-input-placeholder, .contact-form textarea::-webkit-input-placeholder
{
    font-family: 'Roboto', sans-serif;
    color: #23214c;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
}
.contact-form input[type=text]::-moz-placeholder, .contact-form input[type=email]::-moz-placeholder, .contact-form textarea::-moz-placeholder
{
    font-family: 'Roboto', sans-serif;
    color: #23214c;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    opacity: 1;
}
.contact-form input[type=text]:-ms-input-placeholder, .contact-form input[type=email]:-ms-input-placeholder, .contact-form textarea:-ms-input-placeholder
{
    font-family: 'Roboto', sans-serif;
    color: #23214c;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
}
.contact-form input[type=text]:-moz-placeholder, .contact-form input[type=email]:-moz-placeholder, .contact-form textarea:-moz-placeholder
{
    font-family: 'Roboto', sans-serif;
    color: #23214c;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    opacity: 1;
}

.contact-form input[type=text], .contact-form input[type=email]
{
    padding-bottom: 5px;
    margin-bottom: 25px;
}

.contact-form textarea
{
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -ms-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
    padding-top: 13px;
    overflow: hidden;
    padding-bottom: 5px;
}

.contact-form textarea:focus
{
    height: 150px;
    overflow: auto;
}

.contact-form input[name="your-name"]
{
    margin-top: 0;
    padding-top: 0;
}

.contact-form input[type=submit]
{\t
    color: #e54b76;
    display: inline-block;
    border: 2px solid #e54b76;
    text-align: center;
    padding: 12px 0px;
    cursor: pointer;
    margin-top: 30px;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    text-transform: uppercase;
    font-size: 16px;
    transition: all .2s linear;
}

.contact-form input[type=submit]:hover
{
    color: white;
    background-color: #e54b76;
}

div.contact-form-response-output
{
    margin: 0;
    font-size: 14px;
    line-height: 20px;
}

span.contact-form-not-valid-tip
{
    font-size: 10px;
}

/* END CONTACT SECTION */


/* FOOTER */

footer
{
    background-color: #221C5A;
}

.footer
{
    font-size: 16px;
    line-height: 36px;
    clear: both;
    color: #5b5881;
    text-align: center;    
    padding: 100px 0;
}

.footer-left, .footer-right
{
    width: 810px;
}

.footer-right
{
    margin-left: 370px;
}

.footer a
{
    color: #5b5881;
}

.social-footer a 
{
    margin: 0 10px;
    font-size: 20px;
}

/* END FOOTER */



/* SINGLE PORTFOLIO PAGE */

#portfolio-1
{
    background-color: #221c5a;
    background-image:url("demo-images/background_img_05b.jpg"); 
    background-repeat: no-repeat;
    background-position: center top;
    background-size: auto; 
}

#portfolio-2
{

    background-color: #221c5a;
    background-image: url(demo-images/item_background_01.jpg);
    background-repeat: no-repeat;
    background-position: left top;
    background-size: 100% auto;
}
    
.single-portfolio .menu-wrapper
{
    display: none !important;
}

.single-portfolio article
{
    padding-top: 230px;
}

.single-portfolio article .entry-content
{
    background-color: #fff;
    padding-bottom: 50px;
    font-size: 18px;
    line-height: 30px;
}

.single-portfolio .x-close
{
    top: -60px;
    right: -60px;
    background-color: #26276d;
    line-height: 0;
    font-size: 0;
    width: 60px;
    height: 60px
}

.single-portfolio .x-close img
{
    opacity: 0.4;
    transition: opacity .2s linear;
    width: 30px;
    height: 30px;
    padding-top: 15px;
    padding-left: 15px;
}

.single-portfolio .x-close:hover img
{
    opacity: 1;
}

.single-portfolio .entry-content .one
{
    padding-left: 100px;
    padding-right: 100px;
}

.single-portfolio .entry-content .one_half
{
    width: 435px;
    padding-left: 100px;
}

.single-portfolio .entry-content .one_half.last
{
    padding-left: 0;
    padding-right: 100px;
}

.single-portfolio .entry-content h1 
{
    padding: 0;
    font-size: 20px;
    line-height: 30px;
}

/* END SINGLE PORTFOLIO */


/* RESPONSIVE PART */

@media screen and (max-width: 1270px) {   

    .content-1170 
    {
        width: 960px;
    }

    .one_half
    {
        margin-right: 8%;
        float: left;
        position: relative;
        margin-bottom: 37px;
    }

    .one_half
    {
        width: 46%;
    }      

    .section-title-holder 
    {    
        width: 250px;
        height: 250px;
    }

    .section-num
    {
        margin-top: 20px;
    }

    .section-num span 
    {
        margin-left: -35px;    
        font-size: 100px;
    }

    .section-title-holder h2
    {
        font-size: 80px;
        width: 177px;        
        line-height: 66px;
        margin-top: 25px;        
        margin-left: 75px; 
    }

    .section-content-holder.right 
    {
        margin-left: 250px;
    }

    .section-content-holder.left 
    {
        margin-top: 250px;
    }

    .section-content-holder 
    {
        width: 710px;
    }

    .extra-content-left, .extra-content-right
    {
        width: 710px;
    }

    .extra-content-right
    {
        margin-left: 250px;
    }

    .service-holder 
    {    
        width: 290px;
    }

    .section-content-holder.portfolio-holder 
    {    
        width: 710px;
    }

    .grid-item.p_one, .grid
    {
        width: 710px;       
    }    

    .grid-sizer, .grid-item, .grid-item.p_one_half
    {
        width: 355px;
    }  

    .portfolio-holder .portfolio-load-more-holder 
    {
        width: 460px;
    }

    .section-content-holder .content-title 
    {    
        font-size: 140px;    
        margin-top: -56px;
    }

    .member-content-holder 
    {
        width: 275px;
        padding: 50px;
    }

    .member-image-holder 
    {
        width: 335px;
    }

    .image-slider-wrapper.team .image_slider_next
    {
        right: 260px;
    }

    .blog-item-holder .entry-title 
    {   
        width: 240px;
    } 

    .single-portfolio .entry-content .one
    {
        padding-left: 5%;
        padding-right: 5%;
    }

    .single-portfolio .entry-content .one_half 
    {
        width: 40%;
        padding-left: 5%;
        margin-right: 10%;
    }

    .single-portfolio .entry-content .one_half.last
    {        
        padding-left: 0;
        padding-right: 5%;
    }

}

@media screen and (max-width: 1100px) {    

    .single-portfolio .x-close
    {
        right: 50%;
        right: calc(50% - 30px);    
    }    

}

@media screen and (max-width: 1020px) {    

    .content-1170 
    {
        width: 100%;
    }    

    .extra-content-left, .extra-content-right
    {
        width: 100%;
        margin-left: 0;
    }    

    .single-portfolio article 
    {
        padding-top: 140px;
    }

    .one_half
    {
        width: 100%;
        float: none;
        margin-right: 0;
        margin-left: 0;
    }   

    .single-portfolio .entry-content .one_half 
    {    
        width: 90%;
        padding-left: 5%;
        padding-right: 5%;
        margin-right: 0;
    }

    .single-portfolio .entry-content .one_half.last
    {        
        padding-left: 5%;
        padding-right: 5%;
    }

    .site-content .one_half, .single-portfolio .entry-content div 
    {
        text-align: left;
    }

    .image-slider-wrapper.service a.image_slider_next 
    {
        top: -89px;
        right: 0;
    }

    .section
    {
        padding-bottom: 150px;
    }  

    .section-content-holder.right 
    {
        margin-left: 0;
    }

    .section-content-holder.left 
    {
        margin-top: 0;
    }

    .section-num
    {
        display: inline-block;
        margin-top: 10px;
    }    

    .section-num span
    {
        font-size: 50px;
        margin-left: -15px;
    }          

    .section-title-holder
    {
        width: 100%;
        height: auto;
        position: relative !important;
        top: 0 !important;
    }

    .section-title-holder h2
    {
        display: inline-block;
        width: auto;
        margin: 0;
        vertical-align: top;
        margin-top: 10px;
        font-size: 50px;
        line-height: 100%;
    }

    .section-content-holder 
    {
        width: 100%;
        padding: 30px 0;    
    }

    .section-content-holder .content-wrapper
    {
        padding: 0 5%;
    }       

    .service-holder 
    {    
        width: 100%;
        display: block;
    }

    .service-content-holder 
    {
        width: 100%;
        width: calc(100% - 75px);
        margin-bottom: 30px;
    }    

    .section-content-holder.portfolio-holder 
    {    
        width: 100%;
    }

    .grid-item.p_one, .grid
    {
        width: 100%;       
    }    

    .grid-sizer, .grid-item, .grid-item.p_one_half
    {
        width: 50%;
    }  

    .portfolio-holder .portfolio-load-more-holder 
    {
        width: 100%;
    }  

    .member-content-holder 
    {
        width: 40%;
        padding: 10% 5% 5% 5%;
    }

    .member-image-holder 
    {
        width: 50%;
    }

    .image-slider-wrapper.team .image_slider_next
    {
        right: 40%;
    }

    .blog-item-holder .entry-title 
    {
        width: 100%;
        display: block;
        padding-top: 20px;
    }

    .blog-item-holder .info
    {
        width: auto;
    }

    .section-content-holder .content-title-holder 
    {
        overflow: visible;
        height: auto;
        margin: 0;
        padding: 0;
    }

    .section-content-holder .content-title 
    {
        font-size: 19vw;
        margin-top: 0;
    }

    .testimonial-slider-holder 
    {
        width: 90%;
        padding-left: 5%;
    }    
}

@media screen and (min-width: 925px) {   
    .main-menu
    {
        display: block !important;
    }
}

@media screen and (max-width: 925px) {  

    .intro-page
    {
        min-height: 0;
    }

    .section
    {
        position: static !important;
        z-index: 0 !important;
    }

    h1.big-title
    {
        font-size: 40px;
        padding-top: 0;
    }

    h1.big-title span 
    {
        display: inline;
    }

    .title-desc 
    {    
        font-size: 19px;
        line-height: 23px;
    }

    .mob-menu
    {
        display: block;
    }

    .mob-menu:hover
    {
        cursor: pointer;
    }

    .portfolio-text-holder 
    {
        display: none !important;
        opacity: 0 !important;
    }   

    .main-menu
    {
        float: none;
        margin: 0 auto;
        text-align: center;
        max-width: 300px;
        width: 100%;
        position: relative;
        z-index: 9999;
        display: none;
    }

    .main-menu ul 
    {
        width: 12em; /* fixed width only please - you can use the "subMenusMinWidth"/"subMenusMaxWidth" script options to override this if you like */
    }

    .sm-clean a, .sm-clean a:hover, .sm-clean a:focus, .sm-clean a:active
    {
        padding-right: 0;
        padding-left: 0;
    }

    .main-menu.sm-clean a 
    {
        line-height: 24px;
    }

    .main-menu.sm-clean .sub-menu a 
    {
        font-size: 16px;
        line-height: 25px;    
        text-align: center;
    }    

    .carousel_fw_next
    {
        display: block !important;
    }

    .fw_carousel_pagination
    {
        display: none !important;
    }


}

@media screen and (max-width: 805px) {       

    .contact-form input[type=text], .contact-form input[type=email], .contact-form textarea, p.custom-field-class, #commentform #email, #commentform #author, #commentform #comment
    {
        width: 100% !important;
    }        

}


@media screen and (max-width: 650px) { 


    .member-content-holder
    {
        width: 90%;
        float: none;
    }

    .member-image-holder
    {
        width: 100%;
        float: none;
    }

    .image-slider-wrapper.team .image_slider_next
    {
        right: auto;
        left: 30px;
    }    
}


@media screen and (max-width: 350px) { 

    .section-num 
    {
        margin-top: 9px;
    }

    .section-num span 
    {
        font-size: 35px;
        margin-left: -10px;
    }

    .section-title-holder h2
    {
        margin-top: 9px;
        font-size: 35px;
    }

    .image-slider-wrapper.service a.image_slider_next 
    {
        top: -84px;
    }
}
`;