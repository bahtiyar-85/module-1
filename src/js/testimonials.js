import config from "/src/data/config.json" assert {type: "json"};

document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelectorAll(".testimonial__phrase");
    const author = document.querySelectorAll(".testimonial__author");
    const position = document.querySelectorAll(".testimonial__position");
   
    for(let i=0; i<text.length; i++){
        text[i].textContent = config.testimonials[i].text;
        author[i].textContent = config.testimonials[i].name;
        position[i].textContent = config.testimonials[i].job;
    }
});