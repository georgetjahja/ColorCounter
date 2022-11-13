let redadd = document.querySelector("#redadd");
// let redsub = document.querySelector("#redsub");
let blueadd = document.querySelector("#blueadd");
// let bluesub = document.querySelector("#bluesub");
let whiteadd = document.querySelector("#whiteadd");
// let whitesub = document.querySelector("#whitesub");
let yellowadd = document.querySelector("#yellowadd");
// let yellowsub = document.querySelector("#yellowsub");
let reset = document.querySelector("#reset");


redadd.addEventListener("click", function(){
    let red_output = document.querySelector("#redoutput")
    let result = Number(red_output.innerText) + 1;

    red_output.innerText = result;
});

// redsub.addEventListener("click", function(){
//     let red_output = document.querySelector("#redoutput")
//     let result = Number(red_output.innerText) - 1;

//     red_output.innerText = result;
// });

blueadd.addEventListener("click", function(){
    let blue_output = document.querySelector("#blueoutput")
    let result = Number(blue_output.innerText) + 1;

    blue_output.innerText = result;
});

// bluesub.addEventListener("click", function(){
//     let blue_output = document.querySelector("#blueoutput")
//     let result = Number(blue_output.innerText) - 1;

//     blue_output.innerText = result;
// });

whiteadd.addEventListener("click", function(){
    let white_output = document.querySelector("#whiteoutput")
    let result = Number(white_output.innerText) + 1;

    white_output.innerText = result;
});

// whitesub.addEventListener("click", function(){
//     let white_output = document.querySelector("#whiteoutput")
//     let result = Number(white_output.innerText) - 1;

//     white_output.innerText = result;
// });

yellowadd.addEventListener("click", function(){
    let yellow_output = document.querySelector("#yellowoutput")
    let result = Number(yellow_output.innerText) + 1;

    yellow_output.innerText = result;
});

// yellowsub.addEventListener("click", function(){
//     let yellow_output = document.querySelector("#yellowoutput")
//     let result = Number(yellow_output.innerText) - 1;

//     yellow_output.innerText = result;
// });

reset.addEventListener("click",function(){
    let red_output = document.querySelector("#redoutput")
    let blue_output = document.querySelector("#blueoutput")
    let white_output = document.querySelector("#whiteoutput")
    let yellow_output = document.querySelector("#yellowoutput")

    let result = 0;

    red_output.innerText = result;
    blue_output.innerText = result;
    white_output.innerText = result;
    yellow_output.innerText = result;
})

setInterval(function(){
    let red_output = document.querySelector("#redoutput")
    let blue_output = document.querySelector("#blueoutput")
    let white_output = document.querySelector("#whiteoutput")
    let yellow_output = document.querySelector("#yellowoutput")

    let image = document.getElementById('image');
    let images = ['red.png', 'blue.png', 'white.png', 'yellow.png'];
    if (Number(red_output) > Number(blue_output) && Number(red_output) > Number(yellow_output) && Number(red_output) > Number(white_output))
    {
        image.src = images[1];
    }
    else if (Number(blue_output) > Number(white_output) && Number(blue_output) > Number(yellow_output))
    {
        image.src = images[2];
    }
    else if (Number(white_output) > Number(yellow_output))
    {
        image.src = images[3];
    }
    else
    {
        image.src = images[4];
    }

}, 200);