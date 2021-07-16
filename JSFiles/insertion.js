async function insertion(){
    console.log('In insertion()');
    const barstack = document.querySelectorAll(".bar");
    // color
    barstack[0].style.background = 'yellow';
    for(let i = 1; i < barstack.length; i++){
        console.log('In ith loop');
        let j = i - 1;
        let key = barstack[i].style.height;
        // color
        barstack[i].style.background = 'purple';

        await wait(delay);

        while(j >= 0 && (parseInt(barstack[j].style.height) > parseInt(key))){
            console.log('In while loop');
            // color
            barstack[j].style.background = 'purple';
            barstack[j + 1].style.height = barstack[j].style.height;
            j--;

            await wait(delay);

            // color
            for(let k = i; k >= 0; k--){
                barstack[k].style.background = 'yellow';
            }
        }
        barstack[j + 1].style.height = key;
        // color
        barstack[i].style.background = 'yellow';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableBtn();
    disableNewArrayBtn();
    await insertion();
    enableBtn();
    enableNewArrayBtn();
});


