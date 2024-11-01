
let header = document.getElementById("h1")
console.log(header);

console.log(document.getElementById("h1").textContent);
console.log(header.textContent)

function changeHeader() {
    header.textContent = "This is changed by a button"
}

let count = 0
let p = document.getElementById("countparagraph")
p.textContent = count

function increaseCount() {
   ++count
   p.textContent = count
   //alert(count) 
}

function decreaseCount() {
    --count
    p.textContent = count
    //alert(count) 
 }



function calculateArea(){
    let length = 10
    let width = 10
    let area = length * width

    alert(area)

}

//calculateArea()

//let userShape = prompt("Enter a shape") 

function calcuateAreaWithOptions(){

    let shape = userShape
    let area
    if(shape === "circle"){
        let r = 2
       
        area = Math.PI * Math.pow(r, 2)
        // console.log(r)
        // console.log(Math.pow(r, 2))
    }

    if(shape === "square"){
        let length = 10
        let width = 10
       area = length * width

    }

    console.log("Check if shape not a cirle: " + (shape != "circle"))
    console.log("Check if shape not a square: " + (shape != "square"))

    console.log(shape != "square" && shape != "circle")

    //Both sides of and statement need to be true for the statement to be true, otherwise false
    if(shape != "square" && shape != "circle" ){
        alert("Not a valid shape!")
    }
    else{
        alert("The area of a " + shape + " is: " + area)
    }

}

// calcuateAreaWithOptions()