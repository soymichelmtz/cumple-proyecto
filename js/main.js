// Animación de confetti al mostrar el mensaje
function fireConfettiBurst() {
    const colors = ['#a259c6', '#e0c3fc', '#8ec5fc', '#d1c4e9', '#b39ddb', '#9575cd', '#ce93d8'];
    for(let i=0; i<40; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = (window.innerWidth/2 + (Math.random()-0.5)*200) + 'px';
        confetti.style.top = (window.innerHeight/2 + (Math.random()-0.5)*100) + 'px';
        confetti.style.zIndex = 9999;
        let piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.background = colors[Math.floor(Math.random()*colors.length)];
        piece.style.transform = `rotate(${Math.random()*360}deg)`;
        confetti.appendChild(piece);
        document.body.appendChild(confetti);
        animateConfettiBurst(confetti);
        setTimeout(() => confetti.remove(), 1200);
    }
}

function animateConfettiBurst(el) {
    let top = parseFloat(el.style.top);
    let left = parseFloat(el.style.left);
    let angle = (Math.random()-0.5)*2*Math.PI;
    let speed = 6 + Math.random()*6;
    let gravity = 0.5 + Math.random()*0.5;
    let frame = 0;
    let interval = setInterval(() => {
        frame++;
        top += Math.sin(angle) * speed + gravity * frame;
        left += Math.cos(angle) * speed;
        el.style.top = top + 'px';
        el.style.left = left + 'px';
        if(frame > 30) clearInterval(interval);
    }, 30);
}
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