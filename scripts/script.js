particlesJS("particles-js", {
    particles: {
        number: { value: 50 },
        shape: { type: "circle" },
        opacity: { value: 0.7 },
        size: { value: 5, random: true },
        move: {
            speed: 1.5,
            direction: "bottom",
            straight: false,
        },
    },
    interactivity: {
        events: {
            onhover: { enable: false },
        },
    },
    retina_detect: true,
});

/* Google OAuth Callback Function
function handleCredentialResponse(response) {
    
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/jwt-decode/build/jwt-decode.min.js";
    script.onload = () => {
       
        const data = jwt_decode(response.credential);
        const userName = data.name || "To you!!";

        
        const greetingElement = document.getElementById("greeting");
        greetingElement.textContent = `Merry Christmas, ${userName}! 🎄❤️ Bimme loves you🫶🧑‍🎄 and has a 
        gift for you🎁. Just close your eyes, you'll find your gift😂🫠. From Bimme to you😍. 
        Joyeux Noël,${userName} Merry Merry!❄️🎉`;
    };
    document.head.appendChild(script);
}*/

/*Loadx the Google OAuth Library
window.onload = function () {
    google.accounts.id.initialize({
        client_id: "901849007142-f294t2bc48pmj4bjfv67qk7ra5ivdeja.apps.googleusercontent.com",  
        callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(
        document.getElementById("google-button"),
        { theme: "outline", size: "medium" } 
    );

    google.accounts.id.prompt(); 
};*/


const button = document.getElementById('reveal-button');
const hiddenMessage = document.getElementById('hidden-message');

button.addEventListener('click', () => {
    hiddenMessage.style.display = 'block';
    button.style.display = 'none'; 
});



 const snowflakeCount = 100; 
let currentElements = 0; 


const fallingElements = ['❄', '⛄', '🎄']; 

function createFallingElement() {
    if (currentElements >= snowflakeCount) return; 

    const element = document.createElement('div');
    element.classList.add('falling-element'); 

   
    element.innerHTML = fallingElements[Math.floor(Math.random() * fallingElements.length)];

    
    element.style.left = Math.random() * 100 + 'vw'; 
    element.style.fontSize = Math.random() * 10 + 15 + 'px'; 
    element.style.animationDuration = Math.random() * 5 + 3 + 's'; 
    element.style.opacity = Math.random() * 0.5 + 0.5; 

    document.body.appendChild(element); 
    currentElements++; 

    
    setTimeout(() => {
        element.remove();
        currentElements--; 
    }, 8000); 
}

// Continuously generate falling elements
setInterval(createFallingElement, 300); 

function createStars() {
    const starCount = 50; 
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + 'vw'; 
        star.style.top = Math.random() * 100 + 'vh'; 
        star.style.animationDuration = Math.random() * 3 + 2 + 's'; 
        document.body.appendChild(star);
    }
}

createStars();

function createShootingStar() {
    const star = document.createElement('div');
    star.style.position = 'fixed';
    star.style.width = '15px';
    star.style.height = '15px';
    
    // Randomize colors
    const colors = ['coral', 'tomato', 'brown', 'pink', 'crimson'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    star.style.background = randomColor;
    star.style.borderRadius = '50%';
    star.style.top = Math.random() * 50 + 'vh';
    star.style.left = '0px';
    star.style.boxShadow = `0 0 10px ${randomColor}`;

    document.body.appendChild(star);

    star.animate(
        [
            { transform: 'translateX(-50%)' },
            { transform: `translateX(${window.innerWidth}px)` }
        ],
        { duration: 3000, easing: 'ease-out' }
    );

    setTimeout(() => star.remove(), 3000);
}


setInterval(createShootingStar, 2000); 
