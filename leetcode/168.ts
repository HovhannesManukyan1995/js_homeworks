function convertToTitle(columnNumber: number): string {
       let columnName: string = [];
  
        while (columnNumber > 0) {
            // Find remainder
            let rem: number= columnNumber % 26;
  
            // If remainder is 0, then a
            // 'Z' must be there in output
            if (rem == 0) {
                columnName.unshift("Z");
                columnNumber = Math.floor(columnNumber / 26) - 1;
            }
            else // If remainder is non-zero
            {
                columnName.unshift(String.fromCharCode((rem - 1) + 'A'.charCodeAt(0)));
                columnNumber = Math.floor(columnNumber / 26);
            }
        }
        return columnName.join('')
};
