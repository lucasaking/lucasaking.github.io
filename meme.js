window.onload = function() {

form = document.getElementById('wrapper');

form.addEventListener('submit', function(event){

event.preventDefault();

//NYAN CAT EXTRA
var nyan = document.querySelector(".nyan");
nyan.style.marginLeft = 0;

function reset(nyan) {
    clearTimeout(nyan.timer);
    nyan.style.marginLeft = 0;
}
    nyan.timer = setInterval(function () {
        nyan.style.marginLeft = parseInt(nyan.style.marginLeft) + Math.random() * 70 + 'px';
        if (parseInt(nyan.style.marginLeft) > window.innerWidth) {
            reset(nyan);
        }
    }, 60)
//NYAN CAT END   

var val = document.getElementById('image-input').value,
src = val,
img = document.createElement('img');
img.className = "img";
img.src = src;


    
    var outer1 = document.getElementById("outer");

    var container = document.createElement("div");
    container.className = "container";
    container.appendChild(img);

    outer1.appendChild(container);
    
    var topText = document.createElement("div");
    topText.innerText = document.getElementById("top-text").value;
    topText.className = "top-texts";

    container.appendChild(topText);

    var bottomText = document.createElement("div");
    bottomText.innerText = document.getElementById("bottom-text").value; 
    bottomText.className = "bottom-texts";

    container.appendChild(bottomText);

    img.addEventListener("click", function () {
        img.remove();
        topText.remove();
        bottomText.remove();
    });

form.reset();
})
}

