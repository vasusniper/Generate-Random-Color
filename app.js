let h1=document.querySelector('#generateValue');
let btn=document.querySelector('#btn');
let div=document.querySelector('.generate_Color_div');


btn.addEventListener('click',eventColor);


function eventColor(){
let newColor=generateColor();
    h1.innerText=newColor;
   div.style.backgroundColor=newColor;

}

function generateColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let black=Math.floor(Math.random()*255);
    let color=`RGB(${red},${green},${black})`;
    return color;
};

 





