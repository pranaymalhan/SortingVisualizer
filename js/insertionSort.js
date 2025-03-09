async function insertionSort(arr,n) {
    var i, j, key;
    for (i = 1; i < n; i++) {
        addHighlight(arr,i,'green');
        await new Promise(r => setTimeout(r, 1000));
        key = arr[i].value;
        j = i - 1;
        while (j >= 0 && arr[j].value > key) {
            addHighlight(arr,j,'red');
            await new Promise(r => setTimeout(r, 1000));
            arr[j + 1].value = arr[j].value;
            j = j - 1;
        }
        arr[j + 1].value = key;
        var array = [];
        for (var k = 0; k < n; k++) {
            array.push(arr[k].value);        
        }
        reset();
        createArr(array, 2, 30, 50, 50);
        await new Promise(r => setTimeout(r, 1000));
    }
}