var c1=document.getElementById('color1');
var c2=document.getElementById('color2');
var body=document.getElementById("bodi");
var h3=document.getElementById("colorcodes");

console.log(c1.value + " " + c2.value);

function setgradient(){
    body.style.background = "linear-gradient(to right,"+c1.value+","+c2.value+")";
    var codes=c1.value+"  "+c2.value;
    h3.textContent=codes;
};
c1.addEventListener("input",setgradient);
c2.addEventListener("input",setgradient);