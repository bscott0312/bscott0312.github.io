let element = document.getElementsByClassName("icons"); 

function onClick(event){
	event.target.style.color = generateRandomColor();
}


function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

element.addEventListener('click', onClick);