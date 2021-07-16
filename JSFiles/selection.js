async function selectionsort()
{
    console.log("Inside selectionsort()");
    const barstack = document.querySelectorAll(".bar");
    let small = 0;
    let index = 0;

    for(let i=0; i<barstack.length-1;i++)
    {   
        console.log("Inside ith loop");
        small = parseInt(barstack[i].style.height);
        barstack[i].style.background = "orange"; //first element in each loop is painted orange for initial comparision
        index = i;
        for(let j=i+1; j<barstack.length;j++)
        {
            console.log("Inside jth loop");
            barstack[j].style.background = "red"; //first element inside the secondary loop
            await wait(delay);

            if(parseInt(barstack[j].style.height)<small) //new smallest element found
            {
                small = parseInt(barstack[j].style.height);
               if(index !== i)
               {
                    barstack[index].style.background = "cyan"; //reset old smallest element back to cyan
               }
                index = j;
                
            }
            else
            {
                barstack[j].style.background = "cyan"; //if smallest element not found reset the previous smallest element back to cyan
            }
        }

        await wait(delay);
        swapper(barstack[i],barstack[index]);
        barstack[index].style.background = "cyan"; //reset heavier element back to cyan
        barstack[i].style.background = "yellow"; //smallest element was sorted and coloured yellow
    }
    barstack[barstack.length-1].style.background = "yellow"; //since ith loop is optimised, force color heaviest element
}

const selectionBtn = document.querySelector(".selectionSort")
selectionBtn.addEventListener("click", async function(){
    disableBtn();
    disableNewArrayBtn();
    await selectionsort();
    enableBtn();
    enableNewArrayBtn();
})