const GetPrompt = async (type) => {
     // get page elements
     var adjElement = document.getElementById('adj-resp');
     var nounElement = document.getElementById('noun-resp');
     var promptText = document.getElementById('prompt-text');

    //clear previous answer
    adjElement.innerHTML = "";
    nounElement.innerHTML = "";

    promptText.className += " visible";

    if(type === 0){
        // get random adj and noun from helper functions
        let adjJson = await GenerateAdj();
        let nounJson = await GenerateNoun();
        let adj = adjJson[0];
        let noun = nounJson[0];
        adjElement.innerHTML += adj;
        nounElement.innerHTML += noun;
    }else{
        let adjJson = await GenerateAdj();
        let animalJson = await GenereateAnimal();
        let adj = adjJson[0];
        let animal = animalJson[0];
        adjElement.innerHTML += adj;
        nounElement.innerHTML += animal;
    }
  
}

function AnimatePen() {
    var pen = document.getElementById('pen-path');
    var splash = document.getElementById('splash');

    pen.classList.add('animate');
    // wait for animation
    sleepy(2500).then(() => {splash.classList.add('hidden');});

    GetPrompt()
}

function ResetMain() {
    // get elements
    var adjElement = document.getElementById('adj-resp');
    var nounElement = document.getElementById('noun-resp');
    var promptText = document.getElementById('prompt-text');

    // clear previous answer
    adjElement.innerHTML = "";
    nounElement.innerHTML = "";
    promptText.classList.remove("visible");

    // animate easel and reset class for toggle effect
    var easelPen = document.getElementById('easel-path');
    easelPen.classList.add('animate');
    sleepy(2500).then(() => {easelPen.classList.remove('animate');})
}


/*  helper functions */
function sleepy(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const GenerateNoun = async () => {
    let randomNounData = await fetch('https://random-word-form.herokuapp.com/random/noun');
    let randomNounJson = await randomNounData.json();
    return randomNounJson;
}

const GenerateAdj = async () => {
    let randomadjData = await fetch('https://random-word-form.herokuapp.com/random/adjective');
    let randomadjJson = await randomadjData.json();
    return randomadjJson;
}

const GenereateAnimal = async () => {
    let randomanimalData = await fetch('https://random-word-form.herokuapp.com/random/animal');
    let randomanimalJson = await randomanimalData.json();
    return randomanimalJson;
}