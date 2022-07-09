
//store elements of chossen ids in variables
let upload = document.getElementById('upload'),
    output = document.getElementById('output');

//event listener that execute function when button is clicked
upload.addEventListener('change', () => {
    //create file reader instance
    let fr = new FileReader();
    //read file as text
    fr.readAsText(upload.files[0]);
    //once the file is loaded execute onload callback
    fr.onload = function () {
        //make an array out of the selected txt file, the whitespace between words is used to separate each element in the array
        const arrayOfStrings = fr.result.split(' ');
        //use nonRep fuction to randomly reorder 'array of strings' the array is then converted to a string and every ',' is replace with a space
        let scrambledTxt = nonRep(arrayOfStrings).toString().replace(/,/g, ' ');
        //display reorded string on screen
        output.innerHTML = scrambledTxt;
    }
})

//the nonRep function takes the length of an array passed into the function and uses it to reorder the array by moving its contents at the index of nonrepeating random numbers into new an empty array

function nonRep(arrayToScramble) {
    //create empty array to store result
    let scrambledArray = [],
        //store length of array passed into the function
        index = arrayToScramble.length,
        //init j at zero
        j = 0;

    //decrement from array length one at a time till zero
    while (index--) {
        //j becomes a random number between 0-1 multiplyed by the current index plus 1, this ensures none of the random number exceed the length of the array, j is then rounded down to the next whole number
        j = Math.floor(Math.random() * (index + 1));
        //the element of the array passed to the function at index j is pushed into empty array
        scrambledArray.push(arrayToScramble[j]);
        //remove element at index j so it can not be repeated
        arrayToScramble.splice(j, 1);
    }
    //return new array
    return scrambledArray;
}
