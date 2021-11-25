// get color input value
var color = {
    red: 100,
    green: 100,
    blue: 100,
    alpha: 1
}
const inputs = document.getElementsByTagName("input");
const colorPreview = document.getElementById("colorPreview");

function setBackground() {
    colorPreview.style.backgroundColor = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
    colorPreview.innerHTML = `<h1>rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})</h1>`;
}

setBackground();
for (const iterator of inputs) {
    iterator.addEventListener("change", function () {
        color[iterator.id] = iterator.value;
        setBackground();
    });
}

