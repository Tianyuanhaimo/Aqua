window.addEventListener("scroll",function() {
    var navigation = document.querySelector("#main-menu");
    navigation.classList.toggle("scroll", window.scrollY > 0); 
})

let purification = document.querySelectorAll("#purification, .p-window2 .close-button a");
for(let button of purification) {
    button.addEventListener("click", function(event) {
    document.querySelector("body").classList.toggle("show-p-window1");
    event.preventDefault();
    });
}

let nature = document.querySelectorAll("#nature, .n-window2 .close-button a");
for(let button of nature) {
    button.addEventListener("click", function(event) {
    document.querySelector("body").classList.toggle("show-n-window1");
    event.preventDefault();
    });
}

let godRequiem = document.querySelectorAll("#godRequiem, .g-window2 .close-button a");
for(let button of godRequiem) {
    button.addEventListener("click", function(event) {
    document.querySelector("body").classList.toggle("show-g-window1");
    event.preventDefault();
    });
}