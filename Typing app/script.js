const typingText = document.querySelector('.typing-text p');
const input = document.querySelector('.wrapper .input-field');
const time = document.querySelector('.time span b');
const mistakes = document.querySelector('.mistake span');
const wpmDisplay = document.querySelector('.wpm span');
const cpmDisplay = document.querySelector('.cpm span');
const btn = document.querySelector('button');

// Set initial values
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;

function loadParagraph() {
    const paragraph = [
        "The first rays of sunlight peeked through the clouds, casting a soft glow over the sleepy village.",
        "Birds chirped from the treetops, their morning song echoing through the crisp, cool air.",
        "The smell of freshly brewed coffee wafted from open windows, mixing with the earthy scent of damp soil.",
        "In the distance, a rooster crowed, marking the start of another peaceful day in the countryside.",
        "Children’s laughter filled the quiet morning as they chased each other across the dewy grass, their joy untouched by the worries of the world.",
        "A gentle breeze swept across the fields, bending the tall grasses in a graceful wave.",
        "Farmers were already hard at work, their tractors moving slowly under the brightening sky.",
        "Dogs barked happily, running alongside as their owners prepared for a day outdoors.",
        "Nearby, an old barn stood tall and proud, its red paint faded but full of stories from years gone by.",
        "A cat stretched lazily in the warm sunlight, content to spend the day lounging near the garden.",
        "Neighbors waved to each other, sharing warm smiles as they went about their morning routines.",
        "The sweet scent of wildflowers drifted on the breeze, adding color and life to the quiet landscape.",
        "Somewhere beyond the trees, a brook babbled softly, its gentle sounds mixing with the hum of nature.",
        "As the sun rose higher, shadows began to fade, and the world seemed bathed in a golden light.",
        "For a brief moment, time felt suspended, as if everything was perfectly still and at peace with the world."
    ];
    
    const randomIndex = Math.floor(Math.random() * paragraph.length);
    typingText.innerHTML = '';
    for (const char of paragraph[randomIndex]) {
        typingText.innerHTML += `<span>${char}</span>`;
    }
    typingText.querySelectorAll('span')[0].classList.add('active');
    
    document.addEventListener('keydown', () => input.focus());
    typingText.addEventListener('click', () => input.focus());
}

function initTyping() {
    const char = typingText.querySelectorAll('span');
    const typedChar = input.value.charAt(charIndex);
    
    if (charIndex < char.length && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTime, 1000);
            isTyping = true;
        }

        if (char[charIndex].innerText === typedChar) {
            char[charIndex].classList.add('correct');
        } else {
            mistake++;
            char[charIndex].classList.add('incorrect');
        }

        char[charIndex].classList.remove('active');
        charIndex++;
        
        if (charIndex < char.length) {
            char[charIndex].classList.add('active');
        }

        mistakes.innerText = mistake;
        const wordsTyped = Math.round((charIndex - mistake) / 5);
        const wpm = timeLeft > 0 ? Math.round((wordsTyped / (maxTime - timeLeft)) * 60) : 0;
        const cpm = charIndex - mistake;

        wpmDisplay.innerText = wpm >= 0 ? wpm : 0;
        cpmDisplay.innerText = cpm >= 0 ? cpm : 0;
    } else {
        input.value = '';
        clearInterval(timer);
    }
}

function initTime() {
    if (timeLeft > 0) {
        timeLeft--;
        time.innerText = timeLeft;
    } else {
        clearInterval(timer);
    }
}

btn.addEventListener('click', () => {
    resetGame();
});

function resetGame() {
    clearInterval(timer);
    loadParagraph();
    input.value = '';
    timeLeft = maxTime;
    charIndex = 0;
    mistake = 0;
    isTyping = false;
    time.innerText = timeLeft;
    mistakes.innerText = 0;
    wpmDisplay.innerText = 0;
    cpmDisplay.innerText = 0;
}

input.addEventListener("input", initTyping);
loadParagraph();
