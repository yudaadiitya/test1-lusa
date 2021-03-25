let array = [1, 2, 3];
let results = [];
let hasil = [];

for (let i = 0; i < array.length; i++) {

  for (let j = i; j < array.length; j++) {
    hasil.push([array[i], array[j]]);
  }
}

console.log(hasil);