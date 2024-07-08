// 



var n=Math.random();
n*=6 ;
var randomNumber1=Math.floor(n)+1;

var leftimage=document.querySelector(".img1");

leftimage.setAttribute("src","images/dice"+randomNumber1+".png");



// /////////////////////////////////////////////////////////////////////////////////////

var n2=Math.random();
n2*=6 ;
var randomNumber2=Math.floor(n2)+1;

var rightimage=document.querySelector(".img2");

rightimage.setAttribute("src","images/dice"+randomNumber2+".png");

// /////////////////////////////////////////////////////////////////////////////////////


var caption=document.querySelector("h1");

if(randomNumber1===randomNumber2){

    caption.innerText="🚩 Draw! 🚩";

}

else if(randomNumber1>randomNumber2){

    caption.innerText="🚩 Player 1 Wins!";

}

else if(randomNumber1<randomNumber2){

    caption.innerText="Player 2 Wins! 🚩";

}





