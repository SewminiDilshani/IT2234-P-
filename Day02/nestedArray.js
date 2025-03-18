//print the nested array [[1,2,30],[5,6],[8,5,3]]

let nestedarr=[[1,2,7],[5,6],[8,5,3]]
console.log(nestedarr)
console.log();
for(let i=0;i<nestedarr.length;i++){
	console.log(nestedarr[i])
}
console.log();
nestedarr.forEach((n) =>{
	n.forEach((i) =>{
		console.log(i)
	})
})