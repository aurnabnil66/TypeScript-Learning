let tuple1: [number, string, number] = [10, 'John', 20];

let tuple2: [string, boolean] = ['Messi', true];

// spread operator 
let concatanatedTuple: [number, string, number, string, boolean] = [...tuple1, ...tuple2];   

console.log(concatanatedTuple)

