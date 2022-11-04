const prompt = require("prompt-sync")();
const arr = [11, 14, 16, 19, 23, 25, 30];
var k = 0;
for(let i = arr[0]; i < arr[arr.length]; i++)
{
    if(i != arr[i])
    {
        console.log(i + " is missing in the array at index number " + k + 1);
    }
    k++;
}
