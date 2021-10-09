/**
 * first declare the data to use here
 * *************************
 */

const data = {
    message: 'hello!'
}

/**
 * execute when the DOM is fully loaded
 * *************************
 */
window.onload = () => {
    console.log(`Message from src/main.js : ${data.message}`)
}
