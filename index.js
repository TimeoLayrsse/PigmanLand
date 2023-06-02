let img_index = 0
let tab = ["Images/1.webp", "Images/2.avif", "Images/3.jpg", "Images/4.jpg"]

function previous_image() {
    img_index--;
    if (img_index < 0) {
        img_index = tab.length-1
    }
    let img_div = document.getElementById("img_diapo")
    img_div.src = tab[img_index]
}

function next_image() {
    img_index++;
    img_index%=tab.length
    let img_div = document.getElementById("img_diapo")
    img_div.src = tab[img_index]
}


let interval_function = null;
let interval_delay = 5000

function auto() {
    interval_function = setInterval(next_image, interval_delay);
}

function stop() {
    clearInterval(interval_function);
}

function change_delay() {
    let delay = document.getElementById("input").value;
    interval_delay = delay;
    stop()
    auto()
}