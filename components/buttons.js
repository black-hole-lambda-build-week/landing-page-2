let button = document.querySelectorAll(".button");

console.log(button);

button.forEach( (element) => {
    element.addEventListener('mouseover', (event) =>{
        event.target.style.cursor = 'pointer';
    } )

    element.addEventListener('click', (event) =>{
        window.location = 'https://black-hole-build-week.netlify.com/';
    } )

})