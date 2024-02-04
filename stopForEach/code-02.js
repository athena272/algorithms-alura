const array = [1, 2, 3, 4, 5];

try {
    array.forEach((number) => {
        console.log("Number:", number);
        if (number === 3) {
            throw new Error("Oops! Stopping the loop.");
        }
    });
} catch (error) {
    console.log("Caught an error:", error.message);
}