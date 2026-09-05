let count = 0;

function increase() {
    count = count + 1;
    document.getElementById("count").textContent = count;
}

function decrease() {
    count = count - 1;
    document.getElementById("count").textContent = count;
}