// fetch('https://api.github.com/users/omariosouto')
//     .then(res => res.json())
//     .then(data => console.log(data))

const getDataGithub = async () => {
    const response = await fetch('https://api.github.com/users/omariosouto')

    const githubData = await response.json()

    console.log(githubData)
}

getDataGithub()