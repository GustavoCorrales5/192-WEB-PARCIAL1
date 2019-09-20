var divimage = document.querySelector('.principal__image');
var range=document.querySelector('.principal__slider');
var url=document.querySelector('.principal__url');


setInterval(changeImage,50);

function changeImage(){ 
    var imgurl=url.value;
    divimage.src=imgurl;
}

range.onchange = function() {
    var angle = parseInt(range.value);
   
    divimage.style = 'transform: rotate(' + angle + 'deg)';
};






