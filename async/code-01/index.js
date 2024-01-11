function getChuckNorrisFact() {
    const chuckNorrisData = fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data => console.log(data))
}

function getTip() {
    const tipData = fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => console.log(data))
}

getChuckNorrisFact()

getTip()