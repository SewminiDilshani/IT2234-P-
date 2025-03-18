//Find the maximum number in the array using forEach

let numarr=[1,2,3,4,5]
let max=0;
numarr.forEach((n) =>{
	/*if(max<n){
		max=n
	}*/
	//(max<n)?max=n:n=n
	(max<n)&&(max=n)
})
console.log("Max is " +max)