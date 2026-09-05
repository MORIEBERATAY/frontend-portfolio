function addToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    const display = document.getElementById("display");

    display.value = eval(display.value);
}function backspace() {
    const display = document.getElementById("display");

    display.value = display.value.slice(0, -1);
}s