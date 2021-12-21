jQuery(document).ready(function ($) {
//When we click on thumb img
$('.thumb li', '.slideshow').click(function() {
    
   var
       //SlideShow
       sshow = $(this).closest('.slideshow'),
       //Big
       big = sshow.find('.big'),
       //thumb
       thumb = sshow.find('.thumb'),
       //Get index
       indx = thumb.find('li').index(this),
       //Current index
       currentIndx = big.find('li').index(big.find('li:visible'));
   
   //If currentIndx is same as clicked indx don't do anything
   if(currentIndx == indx) {
       return;
   }
   
   big
       //Fadeout current image
       .find('li:visible').fadeOut().end()
       //Fadein new image
       .find('li:eq(' + indx + ')').fadeIn();
});

//When we click on any li inside controls section
$('.controls li').click(function() {
   var
       //Slideshow
       sshow = $(this).closest('.slideshow'),
       //Increment
       incr = $(this).hasClass('prev') ? -1 : 1,
       //Current Index
       currentIndx = sshow.find('.big li').index(sshow.find('.big li:visible')),
       //Final Index
       finalIndx = currentIndx + incr;
   
   //Check ranges
   finalIndx = (finalIndx >= 4) ? 0 : ( (finalIndx < 0) ? 3 : finalIndx);
   
   //Now trigger click event on respective image in nav
   sshow.find('.thumb li:eq(' + finalIndx + ')').trigger('click');
});


});

