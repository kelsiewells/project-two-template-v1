// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  




var scale = Math.min( 
  availableWidth / contentWidth, 
  availableHeight / contentHeight 
);

var pageWidth, pageHeight;

var basePage = {
  width: 800,
  height: 600,
  scale: 1,
  scaleX: 1,
  scaleY: 1
};

$(function(){
  var $page = $('.grid-item');
  
  getPageSize();
  scalePages($page, pageWidth, pageHeight);
  
  //using underscore to delay resize method till finished resizing window
  $(window).resize(_.debounce(function () {
    getPageSize();            
    scalePages($page, pageWidth, pageHeight);
  }, 150));
  

function getPageSize() {
  pageHeight = $('#grid-container').height();
  pageWidth = $('#grid-container').width();
}

function scalePages(page, maxWidth, maxHeight) {            
  var scaleX = 1, scaleY = 1;                      
  scaleX = maxWidth / basePage.width;
  scaleY = maxHeight / basePage.height;
  basePage.scaleX = scaleX;
  basePage.scaleY = scaleY;
  basePage.scale = (scaleX > scaleY) ? scaleY : scaleX;

  var newLeftPos = Math.abs(Math.floor(((basePage.width * basePage.scale) - maxWidth)/2));
  var newTopPos = Math.abs(Math.floor(((basePage.height * basePage.scale) - maxHeight)/2));

  page.attr('style', '-webkit-transform:scale(' + basePage.scale + ');left:' + newLeftPos + 'px;top:' + newTopPos + 'px;');
}
});









// End of Your Code . Don't delete that line below!!
});