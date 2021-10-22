let ball = document.getElementById("float-circle");

// Write your code below
function up() {
    ball.style.bottom = "800px";

    ball.style.backgroundColor = "gold";
}

function down() {
    ball.style.bottom = "50px";
    ball.style.backgroundColor = "cyan";
    ball.timestamp;
}
document.onkeydown = up;

document.onkeyup = down;