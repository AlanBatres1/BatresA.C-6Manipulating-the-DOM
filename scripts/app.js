//alert("Works");
let btnChange1 = document.getElementById("btnChange1");
let btnChange2 = document.getElementById("btnChange2")
let btnChange3 = document.getElementById("btnChange3")
let btnChange4 = document.getElementById("btnChange4");
let btnChange5 = document.getElementById("btnChange5")
let btnChange6 = document.getElementById("btnChange6")
let btnChange7 = document.getElementById("btnChange7");
let btnChange8 = document.getElementById("btnChange8")
let btnChange9 = document.getElementById("btnChange9")
let btnChange10 = document.getElementById("btnChange10");

// console.log(btnChange1);
let affectMe1 = document.getElementById("affectMe1");
let affectMe2 = document.getElementById("affectMe2")
let affectMe3 = document.getElementById("affectMe3")
let affectMe4 = document.getElementById("affectMe4");
let affectMe5 = document.getElementById("affectMe5")
let affectMe6 = document.getElementById("affectMe6")
let affectMe7 = document.getElementById("affectMe7");
let affectMe8 = document.getElementById("affectMe8")
let affectMe9 = document.getElementById("affectMe9")
let affectMe10 = document.getElementById("affectMe10");

// console.log(affectMe1);
btnChange1.addEventListener("click", function(event){
    // alert("Button Clicked")
    affectMe1.innerText = "Changed the value to this string";
});
btnChange2.addEventListener("click", function(event){
    affectMe2.innerText = "Hope you had a great three day weekend";
    affectMe2.className = "newStyle";
});
btnChange3.addEventListener("click", function(event){
    affectMe3.innerText = "We love to code";
    affectMe3.className = "newStyle " + "barrelRoll";
});

btnChange4.addEventListener("click", function(event){
    affectMe4.innerText = "We love to code";
    affectMe4.className = "newStyle " + "rollerRight";
});

btnChange5.addEventListener("click", function(event){
    affectMe5.innerText = "We love to code";
    affectMe5.className = "newStyle " + "heartbeat";
});

btnChange6.addEventListener("click", function(event){
    affectMe6.innerText = "We love to code";
    affectMe6.className = "newStyle " + "spinner";
});

btnChange7.addEventListener("click", function(event){
    affectMe7.innerText = "We love to code";
    affectMe7.className = "newStyle " + "wiggle";
});

btnChange8.addEventListener("click", function(event){
    affectMe8.innerText = "We love to code";
    affectMe8.className = "newStyle " + "shake";
});

btnChange9.addEventListener("click", function(event){
    affectMe9.innerText = "We love to code";
    affectMe9.className = "newStyle " + "pound";
});

btnChange10.addEventListener("click", function(event){
    affectMe10.innerText = "Good Bye!";
    affectMe10.className = "newStyle " + "fadeOut";
});
