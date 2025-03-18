let numarr=[1,2,3,4,5]
let stringarr=["one","two","three","four","five"]
let chararr=['A','B','C','D','E']
let floatarr=[1.2,3.2,5.6,7.8,9.3]
console.log(numarr);
console.log(stringarr);
console.log(chararr);
console.log(floatarr);
console.log();
for(let i=0;i<numarr.length;i++){
	console.log(numarr[i]);
}
console.log();
numarr.forEach((n) =>{
	console.log(n)
})