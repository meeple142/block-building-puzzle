var combs = require('js-combinatorics');
var boardLength = 6;
var set = [2, 2, 1, 1];
var power = combs.power(set).toArray();
var powerFilter;

function arraysMatch(array1, array2) {
    debugger;
    if (array1.length !== array2.length) {
        return false;
    }
    return array1.every(function (ele, i) {
        return ele === array2[i];
    })
}



function toUnique(ele, iUnique, array) {
    var firstIndexThatMatches = array.findIndex(function (eleFind) {
        return arraysMatch(eleFind, array[iUnique]);
    });
    return firstIndexThatMatches === iUnique;
}

function flatten(arrayOut, ele){
 return arrayOut.concat(ele);
}
function byLength(a,b){
 return a.length-b.length;
}
function byFirstNumb(a,b){
    var aNum = a[0],
    bNum = b[0];

    if(aNum === undefined){
        return -1;
    }
    if(bNum === undefined){
        return 1;
    }
    return aNum - bNum;
}
powerFilter = power.filter(toUnique);
//add before the map a reduce that adds all the options for different board lengths less then the board.
var allPossible = powerFilter.map((row) => {
    
    //padd out to board length
    // // handle empty set
    // if (row.length === 0) {
    //     return [row];
    // }

    return combs.permutation(row).toArray();
})
.reduce(flatten)
.filter(toUnique)
.sort(byFirstNumb)
.sort(byLength);

// console.log(power);
// console.log(powerFilter);
console.log(allPossible);

// allPossible.forEach((row)=>{
//     console.log(row)
//     console.log()
// });