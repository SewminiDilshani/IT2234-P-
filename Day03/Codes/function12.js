//Callback function
//A function passed as an argument

const greet = (msg,fun)=>{
	console.log("Hi.." +msg)
	fun()
}
greet("Good morning",()=>{console.log("My name is David")})