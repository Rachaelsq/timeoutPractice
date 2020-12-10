setTimeout(() => {
    console.log("Our timeout chain is starting...")
}, 3000);
console.log("get ready...")

// document.getElementById("buttonId")
//  buttonId.addEventListener("click", function() {
//      console.log("this is the function event")
//  }

document.getElementById("buttonId").addEventListener("click", function() {

setTimeout(() => {
    document.getElementById("p").innerHTML = "helloooooooo timeout";

}, 5000);

    // document.getElementById("p").innerHTML = "helloooooooo timeout";
});