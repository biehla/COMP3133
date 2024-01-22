import { allocUnsafe } from "bun";

// 
console.log("Hello via Bun!");

// var buf1 = new Buffer("A Hello World")
// coneole.log(buf1)
var buf1 = Buffer.from("Hello World")
var buf2 = Array.from("Hello World")
console.log(buf1)
console.log(buf1.toString())
console.log(buf1.length)
console.log(buf1[0])
console.log(buf1.toString('utf-8', 0, 5))
console.log(buf1.toJSON())
console.log({ buf2 })

var buf2 = allocUnsafe("Hello World".length)
console.log(buf2)
//var buf2 = alloc("Hello World".length)
console.log(buf2)
var buf4 = Buffer.from("🎄")
console.log(buf4.toString())

for (let b of buf4) {
  console.log(b)
}

for (let b of buf4.entries()) {
  console.log(b)
}



for (let b of buf4.keys()) {
  console.log(b)
}


for (let b of buf4.values()) {
  console.log(b)
}


var bufA = Buffer.from("ABCD")
var bufB = Buffer.from("1234")
console.log(bufA.equals(bufB))


console.log(bufA.compare(bufB))


var bufC = Buffer.alloc(10, "A")
console.log(bufC.toString())


var bufC = Buffer.alloc(10, 65)
console.log(bufC.toString())

var bufC = Buffer.alloc(10).fill("A")
console.log(bufC.toString())


const bufferArray = [bufA, bufB]
console.log(bufferArray)
var bufD = Buffer.concat(bufferArray)
console.log(bufD)
console.log(bufD.toString())

console.log(bufD.includes("ABCD"))

console.log(bufD.indexOf("ABCD"))
console.log(bufD.indexOf("CD"))

var bufE = bufD.slice(0, 4)
console.log(bufE.toString())
bufE[0] = 97
console.log(bufE.toString())

for (let a of bufE.keys()) {
  console.log(a)
}

bufD.copy(buf2)
console.log(bufD.toString())

bufD.copy(buf2, 0, 0, 4)
console.log(buf2.toString())


