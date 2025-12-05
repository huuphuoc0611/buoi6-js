let stocks = [true, false, true];
let hetHang = stocks.some(stock => stock === false );
console.log("some = ",hetHang);
let conHang = stocks.every(stoc => stoc === true);
console.log("every = ",conHang);