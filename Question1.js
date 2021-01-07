/*Question 1:-
Define an array of numbers (use any random numbers). Write a program to print only the even numbers of the array.
Do not use any library functions, need to do via for loops only*/

var randomNumbers = [5,6,7,8,2,1,5,6,7];
for(let i = 0 ; i<randomNumbers.length ;i++){
    if((randomNumbers[i]%2)==0){
        console.log(randomNumbers[i]);
    }
    
}