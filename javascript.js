document.getElementById("button1").onclick = function() {
    growBox()
};

document.getElementById("button2").onclick = function() {
    blueBox()
};

document.getElementById("button3").onclick = function() {
    fadeBox()
};

document.getElementById("button4").onclick = function() {
    resetBox()
};

function growBox() { 
    box = document.getElementById("box");
    box.style.height = "300px"; 
    box.style.width = "300px";

    
}

function blueBox() {
    box = document.getElementById("box");
    box.style.backgroundColor="blue";
    
}

function fadeBox() {
    box = document.getElementById("box");
    box.style.opacity= 0.26;
}

function resetBox() {
    box = document.getElementById("box");
    box.style.height = "150px"; 
    box.style.width = "150px";
    box.style.backgroundColor="orange";
    box.style.opacity= 1;
}