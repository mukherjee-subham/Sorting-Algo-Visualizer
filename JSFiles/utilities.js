//function for swapping elements based on .style.height

function swapper(item1,item2)
{
    console.log("Inside swap()");
    let temp = item1.style.height;
    item1.style.height = item2.style.height;
    item2.style.height = temp;
}

//function to disable buttons while sorting is on

function disableBtn()
{
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
    document.querySelector("#arr_size").disabled = true;
}

//function to enable buttons after sorting has finished

function enableBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
    document.querySelector("#arr_size").disabled = false;
}

//for controlling state of new array button
function disableNewArrayBtn()
{
    document.querySelector(".newArray").disabled = true;
}

function enableNewArrayBtn()
{
    document.querySelector(".newArray").disabled = false;
}


let a = [];
createNewArray();

//creates new array, used with New Array button
function createNewArray(noOfBars = 60)
{
    wipe(); //Don't want previous generation to stay rendered
    a = [];

    for(let i=0;i<noOfBars;i++)
    {
     a.push(Math.floor(Math.random() * 250) + 2);
        
    } //fill with numbers from 2 to 251 because 1px was not visible

    console.log(a);

    const bars = document.querySelector("#bars");

    //creating multiple divs to render plot of array

    for(let i=0;i<noOfBars;i++)
    {
        const bar = document.createElement("div");
        bar.style.height = `${a[i]*2}px`; //adjusting height for CSS
        bar.classList.add("bar");
        bar.classList.add("flex-item");
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }

}

let arraySize = document.querySelector("#arr_size");

//if new array has been created, allows change of size of array
arraySize.addEventListener("input", function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
}) 





//deletes bars on screen
function wipe()
{
    const bar = document.querySelector("#bars");
    bar.innerHTML = "";
}

//event listener for new array button

const newArr = document.querySelector(".newArray");

newArr.addEventListener("click", function(){
    console.log("From newArray"+arraySize.value)
    console.log("From newArray"+delay)
    enableBtn();
    createNewArray(arraySize.value);
})

//delay element for animations and dynamic generation of array/size of array and promise function

//wait function for showing animations in async sorting algos

function wait(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

//default delay
let delay = 260;

//event listener to access input animation delay via slider
let delayElement = document.querySelector("#input_speed");

delayElement.addEventListener("click", function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
})
