function isPalindrome(x: number): boolean {
    let y: string = x.toString();
    let z: string = y.split('').reverse().join('');
    if(y===z)return true
    else return false

};
