fetch('https://api.github.com/users/omariosouto')
    .then(res => res.json())
    .then(data => console.log(data))