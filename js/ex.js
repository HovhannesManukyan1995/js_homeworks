//let decimal: number = 6;
//// шестнадцатиричная система
//let hex: number = 0xf00d;       // 61453 в десятичной
//// двоичная система
//let binary: number = 0b1010;    // 10 в десятичной
//// восьмиричная система
//let octal: number = 0o744;      // 484 в десятичной
//console.log(decimal);
//console.log(hex);
//console.log(binary);
//console.log(octal);
//
//function hello (){
//    console.log("Hello TypeScript");
//};
// 
//const message: ()=>void = hello;
//message();
//
//
//function mathOp(x: number, y: number, operation: (a: number, b: number) => number): number{
//
//    const result = operation(x, y);
//    return result;
//}
//console.log(mathOp(10, 20, (x,y)=>x+y)); // 30
//console.log(mathOp(10, 20, (x, y) => x * y)); // 200
//
//
//let x: number = undefined;
//console.log(x);
//x = null;
//console.log(x);
//x = 5;
//console.log(x);
var Season;
(function (Season) {
    Season[Season["Winter"] = 0] = "Winter";
    Season[Season["Spring"] = 1] = "Spring";
    Season[Season["Summer"] = 2] = "Summer";
    Season[Season["Autumn"] = 3] = "Autumn";
})(Season || (Season = {}));
;
//let current: Season = Season.Summer;
//console.log(current);       // 2
//current = Season.Autumn;
var header = null;
header.innerText = "Hello Typescript!";