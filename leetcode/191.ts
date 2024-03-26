function hammingWeight(n: number): number {
    let num1: string=n.toString(2);
    let count1: number =0;
    for(let i of num1.split('') ) {
        if(i==='1'){count1++}
    }
    return count1
}
