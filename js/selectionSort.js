async function selectionSort(arr,n) {
    for (let i = 0; i < n - 1; i++) {
        // Assume the current position holds
        // the minimum element
        let min_idx = i;
        addHighlight(arr,min_idx,'green');
        await new Promise(r => setTimeout(r, 1000));

        // Iterate through the unsorted portion
        // to find the actual minimum
        for (let j = i + 1; j < n; j++) {
            addHighlight(arr,j,'red');
            await new Promise(r => setTimeout(r, 1000));

            if (arr[j].value < arr[min_idx].value) {
            
                if(min_idx!==i){
                    addHighlight(arr,min_idx,'red');
                    await new Promise(r => setTimeout(r, 1000));
                }
                // Update min_idx if a smaller element is found
                min_idx = j;
                addHighlight(arr,min_idx,'blue');
                await new Promise(r => setTimeout(r, 1000));
            }
        }
        
        // Move minimum element to its
        // correct position
        if(min_idx!==i){
            removeHighlight();
            addHighlight(arr,i,'green');
            addHighlight(arr,min_idx,'blue');
            await new Promise(r => setTimeout(r, 2000));
            let temp = arr[i].value;
            arr[i].value = arr[min_idx].value;
            arr[min_idx].value = temp;
        }

        var array = [];
        for (var k = 0; k < n; k++) {
            array.push(arr[k].value);        
        }
        reset();
        createArr(array, 2, 30, 50, 50);
        if(min_idx!==i){
            addHighlight(arr,i,'blue');
            addHighlight(arr,min_idx,'green');
            await new Promise(r => setTimeout(r, 2000));
            removeHighlight();
        }
    }
}