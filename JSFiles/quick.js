async function lomuto(barstack,l,r)
{
    console.log("Inside lomuto()",`l=${l} r=${r}`);
    let i = l-1;
    //lomuto uses last element as pivot, colouring it red
    barstack[r].style.background = "red";

    //basic lomuto partitioning and adding neongreen to smaller and neonpink to bigger than pivot elements
    for(let j=l;j<=r-1;j++)
    {
        console.log("Inside lomuto j");
        //adding orange colour to current element
        barstack[j].style.background = "orange";
        await wait(delay);

        if(parseInt(barstack[j].style.height)<parseInt(barstack[r].style.height))
        {
            console.log("Inside lomuto if");
            i++;
            swapper(barstack[i],barstack[j]);
            //coloring smaller elements
            barstack[i].style.background = "#66fa16";
            if(i!=j) barstack[j].style.background = "#66fa16";

            await wait(delay);
        }

        else
        {
            //color larger than pivot elements
            barstack[j].style.background = "#ff36dd";
        }
    }
    i++;
    await wait(delay);
    swapper(barstack[i],barstack[r]);

    barstack[r].style.background = "#ff36dd";
    barstack[i].style.background = "yellow";

    await wait(delay);
    return i;

}

async function qsort(barstack,l,r)
{
    console.log("Inside qsort()",`l=${l} r=${r}`, typeof(l), typeof(r));

    if(l<r)
    {
        let p = await lomuto(barstack,l,r); //partition index
        await qsort(barstack,l,p-1); //sort left of pivot
        await qsort(barstack,p+1,r); //sort right of pivot
    }
    else
    {
        if(l>=0 && r>=0 && l<barstack.length && r<barstack.length)
        {
            barstack[r].style.background = "yellow";
            barstack[l].style.background = "yellow";
        }
    }
}

const qsortBtn = document.querySelector(".quickSort");
qsortBtn.addEventListener("click", async function(){

    let barstack = document.querySelectorAll(".bar");
    let l= 0;
    let r= barstack.length - 1;
    disableBtn();
    disableNewArrayBtn();
    await qsort(barstack,l,r);
    enableBtn();
    enableNewArrayBtn();
})
