const matrixElement = document.getElementById("matrix");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+";
let matrixStream = "";

function generateMatrix() {
    for (let i = 0; i < 70; i++) {
        matrixStream += characters[Math.floor(Math.random() * characters.length)];
    }
    matrixStream = matrixStream.substring(1);
    matrixElement.textContent = matrixStream;
    setTimeout(generateMatrix, 100);
}

generateMatrix();
