var items = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"];

function test() {
    // window.alert("dupa")
    var item = items[Math.floor(Math.random()*items.length)];
    document.getElementById("text").innerHTML = item
}