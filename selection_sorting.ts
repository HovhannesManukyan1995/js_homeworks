function selectSort(arr1: number[]):number[]{
     
    let arr2:number[]=[];
    
    while(arr1.length>0){ 
      let smallest: number = arr1[0]; 
      let ind: number=0;
      for(let i=0;i<arr1.length;i++){
        if(smallest>arr1[i]){
          smallest=arr1[i];
          ind=i
        }
        
            

        }arr2.push(smallest)
        arr1.splice(ind,1)
        
        
      }return arr2
}
let arr1: number[] = [5,3,2,6,9,1,6,7,8,2,-5];
selectSort(arr1)

//selection sort 2
function selectSort2(arr1: number[]): number[] {
  for (let i = 0; i < arr1.length - 1; i++) {
      let ind: number = i;
      for (let j = i + 1; j < arr1.length; j++) {
          if (arr1[j] < arr1[ind]) {
              ind = j;
          }
      }
      if (ind !== i) {
          let num1: number = arr1[i];
          arr1[i] = arr1[ind];
          arr1[ind] = num1;
      }
  }
  return arr1;
}

let arr1: number[] = [64,-1, 25, 12, 22, 11,2,5,1,8];

console.log(selectSort2(arr1));
