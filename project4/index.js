const fs = require('fs');

const inputFile = process.argv[2];
if (!inputFile) {
    console.error('Vui lòng cung cấp đường dẫn file đầu vào.');
    process.exit(1);
}

const numbers = parseNumbersFromFile(inputFile);
if (numbers.length === 0) {
    console.error('File không chứa số hợp lệ. Vui lòng kiểm tra lại!');
    process.exit(1);
}

// const sortedAscending = insertionSort([...numbers]); 
// const sortedDescending = insertionSort([...numbers], ).reverse(); 

// const sortedAscending = bubbleSort([...numbers]); 
// const sortedDescending = bubbleSort([...numbers], ).reverse(); 

const sortedAscending = selectionSort([...numbers]); 
const sortedDescending = selectionSort([...numbers], ).reverse();

// const sortedAscending = quickSort([...numbers]);
// const sortedDescending = quickSort([...numbers],).reverse();

function parseNumbersFromFile(filePath) {
    if (!fs.existsSync(filePath)) {
        console.error("File \"" + filePath + "\" không tồn tại");
        process.exit(1);
    }

    const content = fs.readFileSync(filePath, 'utf8');
    return content.split('\n')
        .map(line => line.trim())
        .filter(line => line !== '' && !isNaN(line))
        .map(Number);
}

/*function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
       // swapped = false;

        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; 
           //     swapped = true; //
            }
        }
        n--;
    } while (n != 0);
    return arr;
}
*/

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}


/*function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i]; 
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key; 
    }
    return arr;
}*/

/*function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}*/

console.log(sortedAscending.join(", "));
console.log(sortedDescending.join(", "));
