const colors = ['#a259c6', '#e0c3fc', '#8ec5fc', '#d1c4e9', '#b39ddb', '#9575cd', '#ce93d8'];
for(let i=0; i<150; i++) {
    let confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = Math.random() * window.innerHeight + 'px';
    let piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.background = colors[Math.floor(Math.random()*colors.length)];
    piece.style.transform = `rotate(${Math.random()*360}deg)`;
    confetti.appendChild(piece);
    document.body.appendChild(confetti);
    animateConfetti(confetti);
}
function animateConfetti(el) {
    let top = parseFloat(el.style.top);
    let speed = 1 + Math.random()*2;
    setInterval(() => {
        top += speed;
        if(top > window.innerHeight) top = -20;
        el.style.top = top + 'px';
    }, 20);
}
for(let i=0; i<30; i++) {
    let serp = document.createElement('canvas');
    serp.className = 'serpentine';
    serp.width = 40;
    serp.height = 40;
    serp.style.left = Math.random() * window.innerWidth + 'px';
    serp.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(serp);
    drawSerpentine(serp, colors[Math.floor(Math.random()*colors.length)]);
}
function drawSerpentine(canvas, color) {
    let ctx = canvas.getContext('2d');
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(5, 5);
    for(let i=0; i<30; i+=5) {
        ctx.lineTo(5+i, 5+Math.sin(i/5)*15);
    }
    ctx.stroke();
}