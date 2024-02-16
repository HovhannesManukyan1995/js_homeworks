const prompt = require("prompt-sync")();
//1
//let num=prompt('Enter number that you want to print: ');
//let num1=prompt('Enter count that much yuo want to print: ')
//function count1(num,count){
//for(let i=0;i<count;i++){
//console.log(String(num))
//num++
//}
//}
//
//count1(num,num1)

//2
//function func(num){
//setTimeout(function (){console.log(new Date())},num)
//console.log(num)
//}
//let ask= +prompt('Enter the sleep time: ')
//func(ask)
//

//3
//let arr1=[1,2,3,4];
//let init1= +prompt('Enter the number: ');
//function fn(arr,init){
//if(arr.length==0){return init}
//let sum=0;
//if(init==0 || init==null){
//for(let i=0;i<arr.length;i++){
//sum+=arr[i]
//}
//return sum}
//if(init>0){
//sum=init
//for(let i=0;i<arr.length;i++){
//sum=sum+arr[i]*arr[i]
//}
//return sum
//}
//}
//console.log(fn(arr1,init1))

//4
//let arr1=[1,23,4,32,23];
//
//function fn(arr){
//	let arr2=[];
//	for(let i of arr){
//		if(i>18){arr2.push(i)}
//
//	}
//return arr2
//}
//console.log(fn(arr1))

//5
//function fibGenerator(){
//    let inp=5;
//    let a=0;
//    let b=1;
//    let arr1=[];
//    let res=0;
//
//    while(arr1.length<inp){
//            arr1.push(a)
//            res=a+b
//            a=b
//            b=res
//            
//    }return arr1
//};
//console.log(fibGenerator())




//6
//let chunk = function(arr, size) {
//        let arr1 = []
//	i = 0
//	j = size
//while (i < arr.length) {
//    let arr2 = arr.slice(i, j)
//    arr1.push(arr2)
//    i += size
//    j += size
//}
//return arr1};
//
//console.log(chunk([1,1,2,3,4,5],1))



//7
//var createHelloWorld = function() {
//    
//    return function(...args) {
//        return "Hello World"
//    }
//};
//let a=createHelloWorld()
//console.log(a('sfdf'))



//8
//const calculator = {
//  result: 0,
//
//  add(num) {
//    this.result += num;
//    return this;
//  },
//
//  subtract(num) {
//    this.result -= num;
//    return this;
//  },
//
//  multiply(num) {
//    this.result *= num;
//    return this;
//  },
//
//  divide(num) {
//    if (num === 0) {
//      throw new Error("Division by zero is not allowed");
//    }
//    this.result /= num;
//    return this;
//  },
//
//  getResult() {
//    return this.result;
//  },
//
//  clear() {
//    this.result = 0;
//    return this;
//  }
//};
//
//const result = calculator
//  .add(5)
//  .subtract(2)
//  .multiply(3)
//  .divide(4)
//  .getResult();
//
//console.log("Patasxan:", result); 






//9
//let obj={}
//if(Object.keys(obj).length <0 || Object.keys(obj).length >0){console.log(false)}
//else{console.log(true)}


//10 
//
//function sort(arr, fn) {
//  return arr.slice().sort((a, b) => fn(a) - fn(b));
//}
//
//let arr = [3, 1, 5, 2, 4];
//let fn = num => num * num; 
//let sortedArr = sort(arr, fn);
//console.log(sortedArr); 








