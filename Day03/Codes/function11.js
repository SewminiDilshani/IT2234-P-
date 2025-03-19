const mysum1= (...n)=>{
	//get the sum
	return n.reduce((t,i)=>t=t+i)
}
console.log(mysum1(4,5,6,8,2))