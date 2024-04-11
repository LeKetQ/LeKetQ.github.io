
let seeSharpBar = document.getElementById("seeSharpBar");
let mvcBar = document.getElementById("mvcBar");
let blazorBar = document.getElementById("blazorBar");

let angularBar = document.getElementById("angularBar");
let javascriptBar = document.getElementById("javascriptBar");
let htmlcssBar = document.getElementById("htmlcssBar");


function move(skill, skillLevel) {
    let width = 0;
    let id = setInterval(frame, 15);
    function frame() {
        if (width >= skillLevel) {
            clearInterval(id);
        } else {
            width++;
            skill.style.width = width + '%';
        }
    }
}

const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        move(seeSharpBar, 75);
        move(mvcBar, 65);
        move(blazorBar, 60);

        move(angularBar, 50);
        move(javascriptBar, 70);
        move(htmlcssBar, 75);
    }
});

observer.observe(document.getElementById("skillsAndExpertise"));


function hideLabel(hoveredImage) {
    let projectLabel = hoveredImage.querySelector(".projectLabel");
    projectLabel.style.color = 'transparent';
}

function showLabel(hoveredImage) {
    let projectLabel = hoveredImage.querySelector(".projectLabel");
    projectLabel.style.color = '#ffffff';
}