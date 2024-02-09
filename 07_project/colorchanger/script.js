const buttons = document.querySelectorAll('.button')
// console.log(buttons)
const body = document.querySelector("body")

buttons.forEach(function(button){
    // console.log(button)
    button.addEventListener('click', function(e){
        body.style.backgroundColor = "initial";
        body.style.backgroundImage = "none";
        body.style.backgroundSize = "initial";
        body.style.backgroundPosition = "initial";
        // console.log(e)
        // console.log(e.target)
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
            body.style.color = "blue";
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
            body.style.color = "grey";
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
            body.style.color = "white";
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
            body.style.color = "red";
        }
        if(e.target.id === 'purple'){
            body.style.backgroundImage = "url(cherry.jpg)";
            body.style.backgroundSize = "cover";
            body.style.backgroundSize = "contain";
            body.style.backgroundPosition = "center";
            body.style.color = "yellow";
        }
    })
})
   