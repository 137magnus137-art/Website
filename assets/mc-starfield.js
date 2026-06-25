// mc-starfield.js - lightweight animated background (simplified)
(function(){
  function init(){
    const canvas = document.querySelector('.mc-starfield');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight}
    window.addEventListener('resize',resize);resize();
    const stars=[];for(let i=0;i<150;i++)stars.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.2});
    function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle='rgba(255,255,255,0.8)';for(const s of stars){ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();s.x-=0.2;if(s.x<-2)s.x=canvas.width+2;}}
    setInterval(draw,50);
  }
  document.addEventListener('DOMContentLoaded',init);
})();
