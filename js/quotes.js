

const sentence=["Be yourself; everyone else is already taken.",
"Be the change that you wish to see in the world.",
"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
"A friend is someone who knows all about you and still loves you.",
"It is better to be hated for what you are than to be loved for what you are not."
]




var idx_num  = Math.floor((Math.random()*sentence.length));
var quote = document.querySelector(".quotes")
quote.textContent= sentence[idx_num];





const blue = document.querySelector(".blue-button")
const green = document.querySelector(".green-button")
const skin = document.querySelector(".skin-button")
const lavender = document.querySelector(".lavender-button")
var quote_area = document.querySelector(".quote")


green.addEventListener("click",function(){
    quote_area.classList.remove("blue");
    quote_area.classList.remove("lavender");
    quote_area.classList.remove("skin");
    quote_area.classList.add("green");
})


blue.addEventListener("click",function(){
    quote_area.classList.add("blue");
    quote_area.classList.remove("green");
    quote_area.classList.remove("lavender");
    quote_area.classList.remove("skin");
   
    
})

skin.addEventListener("click",function(){
    quote_area.classList.remove("blue");
    quote_area.classList.remove("lavender");
    quote_area.classList.remove("green");
    quote_area.classList.add("skin");
})

lavender.addEventListener("click",function(){
    quote_area.classList.remove("blue");
    quote_area.classList.remove("skin");
    quote_area.classList.remove("green");
    quote_area.classList.add("lavender");
})


