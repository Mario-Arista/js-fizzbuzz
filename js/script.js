const containerElement = document.querySelector("#container");


// WITHOUT APPEND

// for (let i = 1; i <= 100; i++ ) {
    
//     if (i % 5 == 0 && i % 3 == 0) {
//         containerElement.innerHTML += `<div class="square red">fizzbuzz</div>`;

//     } else if (i % 5 == 0) {
//         containerElement.innerHTML += `<div class="square yellow">buzz</div>`;
//     } else if (i % 3 == 0) {
//         containerElement.innerHTML += `<div class="square green" >fizz</div>`;
//     } else {
//         containerElement.innerHTML += ` <div class="square blue" >${i}</div>`;
        
//     }

// }

// WITH APPEND

for( i=1; i<=100; i++) {

    const newElement = document.createElement("div");
    containerElement.append(newElement);
    newElement.className = "square blue";
    newElement.innerHTML = i;
    

    if (i % 5 == 0 && i % 3 == 0) {
        newElement.className = "square red";
        newElement.innerText = "fizzbuzz";
    
    } else if (i % 5 == 0) {
        newElement.className = "square yellow";
        newElement.innerText = "buzz";

    } else if (i % 3 == 0) {
        newElement.className = "square green";
        newElement.innerText = "fizz";

    } 
        
}



