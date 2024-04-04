function isValid(s: string): boolean {
    let stack: string[] = [];
    for (let i of s){
      if (i === '(' || i === '[' || i === '{'){
        stack.push(i)
      }else if (stack[stack.length-1] === '(' && i === ')'){
        stack.pop()
      } else if (stack[stack.length-1] === '[' && i === ']'){
        stack.pop()
      } else if (stack[stack.length-1] === '{' && i === '}'){
        stack.pop()
      } else {
        return false
      };
    }
    return stack.length === 0
};
