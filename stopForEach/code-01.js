const friendlyArray = [5, 4, 3, 2, 1, 0, -1, -2, -3];

friendlyArray.forEach((number) => {
    if (number <= 0) {
        console.log("Stopping? Nope! Number:", number);
        return; // You might think this would stop it, but nope!
    }
    console.log("Number:", number);
});