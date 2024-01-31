const containerElement = document.querySelector("#container");

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

for (let i = 1; i <= 100; i++ ) {

    const newElement = document.createElement("div");
    
    newElement.className = "square";
    newElement.style.backgroundColor = "#3189B2"; 
    

    if (i % 3 == 0 && i % 5 == 0){
        newElement.className += " red";
        
    } else if (i % 5 == 0) {
        newElement.className += " yellow";
        
    } else if (i % 3 == 0)  {
        newElement.className += " green";  
         
    } else {
        containerElement.append(newElement);
        newElement.innerHTML = i;
    }

}