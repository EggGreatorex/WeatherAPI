API_KEY = ' '

const input = document.getElementById('cityInput');

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13){
        // Check if the Enter key is pressed
        contactAPI(input.value);
    }
})


function contactAPI(value) {
    console.log(value)
};
