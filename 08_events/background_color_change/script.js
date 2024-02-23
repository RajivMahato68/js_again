// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i= 0; i< 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let intervalId;
const startChnagingColor = function(){

    if(!intervalId){
        intervalId = setInterval(changeBg, 1000)
    }

    function changeBg(){
        document.body.style.backgroundColor = randomColor();
    }
}
const stopChnagingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector("#start").addEventListener('click', startChnagingColor)
document.querySelector("#stop").addEventListener('click', stopChnagingColor)

