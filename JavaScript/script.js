let area=document.querySelector(".area");
let myBall=document.querySelector(".ball");
let speed=40;
let areaWidth=1140;
let areaHeight=500;
let ballWidth=40;
let ballHeight=40;
let growWidth=3;
let growHeigth=3;
let dotArray=[];
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
    for(var i=0;i<dotArray.length;i++){
        if(dotArray[i].offsetLeft>myBall.offsetLeft && dotArray[i].offsetLeft<(myBall.offsetLeft+ballWidth)){
            if (dotArray[i].offsetTop>myBall.offsetTop && dotArray[i].offsetTop<(myBall.offsetTop+ballHeight)) {
                dotArray[i].style.display="none";
                myBall.style.width=`${ballWidth+growWidth}px`;
                myBall.style.height=`${ballHeight+growHeigth}px`;
                ballWidth+=3;
                ballHeight+=3;         
            }
        }
    }
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
function randomNumberWidth() {
    return Math.random()*1000;
}
function randomNumberHeight() {
    return Math.random()*400;
}
function createDots() {
    let dot=document.createElement("span");
    dot.className="dot";
    dot.style.left=`${randomNumberWidth()}px`;
    dot.style.top=`${randomNumberHeight()}px`;
    area.appendChild(dot);
    dotArray.push(dot);
}
for(let i=0;i<50;i++){
    createDots();
}
