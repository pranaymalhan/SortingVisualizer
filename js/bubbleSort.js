async function bubbleSort(arr, n){
    var i, j, temp;
    var swapped;
    // console.log(n);
    for (i = 0; i < n - 1; i++){
        swapped = false;
        for (j = i; j < n - i - 1; j++){
            // setTimeout(function(){
            //     //do what you need here
            //     addHighlight(arr,j);
            // }, 2000);

            // console.log(j);
            addHighlight(arr,j,'green');
            addHighlight(arr,j+1,'red');
            await new Promise(r => setTimeout(r, 1000));
            if (arr[j].value > arr[j + 1].value) 
            {
                // console.log(j);
                // Swap arr[j] and arr[j+1]
                temp = arr[j].value;
                arr[j].value = arr[j + 1].value;
                arr[j + 1].value = temp;
                swapped = true;
            }
            var array = [];
            for (var k = 0; k < n; k++) {
                array.push(arr[k].value);        
            }
            reset();
            createArr(array, 2, 30, 50, 50);
            await new Promise(r => setTimeout(r, 1000));
        }
        // console.log(swapped);
        // IF no two elements were 
        // swapped by inner loop, then break
        if (swapped == false)
        break;
        // updateArr();
    }
}