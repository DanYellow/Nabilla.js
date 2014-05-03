document.getElementsByTagName('head')[0].innerHTML = "";

var divs = document.getElementsByTagName("div");
for(var i = 0; i < divs.length; i++){
   //do something to each div like
   divs[i].className += ' boobs';
}
