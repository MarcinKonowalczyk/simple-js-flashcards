var items = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"];

function test() {
    // window.alert("test")
    var item = items[Math.floor(Math.random()*items.length)]; // Choose random text from the list
    document.getElementById("text").innerHTML = item // Change the inner HTML of 'text' object to the chosen text
}
