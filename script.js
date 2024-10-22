let count = 0;

function contar() {
    count++;

    document.getElementById('contator').textContent = count;

    if (count >= 40) {
        document.getElementById('contator').style.color = "red";
    } else if (count >= 30) {
        document.getElementById('contator').style.color = "orange";
    } else if (count >= 20) {
        document.getElementById('contator').style.color = "yellow";
    } else if (count >= 10) {
        document.getElementById('contator').style.color = "green";
    } else {
        document.getElementById('contator').style.color = "white";
    }
}

function vaciar(){
    document.getElementById('contator').textContent = 0;
    count = 0;
}