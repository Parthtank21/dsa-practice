// Output:
// E 
// D E 
// C D E 
// B C D E 
// A B C D E 

function pattern(n) {
    for (let i = 0; i < n; i++) {
        let result = "";
        for (let j = 0; j <= i; j++) {
            result += `${String.fromCharCode(65 + n - 1 - i + j)} `
        }
        console.log(result);
    }
}

pattern(5);