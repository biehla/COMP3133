
console.log('Buffer Example');

// var buf1 = new Buffer("A Hello World");
// console.log(buf1);
var buf1 = Buffer.from("A Hello World");
console.log(buf1);
console.log(buf1.toString());
console.log(`Length : ${buf1.length}`);
console.log(buf1[0]);
console.log(buf1[1]);
console.log(buf1[13]);
console.log(buf1.toString('utf-8', 2, 9));
console.log(buf1.toJSON());

var buf2 = Buffer.alloc(10);
var buf3 = Buffer.allocUnsafe(10);
console.log(buf2);
console.log(buf3);

var buf4 = Buffer.from("🙏🏻💐A®");
console.log(buf4);
console.log(buf4.toString());
console.log(`Length : ${buf4.length}`);
console.log(buf4[0].toString(16));
console.log(buf4[0].toString(10));
console.log(buf4[0].toString(8));
console.log(buf4[0].toString(2));
console.log(buf4.toString('utf-8', 0, 4));
console.log(buf4.toString('utf-8', 8, 12));
console.log(buf4.toString('utf-8', 12, 13));
console.log(buf4.toString('utf-8', 13, 15));

// for(a of buf4){
//     console.log(a);
// }

// for(a of buf4.entries()){
//     console.log(a);
// }

// for(a of buf4.keys()){
//     console.log(a);
// }

// for(a of buf4.values()){
//     console.log(a);
// }

var bufA = Buffer.from("ABCD");
var bufB = Buffer.from("1234");
console.log(bufA.equals(bufB)); //true or false
console.log(bufA.compare(bufB)); // 0 or 1 or -1

// var bufC = Buffer.alloc(10, 'A');//AAAAAAAAAA
// var bufC = Buffer.alloc(10, 'ABC'); //ABCABCABCA
// var bufC = Buffer.alloc(10, 65); //AAAAAAAAAA
var bufC = Buffer.alloc(10).fill('A'); //AAAAAAAAAA
console.log(bufC.toString());

const bufferArray = [bufA, bufB];
console.log(bufferArray);
var bufD = Buffer.concat(bufferArray);
// var bufD = Buffer.concat([bufA, bufB]);
console.log(bufD.toString()); //ABCD1234

console.log(bufD.includes('ABCD')); //true
console.log(bufD.includes('ACD')); //false
console.log(bufD.includes('D')); //true

console.log(bufD.indexOf('ABCD')); //0
console.log(bufD.indexOf('BCD')); //1
console.log(bufD.indexOf('12')); //4

console.log(bufD.lastIndexOf('ABCD')); //0

//Slice
const bufE = bufD.slice(0, 4)
console.log(bufE.toString()); //ABCD
bufE[0] = 97;
bufD[2] = 90;
console.log(bufD.toString());
console.log(bufE.toString()); //ABCD

for (a of bufE.keys()) {
  console.log(a);
}

//Copy
bufD.copy(buf2);
console.log(buf2.toString()); //ABCD1234

bufD.copy(buf2, 4, 0, 4);
console.log(buf2.toString());
