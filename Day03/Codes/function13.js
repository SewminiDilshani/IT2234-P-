const multwo= (n)=>n*2
const multwo1= (n)=>n*3
const myarr= (mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}
myarr(multwo,4,5,6,8,2)
console.log()
myarr(multwo1,4,5,6,8,2)