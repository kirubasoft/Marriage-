
// Wedding Invitation Animation
window.addEventListener("load", () => {

    // Auto Scroll Scenes
    setTimeout(() => {
        document.querySelector(".details")
            .scrollIntoView({
                behavior: "smooth"
            });
    }, 9000);

    setTimeout(() => {
        document.querySelector(".ending")
            .scrollIntoView({
                behavior: "smooth"
            });
    }, 18000);

});

// Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random()*100+"vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20+Math.random()*25)+"px";
    heart.style.pointerEvents="none";
    heart.style.zIndex="999";
    heart.style.transition="all 6s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.style.transform="translateY(-120vh)";
        heart.style.opacity="0";
    },100);

    setTimeout(()=>{
        heart.remove();
    },6000);

}

setInterval(createHeart,500);

// Golden Sparkles

function sparkle(){

    const dot=document.createElement("div");

    dot.style.position="fixed";
    dot.style.width="5px";
    dot.style.height="5px";
    dot.style.borderRadius="50%";
    dot.style.background="gold";

    dot.style.left=Math.random()*100+"vw";
    dot.style.top=Math.random()*100+"vh";

    dot.style.boxShadow="0 0 20px gold";

    dot.style.opacity=Math.random();

    document.body.appendChild(dot);

    setTimeout(()=>{
        dot
