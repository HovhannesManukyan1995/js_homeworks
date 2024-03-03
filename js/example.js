const prompt = require("prompt-sync")();
//let sa=prompt('tell me why: ')
//let hi='hello world';
//console.log(sa,hi)

//let arr1=[NaN, 0, 15, false, -22, '', undefined, 47, null];
//let arr2=[];
//for(const i of arr1){
//if(i){arr2.push(i)}
//}
//console.log(arr2)



//let arr1=[NaN, 0, 15, false, -22, '', undefined, 47, null];
//var item = arr1[Math.floor(Math.random()*arr1.length)];
//console.log(item)

//let arr1=[NaN, 0, 15, false, -22, '', undefined, 47, null];
//console.log(arr1)
//let sp=arr1.splice(2,1)
//arr1.splice(0,0,sp[0])
//console.log(arr1)





//function prefix(strs) {
//    if (strs.length==0) return '';
//
//    let prefix = strs[0];
//
//    for (let i = 1; i < strs.length; i++) {
//        while (strs[i].indexOf(prefix) !== 0) {
//            prefix = prefix.substring(0, prefix.length - 1);
//            if (prefix==0) return '';
//        }
//    }
//
//    return prefix;
//}
//
//console.log(prefix(['floor','flowers','fko']))








//function grek(sol){
//const num = {
//  'M': 1000,
//  'D': 500, 
//  'C': 100,
//  'L': 50, 
//  'X': 10,
//  'V': 5,
//  'I': 1
//};
//let res1=0;
//if(sol.length<=1){return num[sol]}
//else{
//for(let i=0;i<sol.length ;i++){
//	let num1=sol[i];
//	let res2=num[num1];
//	let res3=num[sol[i+1]]
//	if(res2 == res3 || res2 >res3 && i!==sol.length-1){
//		res1=res1+res2
//	
//	}if((i)==sol.length-1 && res2<num[sol[i-1]]){res1=res1+res2}	
//	if(res2<res3){
//	  res1=res1+(res3-res2)
//	  sol=sol.substring(0,i+1)+sol.substring(i+2,sol.length)
//        console.log(sol)
//	}
//}
//
//}return res1
//}
//console.log(grek('CLIX'))



//function printNumbers(from, to) {
//  let current = from;
//
//  let timerId = setInterval(function() {
//    console.log(current);
//    if (current == to) {
//      clearInterval(timerId);
//    }
//    current++;
//  }, 1000);
//}
//
//// использование:
//printNumbers(5, 10);
//
//
























//let json = '{"name":"John", "age": 30}'; // данные с сервера
//
//let user = JSON.parse(json); // преобразовали текстовое представление в JS-объект
//
//// теперь user - объект со свойствами из строки
//try{
//console.log( user.name ); // John
//console.log( user.age );  // 30
//}catch (e) {console.log('something')
//console.log(e.name)
//console.log(e.message)
//}




function countMatches(items, ruleKey, ruleValue)
{
if(ruleKey=="type"){ruleKey=0};
if(ruleKey=="color"){ruleKey=1};
if(ruleKey=="brand"){ruleKey=2};

let count=0;
for(let i=0;i<items.length;i++){
	if(items[i][ruleKey]==ruleValue){count++}	
	console.log(items[i][ruleKey])	
}

return count
};
let items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]]
console.log(countMatches(items,"type","phone"))












