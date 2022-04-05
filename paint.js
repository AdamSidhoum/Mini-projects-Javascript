var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');





canvas.width = 1925;
canvas.height = 875;


var xMousePos = 0;
var yMousePos = 0;
document.onmousemove = function(e) {
    xMousePos = e.clientX + window.pageXOffset;
    yMousePos = e.clientY + window.pageYOffset-75;
};

function aleacoco(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let boubou = 50;
function cercle(){
    ctx.beginPath();
    ctx.arc(xMousePos, yMousePos, boubou,0,2*Math.PI);
    ctx.fillStyle = aleacoco();
    ctx.fill();
    ctx.strokeStyle = fillStyle; 
    ctx.stroke();
}
canvas.addEventListener('click', (e) => {
    cercle();
})
let taille =  50;
const tailleSpan = document.querySelector('.taille')
canvas.addEventListener('wheel', (e) => {
    if (event.deltaY < 0) {
        taille = taille + 1;
        taille.value = boubou;
        boubou = boubou + 1;
        tailleSpan.textContent = taille;
    } else {
        taille = taille - 1;
        boubou = boubou - 1;
        tailleSpan.textContent = taille;
    }
});
