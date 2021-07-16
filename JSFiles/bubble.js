async function bubble()
{
    console.log("In bubble()");
    const barstack = document.querySelectorAll(".bar");
    for(let i=0;i<barstack.length-1;i++)
    {
       console.log("Inside ith loop");
       for(let j=0;j<barstack.length-i-1;j++)
       {
           console.log("Inside jth loop");
           barstack[j].style.background = "orange" ;
           barstack[j+1].style.background = "orange"; //compared elements
           
           if(parseInt(barstack[j].style.height)>parseInt(barstack[j+1].style.height))
           {
            console.log("Inside if");
            await wait(delay); //for colors to stay rendered
            swapper(barstack[j],barstack[j+1]); //use swapper
           }

           barstack[j].style.background = "cyan";
           barstack[j+1].style.background = "cyan"; //made colors default
       }
       barstack[barstack.length-i-1].style.background = "yellow"; //sorted color
    }
    barstack[0].style.background = "yellow";
}

const bubbleBtn = document.querySelector(".bubbleSort");
bubbleBtn.addEventListener("click", async function(){
    disableBtn();
    disableNewArrayBtn();
    await bubble();
    enableBtn();
    enableNewArrayBtn();
})