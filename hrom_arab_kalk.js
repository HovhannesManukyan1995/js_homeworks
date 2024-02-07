const prompt = require("prompt-sync")();
function grek(sol){
const num = {
  'M': 1000,
  'D': 500, 
  'C': 100,
  'L': 50, 
  'X': 10,
  'V': 5,
  'I': 1
};
let res1=0;
if(sol.length<=1){return num[sol]}
else{
for(let i=0;i<sol.length ;i++){
	let num1=sol[i];
	let res2=num[num1];
	let res3=num[sol[i+1]]
	if(res2 == res3 || res2 >res3 && i!==sol.length-1){
		res1=res1+res2
	
	}if((i)==sol.length-1 && res2<num[sol[i-1]]){res1=res1+res2}	
	if(res2<res3){
	  res1=res1+(res3-res2)
	  sol=sol.substring(0,i+1)+sol.substring(i+2,sol.length)
        console.log(sol)
	}
}

}return res1
}
console.log(grek(prompt('Enter hromiakan tver: ')))
