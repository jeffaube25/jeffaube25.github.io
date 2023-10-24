const words = ['Development', 'Data', 'Leadership']; // Words to display
const typingSpeed = 150; // Typing speed (milliseconds)
const backspaceSpeed = 50; // Backspacing speed (milliseconds)
const delayBetweenWords = 1000; // Delay between words (milliseconds)

const taglineElement = document.getElementById('tagline');
let wordIndex = 0;
let letterIndex = 0;
let isTyping = true;

function typeWord() {
    if (letterIndex < words[wordIndex].length) {
        taglineElement.innerHTML += words[wordIndex][letterIndex];
        letterIndex++;
        setTimeout(typeWord, typingSpeed);
    } else {
        isTyping = false;
        setTimeout(backspaceWord, delayBetweenWords);
    }
}

function backspaceWord() {
    if (letterIndex > 0) {
        taglineElement.innerHTML = taglineElement.innerHTML.slice(0, -1);
        letterIndex--;
        setTimeout(backspaceWord, backspaceSpeed);
    } else {
        isTyping = true;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWord, typingSpeed);
    }
}

typeWord(); // Start the animation