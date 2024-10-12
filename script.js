API_KEY = 'e89f2f4e90580e10dd9c09a332d09e5c'

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