const prompt = require("prompt-sync")();

function sort_letters(str1) {
    var obj1 = {};
    for (var _i = 0, str1_1 = str1; _i < str1_1.length; _i++) {
        var i = str1_1[_i];
        if (obj1.hasOwnProperty(i)) {
            obj1[i] += 1;
        }
        else {
            obj1[i] = 1;
        }
    }
    return obj1;
}
function sort_object(obj1) {
    var obj2 = {};
    while (Object.keys(obj1).length > 0) {
        var elem = Object.keys(obj1)[0];
        for (var j in obj1) {
            if (obj1[j] > obj1[elem]) {
                elem = j;
            }
        }
        obj2[elem] = obj1[elem];
        delete obj1[elem];
    }
    return obj2;
}
function find_elem(obj1, num1) {
    var arr1 = [];
    for (var i in obj1) {
        if (obj1[i] === num1) {
            arr1.push(i);
        }
    }
    return arr1;
}
var text1 = "Try to understand them, because the English that we speak today is based on what our great, great, great, great grandparents spoke before! Of course, not all these texts were originally written in English. The Bible, for example, is a translation.";
var obj_text = sort_letters(text1);
var obj_sorted = sort_object(obj_text);
var quest=+(prompt('Enter a number for letter or element : '))
var find_elem1 = find_elem(obj_sorted, quest);
if(find_elem1.length==0){
    console.log("There is no letter with this count")
}else{
console.log(find_elem1.join());
}
