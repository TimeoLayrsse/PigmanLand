let img_index = 0
let tab = ["src/ImageIndex/img1.png", "src/ImageIndex/img2.png", "src/ImageIndex/img3.png"]

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