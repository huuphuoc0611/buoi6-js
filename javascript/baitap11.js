let expenses = [50000, 120000, 80000];
let total = expenses.reduce((sum, value) => {
    return sum + value;
}, 0 );
console.log(total);