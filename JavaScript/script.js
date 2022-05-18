let area=document.querySelector(".area");
let myBall=document.querySelector(".ball");
let myp=document.querySelector("p");
let speed=40;
let areaWidth=1140;
let areaHeight=500;
myBall.addEventListener("mouseover",function(){
    if(this.style.backgroundColor=="red"){
        this.style.backgroundColor="blue";
    }
    else{
        this.style.backgroundColor="red";
    }
}
)
window.addEventListener("keyup",function(event){
    switch(event.keyCode){
        case 37:
            ballLeft();
            break;
        case 38:
            ballTop();
            break;
        case 39:
            ballRight();
            break;
        case 40:
            ballDown();
            break;
        default:
            break;
    }
}
)

function ballLeft() {
    let ballLeft = myBall.offsetLeft;
    if (ballLeft>=speed) {
        myBall.style.left = `${ballLeft - speed}px`;   
    }
}
  
function ballRight() {
    let ballLeft = myBall.offsetLeft;
    if(ballLeft<=areaWidth-(speed*2)){
        myBall.style.left = `${ballLeft + speed}px`;
    }
}
  
function ballTop() {
    let ballTop = myBall.offsetTop;
    if (ballTop>=speed) {
        myBall.style.top = `${ballTop - speed}px`;   
    }
}
  
function ballDown() {
    let ballTop = myBall.offsetTop;
    if (ballTop<areaHeight-(speed*2)) {
        myBall.style.top = `${ballTop + speed}px`;   
    }
}
window.addEventListener("keyup",function(ev){
    if (ev.keyCode==13) {

    }
}
)