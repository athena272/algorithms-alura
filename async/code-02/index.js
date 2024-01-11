async function getNorrisFact() {
    const response = await fetch("https://api.chucknorris.io/jokes/random")
    const norrisFactData = await response.json()

    console.log(norrisFactData)
}

async function getTip() {
    const response = await fetch("https://api.adviceslip.com/advice")
    const tipData = await response.json()

    console.log(tipData)
}

getNorrisFact()
getTip()