function containsDuplicate(nums: number[]): boolean {
    let set1 =new Set(nums);
    if(nums.length>set1.size)return true
    return false
};
