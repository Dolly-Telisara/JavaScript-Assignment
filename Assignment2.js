// Reverse Array
function reverseArray(arr)
{
    let leftIndex = 0 ;
    let rightIndex = arr.length - 1;

    while(leftIndex < rightIndex)
    {
        let temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;
        leftIndex++;
        rightIndex--;
    }
}
let arr = ["Mary", "Sarah", "Emma", "Alisa", "Jen"];
//arr.reverse();
console.log("Original array : ");
console.log(arr);
reverseArray(arr);
console.log("Reversed array : ");
console.log(arr);

// Print elements dvisible by 5

console.log("Elements divisible by 5 are : ");
let lb = 1;
let ub = 50;

for(let i=lb; i<=ub; i++)
{
    if(i%5==0)
    {
        console.log(i);
    }
}
