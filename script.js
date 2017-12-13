var img = document.querySelector('#doggo');
var onloadUpdate = document.querySelector('#update');

var onloadCount = 0;
img.onload = function loaded() {
   console.info("FIRE THE ONLOAD!");
   onloadCount = onloadCount +1;
   console.info(onloadCount);
   onloadUpdate.innerHTML = onloadCount;
   if(onloadCount == 1) {
    document.body.style.backgroundImage = "url('https://wallscover.com/images/error-wallpaper-4.jpg')";
    
   }
   else if(onloadCount == 2) {
    document.body.style.backgroundImage = "url('http://hd.wallpaperswide.com/thumbs/happy_sun-t2.jpg')";
    
   }
   
};

img.src = "http://tny.im/bmc";


// Some where late in the code I set the URL to the same thing again
img.src = "http://tny.im/bmc";

