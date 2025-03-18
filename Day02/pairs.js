/*
arr=[1,2,3,4,5,6]
target=7
write a code find the all pairs that sum up to the target
*/

let arr=[1,2,3,4,5,6]
let sum=0
console.log("Pairs that sum up to 7 ")
arr.forEach(n => {
	arr.forEach(m => {
         sum=n+m
		 if(sum==7){
	     console.log(n,m)
         }
    })
})