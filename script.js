var img = document.querySelector('#doggo');
var onloadUpdate = document.querySelector('#update');

var onloadCount = 0;
img.onload = function loaded() {
   console.info("FIRE THE ONLOAD!");
   onloadCount = onloadCount +1;
   console.info(onloadCount);
   onloadUpdate.innerHTML = onloadCount;
   if(onloadCount == 1) {
    document.body.style.backgroundImage = "url('error.jpg')";
    img.src = "doggo.jpg";
    
   }
   else if(onloadCount == 2) {
    document.body.style.backgroundImage = "url('success.jpg')";
    
   }
   
};

img.src = "doggo.jpg";


// Some where late in the code I set the URL to the same thing again
//img.addEventListener("load", function () {
    
  //  img.src = "http://tny.im/bmc";
    


