function isHappy(n: number): any{
  let num1:number =0;
  if(n===1){return true}
  else if(n<=6 && n>1){return false}
 while(n > 6){
 let num1: number =0;
 let str1: string = n.toString();
 let arrstr: any[] =[];
 for(let i=0;i<str1.length;i++){
   arrstr.push(+str1[i]);
 }
 
 for(let i=0;i< arrstr.length;i++){
   
   num1=num1+(arrstr[i]**2)
   
}
n=num1  ;
num1=0 ;
if(n===1){return true}
else if(n!=1 && n<=6){return false}
}    
};
