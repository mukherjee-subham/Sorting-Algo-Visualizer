async function mergesort(a,l,r)
{
    console.log("Inside mergeSort()");
    if(l>=r)
    {
        console.log(`returning due to only 1 element l=${l}, r=${r}`);
        return;
    }
    const m = l + Math.floor((r-l)/2);
    console.log(`left=${l} mid=${m} right=${r}`);
    await mergesort(a,l,m);
    await mergesort(a,m+1,r);
    await merge(a,l,m,r);
} //master mergesort

async function merge(a,l,m,r)
{
    console.log("Inside merge()");
    console.log(`left=${l} mid=${m} right=${r}`);
    const n1 = m-l+1;
    const n2 = r-m;
    console.log(`n1=${n1} n2=${n2}`);
    let left = new Array(n1);
    let right = new Array(n2); //aux arrays

    for(let i=0;i<n1;i++)
    {
        console.log("Inside merge left loop")
        a[l+i].style.background = "orange";
        left[i] = a[l+i].style.height;
    }

    for(let i=0;i<n2;i++)
    {
        console.log("Inside merge right loop")
        a[m+1+i].style.background= "red";
        right[i]= a[m+1+i].style.height;
    }

    await wait(delay);
    let i=0, j=0, k=l;
    while(i<n1 && j<n2)
    {
        await wait(delay);
        console.log("Inside merge while loop");
        if(parseInt(left[i]) <= parseInt(right[j]))
        {
            console.log("Inside merge while 'if'");
            //coloring the sorted element on last pass
            if((n1+n2) === a.length)
            {
                a[k].style.background = "yellow";
            }
            else
            { //coloring accessed element otherwise
                a[k].style.background = "lightgreen";
            }
            a[k].style.height = left[i];
            i++;
            k++;
        }
        else
        {
            console.log("Inside merge while 'else'");
            //coloring the sorted element on last pass
            if((n1+n2) === a.length)
            {
                a[k].style.background = "yellow";
            }
            else
            { //coloring accessed element otherwise
                a[k].style.background = "lightgreen";
            }
            a[k].style.height = right[j];
            j++;
            k++;
            
        }
    } //break out of while when n1 or n2 crosses last index of any array

    while(i<n1)
    {
        await wait(delay);
        console.log("Inside while, n1 is left");

        //coloring the sorted element on last pass
        if((n1+n2) === a.length)
        {
            a[k].style.background = "yellow";
        }
        else
        { //coloring accessed element otherwise
            a[k].style.background = "lightgreen";
        }
        a[k].style.height = left[i];
        i++;
        k++;
    }

    while(j<n2)
    {
        await wait(delay);
        console.log("Inside while, n2 is left");

        //coloring the sorted element on last pass
        if((n1+n2) === a.length)
        {
            a[k].style.background = "yellow";
        }
        else
        { //coloring accessed element otherwise
            a[k].style.background = "lightgreen";
        }
        a[k].style.height = right[j];
        j++;
        k++;
    }

} // end of merge()



const mergeBtn = document.querySelector(".mergeSort");
mergeBtn.addEventListener("click", async function(){
    let barstack = document.querySelectorAll(".bar");
    let l=0;
    let r=parseInt(barstack.length)-1;
    disableBtn();
    disableNewArrayBtn();
    await mergesort(barstack,l,r);
    enableBtn();
    enableNewArrayBtn();

})