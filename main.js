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
    document.getElementById("p").innerHTML = "Helloooooooo timeout!!!";

}, 3000);

    // document.getElementById("p").innerHTML = "helloooooooo timeout";
});

// set interval is similar. it takes a function and in interval
//  setInterval(function, intervalInMs)

// setInterval(count, 1000);
// document.getElementById("p2").addEventListener("click", function() {
//     let counter = 0
//     counter ++
//     console.log(counter)
// }