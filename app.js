const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const bodyColor = document.querySelector('.body-c');
const timeClass = document.querySelector('.time');
const dateClass = document.querySelector('.date');

const today = new Date();

// creating Speech Recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Responses
const greetings = [
    "I dont feel good mister Stark.",
    "Pretty good actually. Not because of you.",
    "Can you stop, please?"
];

const weather = [
    "Its shitty.",
    "Pretty bad actually. Because of you.",
    "Just look outside, stupid!"
];

const dark = [
    "Entering dark era.",
    "As you wish, my lord.",
    "Holy shit, someone is getting dark."
];

const white = [
    "Entering holy era.",
    "As you command, my lord.",
    "Holy shit, someone is getting a Michael Jackson."
];

const deleteText = [
    "As you command, my lord.",
    "Deleting text.",
    "why you got to be so rude with text.",
];

const motivationalQuotes = [
    "Push yourself from that balcony, because no one else is going to do it for you.",
    "Success doesn’t just find you. It hides from you so that you'll never find it.",
    "The harder you work for something, the greater the dissapointment will be when you fail.",
    "Your limitation it’s only your imagination: pretty limited."
];

//Actions

recognition.onstart = () => {
    console.log("Voice is activated, you can speak.");
}

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript.toLowerCase());
}

// add the listener to the button

btn.addEventListener('click', () => {
    recognition.start();
});


function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I dont know what you said. Please, speak english you idiot";

    if (message.includes("how are you")){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if (message.includes("weather")){
        const finalText = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;
    }

    if (message.includes("change body to black") || message.includes("black") || message.includes("dark")){
        const finalText = dark[Math.floor(Math.random() * dark.length)];
        speech.text = finalText;
        bodyColor.style.backgroundColor = "black";
        content.style.color = "white";
        timeClass.style.color = "white";
        dateClass.style.color = "white";
    }

    if (message.includes("change body to white") || message.includes("white")){
        const finalText = white[Math.floor(Math.random() * white.length)];
        speech.text = finalText;
        bodyColor.style.backgroundColor = "white";
        content.style.color = "black";
        timeClass.style.color = "black";
        dateClass.style.color = "black";
    }

    if (message.includes("time")){
        const today = new Date();
        const time = [
            "The time is " + today.getHours() + " hours, " + today.getMinutes() + " minutes and " + today.getSeconds() + " seconds. But you knew since you have a clock in front of you.",
            today.getHours() + " and " + today.getMinutes() + " is the time when you shut up."
        ];
        const finalText = time[Math.floor(Math.random() * time.length)];
        speech.text = finalText;
        timeClass.textContent = "Current time: " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    }

    if (message.includes("date")){
        const today = new Date();
        const date = [
            "We are in the year " + today.getFullYear() + ", " + (today.getMonth() + 1) + " months and " + today.getDate() + " days. But I know you dont care.",
            today.getFullYear() + " years, " + (today.getMonth() + 1) + " months and " + today.getDate() + " days is the date when you will stop caring about me.",
        ];
        const finalText = date[Math.floor(Math.random() * date.length)];
        speech.text = finalText;
        dateClass.textContent = "Current date: " + today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    }

    if (message.includes("delete text")){
        const finalText = deleteText[Math.floor(Math.random() * deleteText.length)];
        speech.text = finalText;
        content.textContent = "";
        timeClass.textContent = "";
        dateClass.textContent = "";
    }

    if (message.includes("motivational quote")){
        const finalText = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 0.7;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}