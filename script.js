// Countdown (27 July, 12:00 AM)
const birthday = new Date("July 27, 2026 23:59:59").getTime();
const timer = setInterval(() => {

const now = new Date().getTime();

const distance = birthday - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

if (distance < 0) {

clearInterval(timer);

document.getElementById("countdown").innerHTML =
"<h2>🎉 Happy Birthday Mere Bachaaa ❤️</h2>";

}

},1000);


// Start Button

const startBtn = document.getElementById("startBtn");

const story = document.getElementById("story");

const music = document.getElementById("music");

startBtn.addEventListener("click",()=>{

story.scrollIntoView({
behavior:"smooth"
});

music.play();

});


// Cake Button

const cakeBtn = document.getElementById("cakeBtn");

const cakeMessage = document.getElementById("cakeMessage");

cakeBtn.addEventListener("click",()=>{

cakeMessage.style.display="block";

cakeBtn.innerHTML="❤️ Cake Cut Successfully ❤️";

});


// Fade Animation

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".letter p,.gallery,.cakeSection,.ending").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="1s";

observer.observe(el);

});


// Floating Hearts

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.opacity=".8";

heart.style.pointerEvents="none";

heart.style.transition="6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="-10vh";

},100);

setTimeout(()=>{

heart.remove();

},6000);

},1200);