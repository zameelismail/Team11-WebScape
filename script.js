// You can add JavaScript functionality as needed for interactivity
// For example, form validation, interactive map functionality, etc.


document.addEventListener('DOMContentLoaded', function () {

    var i = 0;
    var txt = 'Your partner in sustainable technology disposal';
    var speed = 50;
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("typer").textContent += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
    setInterval(()=>{
        i=0;
        document.getElementById("typer").textContent ="";
        typeWriter();
    },4000);
});

