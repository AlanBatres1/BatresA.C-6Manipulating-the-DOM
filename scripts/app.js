//alert("Works");
let btnChange1 = document.getElementById("btnChange1");
let btnChange2 = document.getElementById("btnChange2")
let btnChange3 = document.getElementById("btnChange3")
// console.log(btnChange1);
let affectMe1 = document.getElementById("affectMe1");
let affectMe2 = document.getElementById("affectMe2")
let affectMe3 = document.getElementById("affectMe3")
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