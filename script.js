let toggled = false;

let hTag = document.getElementsByTagName("h1")[0];
let bodyTag =  document.getElementsByTagName("body")[0];
let circle = document.getElementById("circle");

document.getElementById("toggle_container").onclick = function(){
    if(!toggled){
        hTag.classList.add("color-white");
        bodyTag.classList.add("bck-color-black");
        circle.classList.add("dark-mode")

        toggled = true;


    } else {
        hTag.classList.remove("color-white");
        bodyTag.classList.remove("bck-color-black");
        circle.classList.remove("dark-mode")

        toggled= false;
    }
}



// let toggle = false;

// document.getElementById("toggle_container").onclick = function() {
//     let hTag = document.getElementsByTagName("h1")[0];
//     let bodyTag = document.body;
//     let circle = document.getElementById("circle");

//     if (toggle) {
//         hTag.classList.remove("color-white");
//         bodyTag.classList.remove("bck-color-black");
//         circle.classList.remove("dark-mode");
//     } else {
//         hTag.classList.add("color-white");
//         bodyTag.classList.add("bck-color-black");
//         circle.classList.add("dark-mode");
//     }

//     toggle = !toggle;
// };
