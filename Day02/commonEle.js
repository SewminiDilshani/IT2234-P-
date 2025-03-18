/*
a=[4,5,6,3,7]
b=[8,3,2,1,5]
Find the common elements between a and back
*/

let a=[4,5,6,3,7]
let b=[8,3,2,1,5]
console.log(a)
console.log(b)
for(let i=0;i<a.length;i++){
	for(let j=0;j<b.length;j++){
		if((a[i]==b[j])){
			console.log("Common Elements a and b: " +a[i],b[j])
		}
	}
}