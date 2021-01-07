/*Question 2:-
Find the maximum consecutive 1's in an array of 0's and 1's.*/

let arr = [0,0,1,1,0,0,0,1,0,0,1,1,1,0];
let count = 0;
let maxConsecutiveOne = 0;
arr.forEach((element)=>{
if(element == 1){
    count++;
    if(count>maxConsecutiveOne){maxConsecutiveOne = count}
}else{
    
    count = 0;
}

})
console.log(maxConsecutiveOne);