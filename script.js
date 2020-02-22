const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Disable/Enable Button
function toggleButton() {    
    button.disabled = !button.disabled;
}

function tellMe(joke) {
    VoiceRSS.speech({
        key: '70059732a4d84bc99d9c57c2c97e4b5f',
        src: joke,
        hl: 'en-us',
        r: 0,
        c: 'mp3',
        f: '44rhz_16bit_stereo',
        ssml: false
    });
}

//Get Jokes from Joke API

async function getJoke() {
    let joke = '';
    const apiURL = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist';
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`
        } else {
            joke = data.joke;
        }
        //Text-to-Speech
        tellMe(joke);
        //Disable Button
       /* toggleButton();*/
    } catch(error) {
        //Catch Errors Here        
    }
}

// Event Listeners
button.addEventListener('click', getJoke);
/*audioElement.addEventListener('ended', toggleButton);*/


